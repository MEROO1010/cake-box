import './App.css';
import HomePage from './components/HomePage';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Feedback from './components/Feedback';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <HomePage/>
      <Products/>
      <AboutUs/>
      <Feedback/>
      <Footer/>
      
    </div>
  );
}

export default App;
