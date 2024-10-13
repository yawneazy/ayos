import React from 'react';
import { Link } from 'react-router-dom';
import portrait from '../images/homepic.jpg';
import '../styles/About.css';

const About = () => {
  return (
    <div>
    <div class="about-container">
      <div class="about-text">
      <h1>About Me</h1>
                 <p>In 2018, I earned a BA in Music from Holy Names University in Oakland, CA, 
                  where I also competed as an NCAA collegiate golfer on a golf scholarship.

                  During this time, I began teaching music to children in San Francisco, a hat
                  I continued to wear while pursuing both my music degree and my growing interest in technology. 
             
                  This passion eventually led me back to school, where I earned a BS in Computer Science in 2023 
                  from the University of Arizona.
                  </p>
                  <p>
                  I am so grateful for the support of my family and then-boyfriend (now husband) for helping me
                  make my dreams become a reality. I feel I’ve found my dream career as a front end developer, 
                  and I’m excited about my future. To continue growing as a UX professional, my next goal is to 
                  pursue a master’s degree in User Experience at ASU.
</p>

     </div>
      {/* <div class="portrait-container"> */}
      <img src={portrait} alt="Profile pic" className="portrait-photo" />
      {/* </div> */}
    </div>
    <div class="home-link">
      <Link to="/">Go Home</Link>
      </div>
    </div>
  );
};

export default About;   
