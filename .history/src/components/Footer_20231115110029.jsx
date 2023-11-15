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
    </FooterSection>
    </Container>
  )
}

export default Footer

const Container = styled.div``


const FooterSection = styled.div `
 background-color:#FFEDDB;
 margin-top:100px;
 padding-bottom:400px;
 height:200px;
 position:static;
 
 
`

const LOGO = styled.div `
padding-bottom:400px;
bottom:200px;
   img{
    position: relative;
  bottom: 116px;
  right: 860px;
  padding-left:40px;
  width: 100px;
  height: 80px;
  
   }
`



  const Columns = styled.a `
  li{
    list-style-type: none;
    color: #fff;
  padding: 5px 20px;
  margin-top:60px;
  margin-right:800px;
  }`