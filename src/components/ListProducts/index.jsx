import { ProductCard } from "./CardProduct";
import { StyledProductsList } from "./style";

export function ProductsList({ allProducts, addProductToCart }) {
    return (
        <>
            <StyledProductsList>
                {allProducts.map(product =>
                    <ProductCard key={product.id} product={product} addProductToCart={addProductToCart}/>
                    )}
            </StyledProductsList>
        </>
    )
}