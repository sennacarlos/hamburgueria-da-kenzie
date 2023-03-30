import { StyledHeader } from "./style";

export function Header({ setSearch }) {
    return (
        <>
        <StyledHeader>
            <div className="container">
                <nav>
                    <h1>Burguer<span> Kenzie</span></h1>
                    <div>
                        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Digitar Pesquisa"/>
                        <button>Pesquisar</button>  
                    </div>
                </nav>
            </div>
        </StyledHeader>
        </>
    )
}