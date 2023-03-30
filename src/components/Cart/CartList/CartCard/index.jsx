import { StyledCardList } from "./style";

export function CartCard({ product, removeProductCart }) {
    return (
        <StyledCardList>
            <div className="card__container">
                <div className="card__img">
                    <img src={product.img} alt={product.name}/>
                </div>
                <div className="card__infos">
                    <p>{product.name}</p>
                    <span>{product.category}</span>
                </div>
            </div>
            <button onClick={() => removeProductCart(product.id)}>Remover</button>
        </StyledCardList>
    )
}