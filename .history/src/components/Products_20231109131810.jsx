import React from 'react'
import styled from 'styled-components';
import CAKEVECTOR from '../images/cake_vector.png'
import CROISSANT from '../images/croissant.png'
import CAR from '../images/car.png'
import GLAVES from '../images/glaves.png'



const Products = () => {
  return (
    <Container>
      <CakeVector>
         <img src={CAKEVECTOR} alt=''/>
         <h1>Our Products</h1>
      </CakeVector>

      <FirstList>
        <ul>
            <li>
                <img src={CROISSANT} alt=''/>
                <h6>The freshest ingredients</h6>
            </li>

            <li>
                <img src={CAR} alt=''/>
                <h6>Fast delivery</h6>
            </li>

            <li>
                <img src={GLAVES} alt=''/>
                <h6>Handmade baked goods</h6>
            </li>
        </ul>
      </FirstList>

      <SecondList>
          <ul>
            <li><button>Cakes</button></li>
            <li><button>Cup Cakes</button></li>
            <li><button>Cookies</button></li>
            <li><button>Others</button></li>
          </ul>
      </SecondList>
    </Container>
  )
}

export default Products;


const Container = styled.div`
`

const CakeVector = styled.div`
  img{
    position: relative;
    top: 400px;
  }

  h1{
    position: relative;
    font-size:60px;
    top:68px;
  }

`

const FirstList = styled.div `
  li{
    position:relative;
    list-style: none;
  display: inline-block;
  margin-left:60px;
  padding-left:200px;
  right:160px;
  bottom:400px;
  }

  h6{
    font-size:22px;
  }
`

const SecondList =styled.div `
  li{
    position:relative;
    list-style: none;
  display: inline-block;
  margin-left:60px;
  padding-left:200px;
  right:160px;
  bottom:400px;
  }

  button{
    position: relative;
  top: 250px;
  left: 120px;
  font-size: 22px;
  letter-spacing: 0.08em;
  font-weight: 500;
  color: #F26E22;
  background-color: white;
  border-color:#F26E22;
  padding: 12px 28px;
  margin-right:20px ;
  width:250px;



  }
`