import logo from './logo.svg';
//import './App.css';
import './index.css';
import * as React from 'react';
import Button from "@mui/material/Button";
import Navbar from "./components/Navbar/Navbar"
import Intro from "./components/Intro/Intro"
import WorkEx from "./components/WorkExperience/WorkEx"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <WorkEx></WorkEx>
      <Footer></Footer>
    </div>
  );
}

export default App;
