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
          <ListLink><button>News</button></ListLink>
          <ListLink><button>About Us</button></ListLink>
          <ListLink><button>Blog</button></ListLink>
         </ul>
      </Columns>

      <Footertext>
        <h4>© 2023Cake Box</h4>
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
      list-style: none;
  display: inline-block;
  margin-right: 80px;
  padding-left:6px;
  top:14px;
  left:100px;
  position: relative;
    }

   
  
   
  `;

  const ListLink = styled.a`
     text-decoration: none;
  color: #fff;
  padding: 5px 10px;
  

  &:hover {
    color: #FEF794;
  }
  `


  const Footertext = styled.div`
   h4{
     position: absolute;
     left:60px;
     top:280px;
     font-size:20px;
   }
  `