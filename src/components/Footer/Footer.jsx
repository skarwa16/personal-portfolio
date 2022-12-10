import React from 'react'; 
import './footer.css';

const Footer = () => {
  
  let location
    switch(window.location.pathname){
      case"/about":
        location = "/"
        break
      case "/":
        location = "#workEx"
        break
  }
  
  return(
      <section className="footer footer-container">
        <div className="footer-section-container">
          <div className="footer-section">
            <a href={location}><h5 className="title">See all Work <span role="img" aria-label="hi">↗️</span></h5></a>
            <a href="/about"><h5 className="title">About <span role="img" aria-label="hi">↗️</span></h5></a>
            <h5 className="description"><span role="img" aria-label="hi">©️</span> Soumya Karwa. All Rights Reserved</h5>
          </div>
          <div className="footer-section">
            <div className="footer-sub-section">
              <div>
                <h5 className="title">Email</h5>
                <h5 className="description">soumya_karwa@brown.edu</h5>
              </div>
              <div>
                <h5 className="title">Connect</h5>
                <h5 className="description">Resume</h5>
                <h5 className="description">LinkedIn</h5>
              </div>
            </div>
          </div>
        </div>
        <p className="outro">Coded with <span role="img" aria-label="hi">💘</span> by Soumya Karwa</p>
      </section>
  )   
}

export default Footer; 