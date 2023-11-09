import React from 'react'
import styled from 'styled-components';
import CAKEVECTOR from '../images/cake_vector.png'


const Products = () => {
  return (
    <Container>
      <CakeVector>
         <img src={CAKEVECTOR} alt=''/>
         <h1>Our Products</h1>
      </CakeVector>
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
  }

`