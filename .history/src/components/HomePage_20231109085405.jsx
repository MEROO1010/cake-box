import { useCallback } from "react";
import styled from "styled-components";

const HomePage = () => {
  const onProductsTextClick = useCallback(() => {
    // Please sync "products" to the project
  }, []);

  return (
 <HomePageRoot>
    <HomePageMain>
       <img src="../images/HomePage.png" alt="Home page image"/>
    </HomePageMain>
 </HomePageRoot>
  );
};

const HomePageRoot = styled.div `

`

const HomePageMain = styled.img``

export default HomePage;