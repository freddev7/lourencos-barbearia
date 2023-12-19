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
    width: 100%;
    max-width:100%;
    margin:0 auto;
    overflow:hidden;

`

const Slide = styled.div`    

`