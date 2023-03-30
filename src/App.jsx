import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { ProductsList } from "./components/ListProducts"
import { CartProducts } from "./components/Cart"

import { useState } from "react"
import { useEffect } from "react"

import { api } from "./services/api"

function App() {
  const productCartLocalStorage = localStorage.getItem("@hambugueriaDaKenzie:cart")
  const [allProducts, setAllProducts] = useState([])
  const [cartProducts, setCartProducts] = useState(productCartLocalStorage ? JSON.parse(productCartLocalStorage)
    : [])
  const [search, setSearch] = useState("")
  const filteredProduct = !search ? allProducts : allProducts.filter(product =>
    product.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
    product.category.toLowerCase().includes(search.toLocaleLowerCase()))

  useEffect(() => {
    async function loadProductList() {
      try {
        const response = await api.get('products')
        setAllProducts(response.data)
      } catch (error) {
        toast.error(error)
      }
    }
    loadProductList()
  }, [])

  useEffect(() => {
    localStorage.setItem("@hambugueriaDaKenzie:cart", JSON.stringify(cartProducts))
  }, [cartProducts])

  function addProductToCart(product) {
    if (!cartProducts.some((element) => element.id === product.id)) {
      const newCartList = [...cartProducts, product]
      setCartProducts(newCartList)
      toast.success("Produto adicionado ao carrinho com sucesso")
    } else {
      toast.error("Este item já está no seu carrinho")
    }
  }

  function removeProductCart(productId) {
    const newList = cartProducts.filter((product) => product.id !== productId)
    setCartProducts(newList)
    toast.success("Produto removido com sucesso")
  }

  function totalCart() {
    const total = cartProducts.reduce((previousValue, element) => {
      return previousValue + element.price
    }, 0)

    return total
  }

  function clearCart() {
    setCartProducts([])
  }

  return (
    <>
      <ToastContainer position="bottom-left" autoClose={2000} />
      <GlobalStyle />
      <Header setSearch={setSearch} />
      <main className="container">
        <div className="container__desktop">
          <div className="container__left">
            <ProductsList allProducts={filteredProduct} addProductToCart={addProductToCart} />
          </div>
          <div className="container__right">
            <CartProducts cartProducts={cartProducts} totalCart={totalCart} clearCart={clearCart}
              removeProductCart={removeProductCart} />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
