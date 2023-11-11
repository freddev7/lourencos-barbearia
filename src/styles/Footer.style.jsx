import styled from "styled-components";


export const FooterContent = styled.div`
    background-color: #000000;
    font-family: 'Onest', sans-serif;
    color: #fff;
`;

export const MapContent = styled.div`
    overflow: hidden;
    padding-bottom: 26.25%;
    position: relative;
    height: 0;
    background-color:transparent;

    iframe {
        left: 0;
        top: 0;
        border: 0;
        height: 100%;
        width:100%;
        position: absolute;
        z-index: 0;
    }
    
     @media screen and (max-width: 1024px) and (min-width: 849px) {
        padding-bottom:40%;
    }  

    @media screen and (max-width: 848px) and (min-width: 591px) {
        padding-bottom:50%;
    }

    @media screen and (max-width: 591px) and (min-width: 320px) {
        padding-bottom:100%;
    }
    
`

export const FooterContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:2rem 0rem 1rem 0rem;
    background-color: #3d3325;

    .icon {

        display:flex;
        flex-direction:column;
        align-items:center;

        i {
            font-size:3rem;
        }

        p {
            text-transform:uppercase;
            margin-bottom:1rem;
        }


        & > a {
            color:#fff;
            opacity:0.6;
        }

        & a:hover {
            opacity: 100%;           
        }

    }

    .auth_prod {
        display:grid;
        grid-template-columns: 1fr 1fr;
        margin-top:1rem;

    p {
        font-weight: 300;
        font-size: 0.8rem;
        position: relative;
        left:1rem;
        top: 0.1rem;
    }
   

    a img{
        max-width: 2.9rem;
        margin-left: 1rem;
   }
    }

`