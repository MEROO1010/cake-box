import React from 'react'
import styled from 'styled-components';
import QUOTES from '../images/quotes.png'
import data from '../images/data.json';

const Feedback = () => {
  return (
    <Container>
      <ImageContainer>
         <img src={QUOTES} alt=''/>
      </ImageContainer>

      <GridContainer>
      {data.map(item => (
        <Item key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <Image src={item.imagePath} alt={item.title} />
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
  gap: 20px;
`;



const Item = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
`;

const Image = styled.img`
  max-width: 100%;
`;
