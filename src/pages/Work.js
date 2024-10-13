import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import piano from '../images/piano.jpg';
import vgslogo from '../images/vgs-thumb.png';
import resume from '../images/resume-thumb.png';
import diploma from '../images/diploma-thumb.png';
import '../styles/Work.css';

const Work = () => {
  // const [isExpanded, setIsExpanded] = useState(false);

  // const toggleDescription = () => {
  //   setIsExpanded(!isExpanded);
  // };

  const [selectedCategory, setSelectedCategory] = useState(null);

  const renderPortfolioContent = () => (
    <>
      <h2>Portfolio</h2>
                 <div className="portfolio-container">
                 <div className="thumbnail">
                 <a href="https://olsonwedding123.web.app/"><img src={piano} alt="Piano" className="thumbnail-img" />
                 <p class="description-title">Olson Wedding</p></a>
                 <p>Description:</p>
                <p>This is a digital portfolio website I developed independently, utilizing the React framework for a 
                  dynamic and interactive experience. Deployed through Firebase, the site showcases my proficiency in 
                  React, CSS, HTML, and JavaScript. It highlights my skills and knowledge in building modern web applications, 
                  reflecting my expertise in front-end development.</p> 
                 </div>
                 {/* <div onClick={toggleDescription} className="description-toggle">
            Description
            <span className={`caret ${isExpanded ? 'rotate' : ''}`}>▼</span>
          </div> */}
                 <div className="thumbnail">
                 <a href="vgs.arizona.edu"><img src={vgslogo} alt="VGS" className="thumbnail-img" />
                 <p class="description-title">VGS</p></a>
                 <p>Description: </p>
                 <p>This is the re-designed website for VGS (Vegetation GIS Data System), which was my first project as a 
                  UI/UX designer. My role is to design and implement changes, consistently keeping my team updated 
                  with progress and actively seeking their feedback and suggestions. This collaborative approach allowed me to 
                  refine the site effectively, enhancing its functionality and user experience. The project highlights my skills 
                  in UI/UX design and my commitment to teamwork and continuous improvement.</p>
                 </div>
                 </div>
    </>
  );

  const renderCrendentialsContent = () => (
    <>
      <h2>Credentials</h2>
          <div className="docs-container">
            <div className="docs-thumb">
            <a href="../docs/A.Olson_Resume.pdf" download>
              <img src={resume} alt="resume" className="thumbnail-img" /></a>
                 </div>
                 <div className="docs-thumb">
            <a href="../docs/A.Olson_eDiploma.pdf" download>
              <img src={diploma} alt="diploma" className="thumbnail-img" /></a>
                 </div>
                 </div>
    </>
  );

  const renderContent = () => {
    switch (selectedCategory) {
      case 'portfolio':
        return renderPortfolioContent();
      case 'resume':
        return renderCrendentialsContent();
      // case 'video':
      //   return renderVideoContent();
      default:
        return null; 
    }
  };
  
  return (
    <div>
       <div class="play-header">My Professional Side</div>
       <div className="play-header2">
      Check out my{' '}
        <span className={`portfolio ${selectedCategory === 'portfolio' ? 'selected' : ''}`} onClick={() => setSelectedCategory('portfolio')}>
          portfolio
        </span>
        ,{' '}
        and{' '}
        <span className={`resume ${selectedCategory === 'resume' ? 'selected' : ''}`} onClick={() => setSelectedCategory('resume')}>
          credentials
        </span>
        .
      </div>

      <p>Select a word above to explore more.</p>
      <div className="work-container">{renderContent()}</div>

            <div class="home-link">
                 <Link to="/">Go Home</Link>
                 </div>
    </div>
  );
};

export default Work;