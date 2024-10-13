import React, { useState } from 'react';
import '../styles/Play.css'
import { Link } from 'react-router-dom';
import cactuspainting from '../images/cactus-painting.png';
import flowerspainting from '../images/flowers-painting.jpeg';

const Play = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);

  const renderCategoryHeader = () => {
    switch (selectedCategory) {
      case 'art':
        return "Art Work";
      case 'music':
        return "Music Production";
      case 'video':
        return "Video Productions";
      default:
        return null;
    }
  };

  const renderArtContent = () => (
    <>
      <div className="art-container">
        <div className="thumbnail">
          <img src={cactuspainting} alt="Cactus Painting" className="thumbnail" />
          <p className="description-title">Description:</p>
          <p>
            2018: Pointillism desert artwork created on a smaller canvas. The painting was composed of intricate dots and inspired by another
            reference painting.
          </p>
        </div>
        <div className="thumbnail">
          <img src={flowerspainting} alt="Flowers Painting" className="thumbnail" />
          <p className="description-title">Description:</p>
          <p>
            2018: Textured artwork featuring flowers, created with texture paste, and inspired by a reference painting.
          </p>
        </div>
        <div class="summary-text">
          Summary: Working with various art mediums, both digital and traditional, has deepened my understanding of color theory, shadows, and
          textures. This artistic foundation has greatly influenced my approach to user experience (UX) design.
        </div>
      </div>
    </>
  );

  const renderMusicContent = () => (
    <>
      <div className="music-container">
   <div> 
   <iframe
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        frameBorder="0"
        height="175"
        style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '10px' }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/us/album/from-eden/1335387526?i=1335387531"
        title="Apple Music Album"
      ></iframe>
    </div>

    <div>
    <iframe
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        frameBorder="0"
        height="175"
        style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '10px' }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/no/album/sick-of-you/1335288936?i=1335288937"
        title="Apple Music Album - Sick of You"
      ></iframe>
    </div>
      </div>
    </>
  );

  const renderVideoContent = () => (
    <>
      <div className="video-container">
        <div className="video-item">
          <div className="video-thumbnail">
            <iframe
              src="https://youtube.com/embed/N0yOEFhM4oQ"
              title="VGS Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-description">
            <p className="description-title">Description:</p>
            <p>This video was created for the SNRC Film Festival 
              VGS - the organization I work for. It takes you behind the 
              scenes of what we do and how I fit in. Although it was for a film festival,
              I wanted to showcase VGS  and give a different perspective on how, even though we work with technoloy, still can help protect our environment.
        </p>
          </div>
        </div>
  
        <div className="video-item">
          <div className="video-thumbnail">
            <iframe
              src="https://www.youtube.com/embed/DRmJVM9iY3E?si=umepAZF31sO-XAGz"
              title="Coding Your Own Music"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-description">
            <p className="description-title">Description:</p>
            <p>
              When I first got interested in coding, I read articles about how music and coding really work quite well together.
              Both fields require problem-solving,
              attention to detail, and creative thinking within structured
              frameworks.
            </p>
          </div>
        </div>
      </div>
    </>
  );
  

  const renderContent = () => {
    switch (selectedCategory) {
      case 'art':
        return renderArtContent();
      case 'music':
        return renderMusicContent();
      case 'video':
        return renderVideoContent();
      default:
        return null; 
    }
  };
  
  return (
    <div>
      <div class="play-header">My Creative Side</div>
      <div className="play-header2">
      Check out my{' '}
        <span className={`artist ${selectedCategory === 'art' ? 'selected' : ''}`} onClick={() => setSelectedCategory('art')}>
          art
        </span>
        ,{' '}
        <span className={`musician ${selectedCategory === 'music' ? 'selected' : ''}`}
        onClick={() => setSelectedCategory('music')}>
          music
        </span>{' '}
        and{' '}
        <span className={`video-productions ${selectedCategory === 'video' ? 'selected' : ''}`} onClick={() => setSelectedCategory('video')}>
          video productions
        </span>
        .
      </div>
      <p>Select a word above to explore more.</p>
      <div className="category-header">{renderCategoryHeader()}</div>
      <div>{renderContent()}</div>
      <div class="home-link">
                 <Link to="/">Go Home</Link>
                 </div>
      </div>
  );
};

export default Play;
