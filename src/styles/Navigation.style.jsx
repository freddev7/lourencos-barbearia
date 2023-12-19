import styled from "styled-components";


export const NavigationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .arrow_icon {
        cursor:pointer;
        position:fixed;
        bottom: 100px;
        right: 33px;
        z-index: 100;
    }

    .arrow_icon i {
        color: #ffffff;
        font-size: 3rem;
    }
    
    .wpp_icon {
        display:flex;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(349.78deg, rgb(2, 196, 73) -37.21%, rgb(0, 255, 94) 36.61%);
        border-radius: 1.6rem;
        width: 4.6rem;
        height: 4.6rem;
        box-shadow: 0 1.5rem 3.5rem rgba(0, 0, 0, 0.1);
        cursor: pointer;
        position: fixed;
        bottom: 30px;
        right: 20px;
        z-index: 100;

}

.wpp_icon i {
        color: #fff;
        font-size: 3rem;
        display:flex;

}


`