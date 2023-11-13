import React from 'react'
import styled from 'styled-components';
import QUOTES from '../images/quotes.png'
import data from '../images/feedback.json';
import Image from 'react/Image'


const Feedback = () => {
    
  return (
    <Container>
      <ImageContainer>
         <img src={QUOTES} alt=''/>
      </ImageContainer>

      <GridContainer>
      {data.map(item => (
        <Item key={item.imagePath}>
          <h2>{item.imagePath}</h2>
          <p>{item.description}</p>
          <Image src={item.imagePath} alt={item.name} />
        </Item>
      ))}
    </GridContainer>
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
    bottom:240px;
 }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 200px;
  padding-right:200px;
  margin-bottom:20px;
  margin-left:20px;
  left:160px;
  position:absolute;
`;



const Item = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  position:relative;
  bottom:400px;
  margin-bottom:450px;
`;

