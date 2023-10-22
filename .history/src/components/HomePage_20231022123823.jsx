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
      <div>
        <li>
          <ul>Home</ul>
          <ul>Products</ul>
          <ul>Order</ul>
          <ul>About Us</ul>
          <ul>Contact US</ul>
        </li>
      </div>


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

const IMAGE = styled.div `
 background-size: cover;
  background-position: center;
  max-width: 100%;
  width: 1000px;
  height: 100vh;
  margin-right:40px ;
  margin-bottom:10px;
` 

const LOGO = styled.div `
  top: 0;
  left: 0;
  margin:16px 24px;
  position: absolute;
`
