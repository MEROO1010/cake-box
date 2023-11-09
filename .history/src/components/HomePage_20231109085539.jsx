import { useCallback } from "react";
import styled from "styled-components";

const HomePage = () => {
  const onProductsTextClick = useCallback(() => {
    // Please sync "products" to the project
  }, []);

  return (
 <HomePageRoot>
    <HomePageMain>
       <img src="../images/HomePage.png" alt=""/>
    </HomePageMain>
 </HomePageRoot>
  );
};

const HomePageRoot = styled.div `

`

const HomePageMain = styled.img`
position: absolute;
  top: 0px;
  left: 0px;
  width: 1440px;
  height: 820px;
  object-fit: cover;
`

export default HomePage;