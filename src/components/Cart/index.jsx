import { CartList } from "./CartList";
import { CartTotal } from "./CartTotal";

export function CartProducts({ cartProducts, totalCart, clearCart, removeProductCart }) {
    return (
        <>
        <div className="card__header">
            <h3>Carrinho de compras</h3>
        </div>
        {cartProducts.length > 0 ? (
            <>
            <CartList cartProducts={cartProducts} removeProductCart={removeProductCart}/>
            <CartTotal totalCart={totalCart} clearCart={clearCart}/>
            </>
        ) : (
        <div className="card__noProduct">
            <h3>Sua sacola está vazia</h3>
            <span>Adicione itens</span>
        </div>
        )}
        </>
    )
}