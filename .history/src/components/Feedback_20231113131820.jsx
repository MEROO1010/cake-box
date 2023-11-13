import React from 'react';
import styled from 'styled-components';
import QUOTES from '../images/quotes.png';
import data from '../images/feedback.json';

const Feedback = () => {
  return (
    <Container>
      <ImageContainer>
        <img src={QUOTES} alt="" />
      </ImageContainer>

      <GridContainer>
        {data.map(item => (
          <Item key={item.imagePath}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <ItemImage src={item.imagePath} alt={item.name} />
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

const ItemImage = styled.img`
  width: 50px;
`;