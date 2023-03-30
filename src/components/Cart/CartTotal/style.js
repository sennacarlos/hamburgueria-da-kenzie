import styled from "styled-components";

export const StyledCartTotal = styled.div`
    border-top: 3px solid var(--gray-20);
    border-radius: 0px 0px 8px 8px;
    
    height: 130px;
    padding: 14px;

    background-color: var(--gray-0);
    
    div {
        display: flex;
        justify-content: space-between;

        margin-bottom: 22px;

        p {
            font-size: var(--heading4);
            font-weight: 600;

            color: var(--gray-100);
        }

        span {
            font-size: var(--heading4);
            font-weight: 600;

            color: var(--gray-50);
        }
    }

    button {
        width: 100%;
        height: 50px;

        background-color: var(--gray-20);
        color: var(--gray-50);

        font-size: var(--headline);
        font-weight: 600;

        border: none;
    }
`