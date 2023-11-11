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
            color: #9b9275 ;
        }

        .slick-next:before {
            color: #9b9275 ;
        }
    }

`