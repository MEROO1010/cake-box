import React from 'react'
import styled from 'styled-components';
import ABOUTUS from '../images/AboutUs.png'
const AboutUs = () => {
  return (
    <Container>


      <TitleContainer>
        <h1>About Us</h1>
      </TitleContainer>

      <ImageContainer>
        <img src={ABOUTUS} alt=''/>
      </ImageContainer>
    </Container>
  )
}

export default AboutUs


const Container = styled.div``

const TitleContainer = styled.div`
h1{
    margin-top:60px;
}

`

const ImageContainer = styled.div`
  img{
    margin-right:720px;
  }
`