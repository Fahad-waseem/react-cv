import React, { useEffect } from 'react'; 
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AOS from "aos";
import Contact from './components/Contact/Contact';
// import Header from "./components/Header/Header";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
    });
  }, []);
  return (
    <div>
      
    <Header/>
    <Home/>
    <About/>
    <Contact/>

    </div>
  );
}

export default App;
