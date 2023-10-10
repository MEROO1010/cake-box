import React from 'react';
import homePageImage from '../images/HomePage.png';
import logo from '../images/cake box.png'
import styled from 'styled-components';

const HomePage = () => {
  return (
    <div>
      <IMAGE>
        <img src={homePageImage} alt='Home Page' style={{ }} />
      </IMAGE>

      {/*add the logo*/}
      <div>
        <img src={logo} alt="logo design" style={{}}/>
      </div>

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
    </div>
  );
};

export default HomePage;



const IMAGE = styled.div `
 width: '1518px'; 
 height:'700px';

` 
