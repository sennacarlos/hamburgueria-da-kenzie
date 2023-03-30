import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    body, header, main, section, div, a, p, h1, h2, h3, ul, li, form, input, button, img {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
    }

    button {
        cursor: pointer;
        outline: none;
        border-radius: var(--radius-default);
    }

    :root {
        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;

        --gray-100: #333333;
        --gray-50: #828282;
        --gray-20: #E0E0E0;
        --gray-0: #F5F5F5;

        --negative: #E60000;
        --warning: #FFCD07;
        --sucess: #168821;
        --information: #155BCB; 

        --heading1: 1.625rem; /* 26px */
        --heading2: 1.375rem; /* 22px */
        --heading3: 1.125rem; /* 18px */
        --heading4: .875rem; /* 14px */
        --headline: 1rem; /* 16px */ 
        --body-600: .875rem; /* 14px */
        --caption: .75rem; /* 12px */

        --heading-weight: 700; 
        --headline-weight: 600;
        --body-600-weight: 500;
        --caption-weight: 400;

        --radius-default: 8px;
        --radius-card: 5px 
    } 

    .container__right {
        padding: 17px;
    }

    .card__header {
        background-color: var(--color-primary);
        height: 65px;
        padding: 22px 20px;
        border-radius: 8px 8px 0px 0px;

        h3 {
            font-size: var(--heading3);
            font-weight: var(--heading-weight);

            color: white;
        }
    }

    .card__noProduct {
        background-color: var(--gray-0);
        height: 160px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 8px;

        border-radius: 0px 0px 8px 8px;

        h3 {
            font-size: var(--heading3);
            font-weight: var(--heading-weight);

            color: var(--gray-100);
        }

        span {
            font-size: var(--heading4);
            font-weight: 400;

            color: var(--gray-50);
        }
        
    }

    @media (min-width: 1024px) {
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .container__desktop {
            display: flex;
            justify-content: space-between;
            gap: 5px;

            margin-top: 30px;
        }

        .container__left {
            width: 800px;
        }

        .container__right {
            width: 360px;
            padding: 0;
        }
    }

    @media (min-width: 1440px) {

        .container__desktop {
            gap: 20px;
        }

        .container__left {
            width: 800px;
        }

        .container__right {
            width: 360px;
            padding: 0;
        }
    }

`