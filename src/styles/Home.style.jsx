import homephoto from "../assets/homephoto.jpg"
import logo2 from "../assets/logo2.png"
import styled from "styled-components";

export const HomeContainer = styled.div`
    background-color: #000000;
    display:flex;
    flex-direction:column;
    padding: 0rem;
`;

export const FirstHomeContainer = styled.div`
    background: linear-gradient(360deg, #3d3325 1%, rgba(255, 255, 255, 0) 256.61%), url(${homephoto});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 3rem 6rem 0rem 5rem;
    overflow: hidden;

    @media screen and (max-width: 1024px) and (min-width: 924px) {
        padding: 3rem 2rem;
    }

    @media screen and (max-width: 923px) and (min-width: 824px) {
        padding: 3rem 2rem 2rem 2rem;
    }

    @media screen and (max-width: 823px) and (min-width: 591px) {
        padding: 2rem 2rem;
    }

    @media screen and (max-width: 590px) and (min-width: 320px) {
        padding: 2rem 1rem;
    }
`;

export const TitleFirstContainer = styled.div`
    font-family: 'Onest', sans-serif;
    color: #fff;
    text-align: center;
    padding: 0 9rem;

    h1 {
        text-transform:uppercase;
        font-weight:900;
        font-size: 3.6rem;
    }

    @media screen and (max-width: 1280px) and (min-width: 1024px) {
        padding: 0 3rem;
    }

    @media screen and (max-width: 1023px) and (min-width: 824px) {
        padding: 0rem;
    }

    @media screen and (max-width: 823px) and (min-width: 768px) {
        padding: 0rem;

        h1 {
            font-size:3.2rem;
        }
    }

    @media screen and (max-width: 767px) and (min-width: 591px) {
        padding: 0rem;

        h1 {
            font-size:2.6rem;
        }
    }

    @media screen and (max-width: 590px) and (min-width: 396px) {
        padding: 0rem;

        h1 {
            font-size:2.4rem;
        }
    }

    @media screen and (max-width: 395px) and (min-width: 320px) {
        padding: 0rem;

        h1 {
            font-size:2.2rem;
        }
    }

`;

export const TextFirstContainer = styled.div`
    font-family: 'Onest', sans-serif;
    color: #fff;

    .first_content {
        display: flow-root;
    }

    .first_content img {
        width: 27rem;
        float: left;
        shape-outside: url(${logo2});
        shape-margin: 1rem;
    }

    .text_right {
        padding: 3.4rem 0rem 0rem 0rem;
    }

    .text_right p{
        font-size:1.3rem;
        line-height:1.8rem;
    }

    .text_right p:nth-child(2){
        margin-top:1rem;
    }

    .text_right p:nth-child(3){
        margin-top:1rem;
    }

    @media screen and (max-width: 1024px) and (min-width: 848px) {
        .text_right {
            padding: 1.3rem 0rem 0rem 0rem;
        }
    }

    @media screen and (max-width: 848px) and (min-width: 768px) {
        .text_right p {
            font-size: 1.2rem;
        }

        .text_right p:nth-child(3){
            display: none;
        }
    }

    @media screen and (max-width: 767px) and (min-width: 491px) {
        .text_right {
            padding: 1.3rem 0rem 0rem 0rem;
        }

        .text_right p {
            font-size: 1.2rem;
        }

        .first_content img {
            width: 25rem;
        }
    }

    @media screen and (max-width: 490px) and (min-width: 375px) {
        .first_content {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .text_right {
            padding: 0rem;
            text-align:center;
        }

        .text_right p {
            font-size: 1.1rem;
        }

        .first_content img {
            width: 22rem;
        }
    }

    @media screen and (max-width: 374px) and (min-width: 320px) {
        .first_content {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .text_right {
            padding: 0rem;
            text-align:center;
        }

        .text_right p {
            font-size: 1.1rem;
        }

        .first_content img {
            width: 18rem;
        }
    }
`

export const SecondHomeContainer = styled.div`
    background-color: #3d3325;
    padding: 3rem 0rem 3rem 0rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-family: 'Onest', sans-serif;
    overflow: hidden;

    h2 {
    color: #fff;
    padding: 2rem 0rem 0rem 0rem;
    text-transform:uppercase;
    font-weight:500;
    font-size:1.5rem;
    
    }

    @media screen and (max-width: 1024px) and (min-width: 961px) {
        padding: 1rem;

        h2 {
            padding: 2rem;
        }
    }

    @media screen and (max-width: 960px) and (min-width: 769px) {
        padding:0rem;

        h2 {
            padding:2rem 0rem;
            font-size:1.4rem;
        }
    }

    @media screen and (max-width: 768px) and (min-width: 375px) {
        h2 {
            font-size: 1rem;
        }
    }

    @media screen and (max-width: 374px) and (min-width: 320px) {
        h2 {
            font-size: 0.8rem;
        }
    }

`;

export const TitleSecondContainer = styled.div`
    width:80vw;
    text-align: center;
    border: double 1px transparent;
    border-radius: 1rem;
    background-image: linear-gradient(90deg, #4e402f , #3d3325 70% ), linear-gradient(-198deg , #fff, #3d3325  70%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    color: #fff;


h1 {
    text-transform:uppercase;
    font-weight:900;
    font-size:2.6rem;
    margin-top:1.5rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
}

.stars {
    display:flex;
    justify-content:center;
    padding:1rem 0rem;
}

.stars i {
    color:#fff;
    font-size: 2rem;
    padding: 0rem 0.3rem;
}

@media screen and (max-width: 768px) and (min-width: 591px) {
    width:90vw;
    
    h1 {
        font-size:2.3rem;
    }
}

@media screen and (max-width: 590px) and (min-width: 431px) {
    width:90vw;
    
    h1 {
        font-size:2.2rem;
    }

    .stars i {
        font-size: 1.4rem;
    }
}

@media screen and (max-width: 430px) and (min-width: 375px) {
    width:90vw;
    
    h1 {
        font-size:2.1rem;
    }

    .stars i {
        font-size: 1.3rem;
    }
}

@media screen and (max-width: 374px) and (min-width: 320px) {
    width:90vw;
    
    h1 {
        font-size:1.9rem;
    }

    .stars i {
        font-size: 1.2rem;
    }
}

`

export const Project = styled.div`
    background-color: #3d3325;
    font-family: 'Onest', sans-serif;
    display:flex;
    flex-direction: column;
    align-items:center;
    color: #fff;
    text-align:center;

    i {
    font-size:2rem;
    padding: 1.6rem 0rem 0rem 0rem;
    }

    h3 {
    padding: 1rem 13rem 0rem 13rem;
    font-weight:400;
    font-size:1.2rem;
    line-height:1.8rem;
 }

    @media screen and (max-width: 1280px) and (min-width: 1024px) {
        h3 {
            padding: 1rem 9rem 0rem 9rem;
        }
    }

    @media screen and (max-width: 1023px) and (min-width: 768px) {
        h3 {
            padding: 1rem 6rem 0rem 6rem;
        }
    }

    @media screen and (max-width: 767px) and (min-width: 375px) {
        h3 {
            padding: 1rem 1rem 0rem 1rem;
            font-size:1rem;
        }
    }

    @media screen and (max-width: 374px) and (min-width: 320px) {
        h3 {
            padding: 1rem 1rem 0rem 1rem;
            font-size:0.9rem;
        }
    }

`

export const ThirdHomeContainer = styled.div`
    background: linear-gradient(180deg, #3d3325, rgba(255, 255, 255, 0) 99%);
    font-family: 'Onest', sans-serif;
    padding: 3rem 0rem 2rem 0rem;
    display: flex;
    flex-direction: column;
    color: #fff;
    overflow: hidden;

    h2 {
        padding: 2rem 0rem 0rem 0rem;
        text-transform:uppercase;
        font-weight:500;
        font-size:1.5rem;
        align-self: center;
}

    i {
        font-size:2rem;
        margin-top:1rem;
        text-align: center;
}

    h3 {
        text-align:center;
        padding: 1rem 13rem 0rem 13rem;
        font-weight:400;
        font-size:1.2rem;
        line-height: 1.8rem;
 }

 @media screen and (max-width: 1024px) and (min-width: 768px) {
        h3 {
            padding: 1rem 6rem 0rem 6rem;
        }
    }
 
 @media screen and (max-width: 767px) and (min-width: 390px) {
        h2 {
            font-size:1.1rem
        }

        h3 {
            padding: 1rem 1rem 0rem 1rem;
            font-size:1rem;
        }
 }

 @media screen and (max-width: 389px) and (min-width: 320px) {
        h2:nth-child(2) {
            font-size:0.9rem
        }

        h2:nth-child(4) {
            font-size:1.1rem
        }

        h3 {
            padding: 1rem 0.5rem 0rem 0.5rem;
            font-size:0.9rem;
        }
 }
 
`

export const TitleThirdContainer = styled.div`
    text-align: center;
    align-self: center;
    border: double 1px transparent;
    border-radius: 1rem;
    background-image: linear-gradient(-90deg, #4e402f , #3d3325 70% ), linear-gradient(198deg , #fff, #3d3325  70%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    width:63vw;

h1 {
    color:#fff;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 2.6rem;
    margin-top: 1.5rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
}

.icon_third {
    font-size: 2rem;
    color: #fff;
    padding: 1rem 0rem;
}

@media screen and (max-width: 1024px) and (min-width: 768px) {
        width:80vw;
        
    }

@media screen and (max-width: 767px) and (min-width: 591px) {
        width:90vw;
    
    h1 {
        font-size: 2.3rem;
}
    }

@media screen and (max-width: 590px) and (min-width: 320px) {
        width:90vw;
    
    h1 {
        font-size: 2.2rem;
}
    }    
`

export const BarberMan = styled.div`
    display:flex;
    justify-content:space-around;
    padding: 3rem 0rem 1rem 0rem;

    img {
        width:20rem;
    }

    .barber {
       border: double 1px transparent;
       border-radius: 2rem 2rem 10rem 10rem;
       background-image: linear-gradient(-349deg, #3d3325 20%, #111111 ), linear-gradient(-198deg , #fff, #3d3325  70%);
       background-origin: border-box;
       background-clip: content-box, border-box;
       border-left:none;
       width:20rem;
    }

    .barber h1 {
        font-family: 'Onest', sans-serif;
        color: #fff;
        text-transform:uppercase;
        font-weight:900;
        font-size: 1.7rem;
        position: relative;
        top:1.4rem;
        left: 0.8rem;
    }

    @media screen and (max-width: 1064px) and (min-width: 926px) {
        img {
            width:17rem;
        }

        .barber {
            width:17rem;
        }
}

@media screen and (max-width: 925px) and (min-width: 375px) {
            flex-direction:column;
            justify-content:center;
            align-items:center;
        
        .barber:nth-child(2) {
            margin-top: 2rem;
            margin-bottom: 2rem;
       }
      
}

@media screen and (max-width: 374px) and (min-width: 320px) {
            flex-direction:column;
            justify-content:center;
            align-items:center;
        
        img {
            width:16rem;
        }
        
        .barber {
            width:16rem;
        }

       .barber:nth-child(2) {
            margin-top: 2rem;
            margin-bottom: 2rem;
       }
}

`

export const CompVideo = styled.div`
        display:flex;
        justify-content: space-between;
        align-items:center;
        padding: 1rem 0rem 2rem 0rem;

        img {
            opacity: 0.5;
            max-width:32rem;
            max-height:22rem;
            position:relative;
            bottom:2rem;
        }

        img:nth-child(3) {
            transform: rotate(180deg); 
        }

        @media screen and (max-width: 450px) and (min-width: 390px) {
            img:nth-child(3) {
            
                display:none;
            }
        }

        @media screen and (max-width: 389px) and (min-width: 320px) {
            img {
                max-width:28rem;
                max-height:18rem;
            }

            img:nth-child(3) {
            
                display:none;
            }
        }
        
`

export const VideoContainer = styled.div` 
     width: 19rem;

     @media screen and (max-width: 450px) and (min-width: 320px) {
            margin-right:1rem;
     }
`


export const FourthHomeContainer = styled.div`
    background-image: linear-gradient(360deg, #3d3325 70%, #000000);
    padding: 1rem 0rem 3rem 0rem;
    display:flex;
    flex-direction:column;
    text-align:center;
    overflow: hidden;
`

export const FourthContainer = styled.div`
    font-family: 'Onest', sans-serif;
    color: #fff;
    display:flex;
    flex-direction: column;
    overflow: hidden;

    .title_fourth {
        align-self:center;
        width:90vw;  
        border-top: double 1px transparent;
        border-bottom:none;
        border-left:none;
        border-right:double 1px transparent;
        border-radius: 0rem 2rem 2rem 2rem;
        background-image: linear-gradient(10deg, #000000 , #000000 20%), linear-gradient(-158deg , #fff, #000000  60%);
        background-origin: border-box;
        background-clip: content-box, border-box;

    }
    
    h1 {
        text-transform:uppercase;
        font-weight:900;
        font-size:2.6rem;
        margin-top:1.5rem;
    }

    .icon_fourth {
        font-size: 2rem;
        padding: 1rem 0rem;
    }

    h2 {
        text-transform:uppercase;
        font-size:2rem;
        padding: 1rem 0rem;
    }
    
    .signature_content {
        display:flex;
        flex-direction: column;
        padding:3rem 6rem 0rem 6rem;
        overflow:hidden;
    }

    .item_signature { 
        display:flex;
        align-items:center;
    }

    .item_signature .stroke {
        width: 32rem;
        border-bottom: 1px solid;
        border-image:  linear-gradient(90deg , #fff 30%, #3d3325) 1;
	    border-left: 0;
	    border-right: 0;
	    border-top: 0;
    }

    .signature_content .item_signature .stroke:nth-child(1) {
        border-image:  linear-gradient(-90deg , #fff 30%, #3d3325) 1;
    }

    .item_signature .card {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        border: double 1px transparent;
        border-radius: 2rem;
        background-image: linear-gradient(-90deg, #4e402f , #3d3325 70% ), linear-gradient(198deg , #fff, #3d3325  70%);
        background-origin: border-box;
        background-clip: content-box, border-box;
        width:30rem;
    }

    .item_signature img {
        margin-top:1rem;
        max-width: 80px;
    }

    .item_signature i {
        position: relative;
        font-size: 2rem;
        top:0.3rem;
    }

    .item_signature h3 {
        padding: 1rem 0;
    }
    
    .item_signature p {
        padding: 0rem 1rem 1rem 1rem;
    }

    .signature_content .item_signature:nth-child(2)  {
       align-self:flex-end;
    }   

    .space_assets {
        display:flex;
        flex-direction: column;
    }

    .space_assets h3 {
        font-weight: 400;
    }

    .space_assets i {
        font-size: 2rem;
    }

    .title_space_assets {
        padding: 3rem 0rem 0rem 0rem;
    }

    .title_space_assets i {
        font-size: 2rem;
    }

    .img_assets {
        display:flex;
        justify-content:center;
        padding: 3rem 0rem 2rem 0rem;
    }

    .img_assets_one {
        display:flex;
    }

    .img_assets_two {
        display:flex;

    }

    .item_assets {
        margin-left: 1rem;
        margin-right:1rem;
    }

    .item_assets i {
        font-size: 3rem;
        position: absolute;
        z-index:1;
        background-color:#3d3325;
        transform: translate(105px);
        padding:0.6rem 0.8rem 0.6rem 0.8rem;
        border-radius: 0rem 0rem 1rem 1rem;
    }

    .item_assets img {
        z-index:0;
        max-width: 18rem;
        filter:  sepia(80%) grayscale(30%);
        border-radius:1rem;
    }

    @media screen and (max-width: 1280px) and (min-width: 1024px) {
        h2 {
            padding: 1rem 3rem;
    }

        .item_signature .stroke {
            width: 22rem;
    }

        .item_signature { 
            margin-bottom:1rem;
    }

        .img_assets {
            justify-content:center;
            align-items:center;
            flex-direction:column;
    }

        .img_assets_one {
            margin-bottom: 2rem;
    }
}

    @media screen and (max-width: 1023px) and (min-width: 864px) {
        .item_signature .stroke {
            width: 12rem;
    }

        .item_signature { 
            margin-bottom:2rem;
    }

        .img_assets {
            justify-content:center;
            align-items:center;
            flex-direction:column;
    }

        .img_assets_one {
            margin-bottom: 2rem;
    }

}

    @media screen and (max-width: 863px) and (min-width: 768px) {        
        .item_signature .stroke {
            width: 8rem;
    }

        .item_signature { 
            margin-bottom:2rem;
    }

        .space_assets {
            padding: 0rem 1rem 0rem 1rem;
    }

        .img_assets {
            justify-content:center;
            align-items:center;
            flex-direction:column;
    }

        .img_assets_one {
            margin-bottom: 2rem;
    }
    
}

    @media screen and (max-width: 767px) and (min-width: 591px) {
        h1 {
           font-size:2.3rem;
        }

        .signature_content {
           padding:3rem 2rem 0rem 2rem;
        }

        .item_signature .card {
            width:23rem;
        }

        .item_signature {
            font-size:0.9rem;
        }

        .item_signature p {
            line-height: 1.4rem;
        }

        .item_signature .stroke {
            width: 8rem;
        }

        .item_signature { 
            margin-bottom:2rem;
        }

        .space_assets {
            padding: 0rem 1rem 0rem 1rem;
        }

        .space_assets h2 {
            font-size:1.8rem;   
        }

        .space_assets h3 {
            font-size:1.1rem;   
        }

        .item_assets img {
            max-width: 15rem;
        }

        .item_assets i {
            transform: translate(95px);
        }

        .img_assets {
            justify-content:center;
            align-items:center;
            flex-direction:column;
        }

        .img_assets_one {
            margin-bottom: 2rem;
        }
    
}

@media screen and (max-width: 590px) and (min-width: 431px) {
        h1 {
           font-size:2.2rem;
        }

        .signature_content {
           padding:3rem 1rem 0rem 1rem;
        }

        .item_signature .card {
            width:19rem;
        }

        .item_signature {
            font-size:0.8rem;
        }

        .item_signature p {
            line-height: 1.4rem;
        }

        .item_signature .stroke {
            width: 3rem;
        }

        .item_signature { 
            margin-bottom:2rem;
        }

        .space_assets {
            padding: 0rem 1rem 0rem 1rem;
        }

        .space_assets h2 {
            font-size:1.6rem;   
        }

        .space_assets h3 {
            font-size:1rem;   
        }

        .item_assets img {
            max-width: 18rem;
        }

        .item_assets i {
            transform: translate(105px);
        }

        .img_assets {
            justify-content:center;
            align-items:center;
            flex-direction:column;
        }

        .img_assets_one {
            flex-direction:column;
            margin-bottom: 2rem;
        }

        .img_assets_two {
            flex-direction:column;
        }

        .item_assets:nth-child(1) {
            padding-bottom: 2rem;
        }

        .item_assets:nth-child(3) {
            padding-bottom: 2rem;
        }
    
}

@media screen and (max-width: 430px) and (min-width: 375px) {
        h1 {
           font-size:2.2rem;
        }

        .signature_content {
           padding:3rem 1rem 0rem 1rem;
        }

        .item_signature .card {
            width:18rem;
        }

        .item_signature {
            font-size:0.8rem;
        }

        .item_signature p {
            line-height: 1.3rem;
        }

        .item_signature .stroke {
            width:1rem;
        }

        .item_signature { 
            margin-bottom:2rem;
        }

        .space_assets {
            padding: 0rem 1rem 0rem 1rem;
        }

        .title_space_assets {
            padding: 1rem 0rem 0rem 0rem;
        }

        .space_assets h2 {
            font-size:1.6rem;   
        }

        .space_assets h3 {
            font-size:1rem;   
        }

        .item_assets img {
            max-width: 18rem;
        }

        .item_assets i {
            transform: translate(105px);
        }

        .img_assets {
            justify-content:center;
            align-items:center;
            flex-direction:column;
        }

        .img_assets_one {
            flex-direction:column;
            margin-bottom: 2rem;
        }

        .img_assets_two {
            flex-direction:column;
        }

        .item_assets:nth-child(1) {
            padding-bottom: 2rem;
        }

        .item_assets:nth-child(3) {
            padding-bottom: 2rem;
        }
    
}

@media screen and (max-width: 374px) and (min-width: 320px) {
        h1 {
           font-size:2.2rem;
        }

        .signature_content {
           padding:3rem 1rem 0rem 1rem;
        }

        .item_signature .card {
            width:15rem;
        }

        .item_signature {
            font-size:0.8rem;
        }

        .item_signature p {
            line-height: 1.1rem;
        }

        .item_signature .stroke {
            display:none;
        }

        .item_signature { 
            margin-bottom:2rem;
        }

        .item_signature i {
            display:none;
        }


        .space_assets {
            padding: 0rem 1rem 0rem 1rem;
        }

        .title_space_assets {
            padding: 1rem 0rem 0rem 0rem;
        }

        .space_assets h2 {
            font-size:1.6rem;   
        }

        .space_assets h3 {
            font-size:1rem;   
        }

        .item_assets img {
            max-width: 16rem;
        }

        .item_assets i {
            transform: translate(95px);
        }

        .img_assets {
            justify-content:center;
            align-items:center;
            flex-direction:column;
        }

        .img_assets_one {
            flex-direction:column;
            margin-bottom: 2rem;
        }

        .img_assets_two {
            flex-direction:column;
        }

        .item_assets:nth-child(1) {
            padding-bottom: 2rem;
        }

        .item_assets:nth-child(3) {
            padding-bottom: 2rem;
        }
    
}

`

export const Logomark = styled.div`
   position: absolute;
   align-self: center;
   overflow: hidden;
   width: 100%;

  img {
    object-position: cover;
    opacity: 0.1;
  }

`

export const ButtonSignature = styled.button`
        align-self:center;
        color: #fff;
        width: 12rem;
        height: 2.9rem;
        font-size: 1.3rem;
        font-family: 'Onest', sans-serif;
        margin-top:2rem;
        border: double 1px transparent;
        border-radius: 0.6rem;
        background-image: linear-gradient(-188deg, #3d3325 50%, #685e50 ), linear-gradient(-198deg , #fff, #3d3325  70%);
        background-origin: border-box;
        background-clip: content-box, border-box;
        cursor:pointer;
        text-decoration:none;
        display:flex;
        align-items:center;
        justify-content:center;
        z-index: 5;
` 