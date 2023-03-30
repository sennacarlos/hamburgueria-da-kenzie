import styled from "styled-components";

export const StyledProductCard = styled.li`
    min-width: 260px;
    height: 346px;
    border: 2px solid var(--gray-20);
    border-radius: var(--radius-default);

    .productImg {
        background-color: var(--gray-0);

        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 8px 8px 0px 0px;

        img {
            object-fit: contain; 
            height: 100%;

            align-self: center;
        }
    }

    .productInfos {
        padding: 25px 20px;

        display: flex;
        flex-direction: column;
        gap: 14px;

        h3 {
           font-size: var(--heading3);
           font-weight: 700;

           color: var(--gray-100);

        }

        span {
            font-size: var(--caption);
            font-weight: var(--caption-weight);

            color: var(--gray-50);
        }

        p {
            font-size: var(--heading4);
            font-weight: 600;

            color: var(--color-primary);
        }

        button {
            width: 106px;
            height: 40px;

            font-size: var(--heading4);
            font-weight: 600;

            background-color: var(--color-primary);
            color: white;

            border: none;
        }
    }

    @media (min-width: 1024px){
        min-width: 200px;
    }

    @media (min-width: 1440px){
        min-width: 250px;
    }
`