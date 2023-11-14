import './App.css';
import HomePage from './components/HomePage';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Feedback from './components/Feedback';
import InstagramSection from './components/InstagramSection';


function App() {
  return (
    <div className="App">
      <HomePage/>
      <Products/>
      <AboutUs/>
      <Feedback/>
      <InstagramSection/>
    </div>
  );
}

export default App;
