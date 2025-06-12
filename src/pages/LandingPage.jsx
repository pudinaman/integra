import React from 'react';
import './LandingPage.css';
import profile1 from '../assets/profile1.png';
import profile2 from '../assets/profile2.png';
import profile3 from '../assets/profile3.png';
import send from '../assets/send.png';
import toparrow from '../assets/toparrow.png';

const handleClick = (event) => {
  event.target.classList.add("clicked");
  setTimeout(() => {
    event.target.classList.remove("clicked");
  }, 100); /* Removes effect after 100ms */
};

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Wrapper to keep header and business boost side by side */}
      <div className="top-section">
        <header className="header">
          <h1>UNLIMITED</h1>
          <h1>PRETENTIOUS</h1>

          <div className="profile-section">
            <div className="profile-pictures">
              <img src={profile1} alt="Profile 1" />
              <img src={profile2} alt="Profile 2" />
              <img src={profile3} alt="Profile 3" />
            </div>
            <span className="ideas-text">IDEAS</span>
          </div>

          <div className="line-below-ideas">
            <hr className="white-line" />
            <div className="subheadings">
              <p className="solution">OUR SOLUTIONS</p>
              <div className="funnel-container">
                <p className="funnel-top">WE PROVIDE THE FULL</p>
                <p className="funnel-bottom">FUNNEL APPROACH</p>
              </div>
            </div>
          </div>
        </header>

        <section className="business-boost">
          <div className="boost-content">
            <div className="boost-title">
              <span>YOUR</span>
              <span>BUSINESS</span>
              <span>BOOST</span>
            </div>
            <button className="demo-call-button">
  Book Demo Call <img src={send} alt="arrow" className="button-arrow" />
</button>

          </div>
        </section>
      </div>

      <footer className="footer">
        {/* Left-side stacked buttons */}
        <div className="footer-left">
          <button className="left-item1" onClick={handleClick}>WEB ANALYTICS</button>
          <button className="left-item2" onClick={handleClick}>EMAIL MARKETING</button>
          <button className="left-item3" onClick={handleClick}>SEO 2.0</button>
        </div>

        {/* Right-side text-based items */}
        <div className="footer-right">
  <div className="card orange-card">
     
    <p className="card-title">UNIQUE</p>
    <p className="card-title2">BUSINESS SOLUTIONS</p>
    
  </div>

  <div className="card grey-card">
    <img className="top-arrow" src={toparrow} alt="" />
    <p className="card-title3">OUR CASE</p>
    <p className="card-title4">STUDIES</p>
  </div>

  <div className="card yellow-card">
    
    <p className="card-title4">SUCCESSFUL</p>
    <p className="card-title5">PROJECTS</p>
    <p className="card-count">700+</p>
  </div>
</div>
      </footer>
    </div>
  );
};

export default LandingPage;