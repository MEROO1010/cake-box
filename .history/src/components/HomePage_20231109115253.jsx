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
      <MainTitle>
      <div>
        <h1>Cakes Crafted with Love</h1>      
      </div>
      </MainTitle>

      {/*Add the Button*/}
      <ExploreNow>
        <button>Explore Now</button>
      </ExploreNow>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
`

const IMAGE = styled.div`
 max-width:100%;
 width: 100%;
 height: 100%;
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;
 background-color:#FEF794;
` 

const LOGO = styled.div `
   position: absolute;
  top: 16px;
  right: 860px;
  padding-left:40px;
  width: 1015px;
  height: 519px;
  object-fit: cover;
`

const ListWrapper = styled.div`
  font-family: Arial, sans-serif;
  font-weight: bold;
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
  padding-left:6px;
  top:14px;
  left:100px;
  position: relative;
`;

const ListLink = styled.a`
  text-decoration: none;
  color: #fff;
  padding: 5px 10px;
  

  &:hover {
    color: #FEF794;
  }
`;

const MainTitle = styled.div `
position: absolute;
  top: 240px;
  left: 533px;
  font-size: 25px;
  letter-spacing: 0.08em;
  font-weight: 800;
  color: #fff;
  display: inline-block;
  width: 347px;
  text-shadow: 9px 4px 4px rgba(0, 0, 0, 0.25);

`

const ExploreNow = styled.div`
  button{
    margin:100px 280px ;
    top:100px;
    color:black;
    width:340px;
    height:60px;
    border-radius:40px;
    background-color:#FFE280;
    border:none;
    font-size:24px;
    font-weight:bold;
    color:white;
    cursor: pointer;
  }
`;