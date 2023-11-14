import './App.css';
import HomePage from './components/HomePage';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Feedback from './components/Feedback';
//import Instagram from './components/Instagram';


function App() {
  return (
    <div className="App">
      <HomePage/>
      <Products/>
      <AboutUs/>
      <Feedback/>
      
    </div>
  );
}

export default App;
