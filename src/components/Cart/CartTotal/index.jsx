import { StyledCartTotal } from "./style";

export function CartTotal ({ totalCart, clearCart }) {
    return (
        <StyledCartTotal>
            <div>
                <p>Total</p>
                <span>{totalCart().toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
            </div>
            <button onClick={() => clearCart()}>Remover Todos</button>
        </StyledCartTotal>
    )
}