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

       <ParagraphContainer>
       <p> Cake Box has been a beloved fixture in our<br/> city for over a decade,

        making it an <br/>integral part of our community's culinary<br/> landscape.

         Our journey has been one filled<br/> with passion and dedication, as we've

          <br/>lovingly prepared your favorite pastries<br/> while continually

           surprising you with <br/> exciting new creations.</p>
       </ParagraphContainer>  
      
     
      
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
    margin-top:40px;
  }
`

const ParagraphContainer = styled.div `

p{
    font-size : 28px;
    font-weight:600;
    margin-left:700px;
    margin-top:10px;
    position:absolute;

}
`