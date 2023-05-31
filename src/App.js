import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Typewriter from 'typewriter-effect';


function App() {
  return (
    <div className="App">
      {/**Navbar */}
      <Navbar/>
      
      {/**Home */}
      <Home/>

      {/**Foote */}
      <Footer/>
    </div>
  );
}

export default App;
