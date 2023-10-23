import React from 'react';
import '../css/Intro.css';

const localizedText = {
  intro1: 'Hi, I am Xiaofan',
  intro2: ' a digital product designer passionate' +
    ' about creating delightful' +
    ' and impactful experiences',
  scroll: 'Scroll Down',
};

/**
 * The intro page.
 * @return {Node} the intro page
 */
const Intro = () => {
  return (
    <div className='intro-container'>
      <div className='intro-text-container'>
        <div className='intro'>
          {localizedText.intro1}
          <br/>
          {localizedText.intro2}
        </div>
      </div>
      <div className='scroll-down-prompt'>
        {localizedText.scroll}
      </div>
    </div>
  );
};

export default Intro;
