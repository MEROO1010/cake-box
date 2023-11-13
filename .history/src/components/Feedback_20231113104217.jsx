import React from 'react'
import styled from 'styled-components';
import QUOTES from '../images/quotes.png'

const Feedback = () => {
  return (
    <Container>
      <ImageContainer>
         <img src={QUOTES} alt=''/>
      </ImageContainer>
    </Container>
  )
}

export default Feedback

const Container = styled.div `

`

const ImageContainer = styled.div `
 img{
    margin-right:1100px;
    position:relative;
    bottom:100px;
 }
`