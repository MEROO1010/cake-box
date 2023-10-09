import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div>
        <img src={process.env.PUBLIC_URL + '/images/HomePage.png'} alt='Home Page' width='100' height='100' />
      </div>
    </div>
  );
};

export default HomePage;