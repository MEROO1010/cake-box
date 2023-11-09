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
    top:180px;
  }

`

const FirstList = styled.div `
  li{
    position:relative;
    list-style: none;
  display: inline-block;
  margin-left:60px;
  padding-left:300px;
  right:200px;
  bottom:140px;
  }
`