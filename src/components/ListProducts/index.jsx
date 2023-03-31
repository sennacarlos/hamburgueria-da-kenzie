import { ProductCard } from "./CardProduct";
import { StyledProductsList } from "./style";

export function ProductsList({ allProducts, addProductToCart, search={search} }) {
    return (
        <>
            {search === "" ? null : <h3 className="search__result">Resultados para: <span>{search}</span></h3>}
            <StyledProductsList>
                {allProducts.map(product =>
                    <ProductCard key={product.id} product={product} addProductToCart={addProductToCart}/>
                    )}
            </StyledProductsList>
        </>
    )
}