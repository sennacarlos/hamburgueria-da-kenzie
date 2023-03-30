import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: var(--gray-0);
    height: 139px;
    padding: 17px;

    nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 14px;

        h1 {
            font-size: var(--heading2);
            color: var(--gray-100);

            span {
                font-size: var(--heading3);
                color: #EB5757;
            }
        }


        div {
            display: flex;
            justify-content: space-between;

            width: 100%;
            height: 60px;
            padding: 10px;

            border: 2px solid var(--gray-20);
            border-radius: var(--radius-default);
            

            background-color: white;

            input {
                width: 70%;

                border: none;
                outline: none;

                font-size: var(--headline);
                font-weight: 400;

                color: var(--gray-50);
            }

            button {
                width: 25%;

                border: none;

                background-color: var(--color-primary);
                color: white;
            }
        }

        div:hover {
            border: 2px solid var(--gray-50)
        }

    }

    @media (min-width: 1024px) {

        height: 95px;
        
        nav {
            flex-direction: row;
            justify-content: space-between;

            div {
                width: 365px;
            }
        }
    }

`
