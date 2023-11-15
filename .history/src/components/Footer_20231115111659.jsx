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

const Container = styled.div`
 background-color:#FFEDDB;
 margin-top:100px;
 margin-bottom:100px;
 padding-top:100px;
 height:400px;
 position:static;
`


const FooterSection = styled.div `
 
 
 
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
  bottom:400px;
  position:relative;
  margin-bottom:20px;
  margin-right:800px;
  }`