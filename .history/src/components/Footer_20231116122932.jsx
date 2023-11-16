import React from 'react'
import styled from 'styled-components'
import logo from '../images/cake box.png'

const Footer = () => {
  return (
    <Container>
       <FooterSection>
    <LOGO>
        <img src={logo} alt="logo design" />
      </LOGO>

      <Columns>
         <ul>
          <li><button>News</button></li>
          <li><button>About Us</button></li>
          <li><button>Blog</button></li>
         </ul>
      </Columns>

      <Footertext>
        <h1>© 2023Cake Box</h1>
      </Footertext> 
    </FooterSection>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  background-color: #FFEDDB;
  margin-top: 180px;
  height: 100%; /* Reduce the height value */
  position: relative;
  top: 20px;
`

const FooterSection = styled.div `
 
 
 
`

const LOGO = styled.div `
padding-bottom:400px;
bottom:200px;
   img{
    position: relative;
  top: 120px;
  right: 640px;
  padding-left:40px;
  width: 160px;
  height: 100px;
  
   }
`



  const Columns = styled.div`
    li {
      list-style-type: none;
      bottom: 400px;
      position: relative;
      margin-bottom: 20px;
      margin-right: 800px;
      border:none;
      background-color: transparent;
      color: blue;
      text-decoration: none;
      cursor: pointer;
    }
   
  
   
  `;

  const Footertext = styled.div`
   h1{
     position: absolute;
     left:10px;
     top:300px;
   }
  `