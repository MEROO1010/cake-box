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

const IMAGE = styled.div`
 position: relative;
  top: 0px;
  right: 60px;
  width: 1440px;
  height: 820px;
  object-fit:cover;
  padding-left:80px;
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