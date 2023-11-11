import React from "react";
import styled from "styled-components";
import SliderComp from "./Slider";

const Projects = () => {
    return(
        <Container>
            <Slide>
                <SliderComp/>
            </Slide>
        </Container>
    )
}

export default Projects;

const Container = styled.div`
    width: 86%;
    max-width:1280px;
    margin:0 auto;

    @media screen and (max-width: 390px) and (min-width: 320px)  {
        width:80%;
    }
`

const Slide = styled.div`    

`