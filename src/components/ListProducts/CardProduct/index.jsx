import { StyledProductCard } from "./style";

export function ProductCard({ product, addProductToCart }) {
    return (
        <StyledProductCard>
            <div className="productImg">
                <img src={product.img} />
            </div>
            <div className="productInfos">
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <p>{product.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                <button onClick={() => addProductToCart(product)}>Adicionar</button>
            </div>
        </StyledProductCard>
    )
}