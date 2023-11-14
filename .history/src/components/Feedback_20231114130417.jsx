import React from 'react'
import styled from 'styled-components';
import QUOTES from '../images/quotes.png'
import data from '../images/feedback.json';
import IMAGE1 from '../images/Image-1.png';
import IMAGE2 from '../images/Image-2.png';
import IMAGE3 from '../images/Image-3.png';
import IMAGE4 from '../images/Image-4.png';
import logo from '../images/cake box.png'


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
      
        <img src={IMAGE4} alt="" />
        <img src={IMAGE3} alt="" />
        <img src={IMAGE2} alt="" />
        <img src={IMAGE1} alt="" />
      
     
       </ImageMedia>
    </SocailMedia>

    <Footer>
    <LOGO>
        <img src={logo} alt="logo design" />
      </LOGO>
    </Footer>
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
display: flex;
  justify-content: center;

  img{
    margin: 40px;
  width: 300px;
  height: 300px;
  object-fit: cover;
  }
` 


const Footer = styled.div `
 background-color:#FFEDDB;
`

const LOGO = styled.div `
   img{
    position: absolute;
  bottom: 116px;
  right: 860px;
  padding-left:40px;
  width: 100px;
  height: 80px;
  
   }
`