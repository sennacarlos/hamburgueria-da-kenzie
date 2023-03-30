import styled from "styled-components";

export const StyledCardList = styled.li`
    height: 80px;
    display: flex;
    justify-content: space-between;
    
    
    .card__container {
        display: flex;

    }

    .card__img {
        width: 80px;
        background-color: var(--gray-20);
        border-radius: var(--radius-card);
        
        img {
            object-fit: cover;
            width: 80px;
            height: 80px;
        }
    }

    .card__infos {
        margin-left: 10px;

        p {
            font-size: var(--heading4);
            font-weight: var(--heading-weight);

            color: var(--gray-100);

            margin: 10px 0 10px 0;
        }

        span {
            font-size: var(--caption);
            font-weight: 600;

            color: var(--gray-50);
        }
    }

    button {
        font-size: var(--caption);
        font-weight: 500;

        width: 51px;
        height: 15px;

        border: none;
        background-color: transparent;

        color: #BDBDBD;

        margin-top: 10px;
    }
`