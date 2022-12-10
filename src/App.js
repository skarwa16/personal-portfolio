import './index.css';
import * as React from 'react';
import Homepage from "./components/Homepage/Homepage"
import About from "./components/About/About"
import Navbar from './components/Navbar/Navbar'
import Footer from "./components/Footer/Footer"
import BeauMonde from "./components/Projects/BeauMonde/BeauMonde"
import Barsaat from "./components/Projects/Barsaat/Barsaat"

function App() {
  
  let component 
  switch(window.location.pathname){
    case"/":
      component = <Homepage/>
      break
    case "/about":
      component = <About/>
      break
    case "/beaumonde":
      console.log("BeauMonde")
      component = <BeauMonde/>
      break
    case "/barsaat":
      console.log("Barsaat")
      component = <Barsaat/>
      break
  }

  return (
    <div className="App"> 
      <Navbar/>
      {component}
      <Footer/>
    </div>
  );
}

export default App;
