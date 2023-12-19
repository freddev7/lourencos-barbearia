import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;


        .slick-slide img {
            padding: 0 0.6rem;
        }

        .slick-prev:before {
            display:none;
        }

        .slick-next:before {
            display: none;
        }
    }

`