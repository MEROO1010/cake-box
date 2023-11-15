import './App.css';
import HomePage from './components/HomePage';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Feedback from './components/Feedback';
import FooterSection from './components/Footer'



function App() {
  return (
    <div className="App">
      <HomePage/>
      <Products/>
      <AboutUs/>
      <Feedback/>
      <FooterSection/>
      
      
    </div>
  );
}

export default App;
