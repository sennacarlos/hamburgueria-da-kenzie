import { CartCard } from "./CartCard";
import { StyledCartList } from "./style";

export function CartList({ cartProducts, removeProductCart }) {
   return (
        <StyledCartList>
            {cartProducts.map(product =>
                <CartCard key={product.id} product={product} removeProductCart={removeProductCart}/>
                )}
        </StyledCartList>
   )
}