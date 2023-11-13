import React from 'react';
import styled from 'styled-components';
import QUOTES from '../images/quotes.png';
import data from '../images/feedback.json';

const feedbackData = [
  {
    imagePath: "../images/stars.png",
    description: "Fresh and delicious pastries. They bake in front of you. I will definitely come back here to try the whole range.",
    name: "Mona"
  },
  {
    imagePath: "../images/stars.png",
    description: "Fast delivery and friendly staff. All liked it. We'll come again.",
    name: "Khalid"
  },
  {
    imagePath: "../images/stars.png",
    description: "Very tasty cakes and prices are pleasant to the eye.",
    name: "Ali"
  }
];

const Feedback = () => {
  return (
    <Container>
      <ImageContainer>
        <img src={QUOTES} alt='' />
      </ImageContainer>

      <GridContainer>
        {feedbackData.map(item => (
          <Item key={item.name}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <Image src={item.imagePath} alt={item.name} />
          </Item>
        ))}
      </GridContainer>
    </Container>
  );
};

export default Feedback;

const Container = styled.div``;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  margin: 0 auto;
`;

const Item = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
`;

const Image = styled.img`
  width: 50px;
`;