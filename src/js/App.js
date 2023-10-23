import React, {useEffect, useState} from 'react';
import '../css/App.css';
import Intro from './Intro';

/**
 * The React App.
 * @return {Node} an object
 */
function App() {
  const [showLayover, setShowLayover] = useState(true);

  const handleScroll = () => {
    const shouldHideLayover =
      document.body.scrollTop > 30 || document.documentElement.scrollTop > 30;
    if (shouldHideLayover && showLayover) {
      setShowLayover(false);
    } else if (!shouldHideLayover && !showLayover) {
      setShowLayover(true);
    }
  };

  useEffect(() =>{
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchmove', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('touchmove', handleScroll);
    };
  }, []);

  return (
    <div
      className="portfolio-container"
      onWheel={()=>handleScroll()}
    >
      {
        showLayover &&
        <div className="intro-layover">
          <Intro />
        </div>
      }
      <div className='timeline'>
        Surprise!!!!!!!!! Coming soon!
      </div>
    </div>
  );
}

export default App;
