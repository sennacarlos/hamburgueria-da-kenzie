import styled from "styled-components";

export const StyledProductsList = styled.ul`
    margin-top: 30px;

    display: flex;
    overflow-x: auto;
    gap: 20px;

    padding: 17px;

    @media (min-width: 1024px) {
        margin-top: 0px;
        overflow: hidden;

        display: grid;
        grid-template-columns: repeat(3, 1fr);

        padding: 0;
    }
`