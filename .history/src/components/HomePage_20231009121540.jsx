import React from 'react';
import homePageImage from '../images/HomePage.png';

const HomePage = () => {
  return (
    <div>
      <div>
        <img src={homePageImage} alt='Home Page' style={{ width: '1440px', height:'800px' }} />
      </div>
    </div>
  );
};

export default HomePage;