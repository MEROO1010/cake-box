import React from 'react'
import styled from 'styled-components';
import QUOTES from '../images/quotes.png'
import data from '../images/feedback.json';


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

    <SocailMedia>
       <h1>Our Instagram - let's be friends!</h1>

       <ImageMedia>
       <Row>
        <img src="../images/image-1.png" alt="Image 1" />
        <img src="../images/image-2.png" alt="Image 2" />
        <img src="../images/image-3.png" alt="Image 3" />
        <img src="../images/image-4.png" alt="Image 4" />
      </Row>
     
       </ImageMedia>
    </SocailMedia>
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

const Image = styled.img`
  width: 50px;
`;


const SocailMedia = styled.div`
   h1{
    font-size:48px;
   }
`

const ImageMedia = styled.div`

` 

const Row = styled.div`
  display: flex;
  justify-content: center;

  img{
    margin: 5px;
  width: 200px;
  height: 200px;
  object-fit: cover;
  }
`;

