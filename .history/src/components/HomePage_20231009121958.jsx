import React from 'react';
import homePageImage from '../images/HomePage.png';
import logo from '../images/cake box.png'

const HomePage = () => {
  return (
    <div>
      <div>
        <img src={homePageImage} alt='Home Page' style={{ width: '1518px', height:'740px' }} />
      </div>

      {/*add the logo*/}
      <div>
        <img src={logo} alt="logo design" style={{marginBottom:'40px'}}/>
      </div>
    </div>
  );
};

export default HomePage;