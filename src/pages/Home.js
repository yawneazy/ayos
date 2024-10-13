import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom'; 

const Home = () => {
    return (
      <div>
         <div class="home-header">Hi, I'm Alyssa</div> 
              <div class="home-header2"> 
              <span className="developer">
                    <Link to="/work">Developer</Link>
                </span>,
                <span className="designer">
                    <Link to="/work"> designer</Link>
                </span>, 
                <span className="musician">
                    <Link to="/play"> musician</Link></span> and 
              <span class="artist"> <Link to="/play"> artist</Link></span>
              .</div>
          
              <div class="home-content">I'm currently working as a Front End Developer in Tucson, AZ, focusing on UI/UX design. 
              I’m passionate about the work I do and the people I collaborate with, which is why I’m pursuing 
              an MS in User Experience at ASU.
</div> 
      </div>
    );
  };

export default Home;