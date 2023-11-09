import React from 'react';
import homePageImage from '../images/HomePage.png';
import logo from '../images/cake box.png'
import styled from 'styled-components';

const HomePage = () => {
  return (
    <Container>
      <IMAGE>
        <img src={homePageImage} alt='Home Page' />
      </IMAGE>

      {/*add the logo*/}
      <LOGO>
        <img src={logo} alt="logo design" />
      </LOGO>

      {/*Add the header*/}
      <ListWrapper>
      <ul>
        <ListItem>
          <ListLink href="#">Home</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href="#">Products</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href="#">Order</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href="#">About Us</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href="#">Contact Us</ListLink>
        </ListItem>
      </ul>
    </ListWrapper>


      {/*Add the h1*/}
      <div>
        <h1>Cakes Crafted with Love</h1>      
      </div>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
`

const IMAGE = styled.div`
 position: relative;
  top: 0px;
  right: 60px;
  width: 1440px;
  height: 820px;
  object-fit:cover;
  padding-left:60px;
` 

const LOGO = styled.div `
   position: absolute;
  top: 16px;
  right: 924px;
  padding-left:40px;
  width: 1015px;
  height: 519px;
  object-fit: cover;
`

const ListWrapper = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const ListItem = styled.li`
  list-style: none;
  display: inline-block;
  margin-right: 80px;
  padding-left:40px;
`;

const ListLink = styled.a`
  text-decoration: none;
  color: #333;
  padding: 5px 10px;
  border: 1px solid #333;
  border-radius: 4px;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;