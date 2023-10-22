import React from 'react';
import '../css/App.css';

/**
 * The intro page.
 * @return {Node} the intro page
 */
const Intro = () => {
  const intro1 = 'Hi, I am Xiaofan';
  const intro2 =
      ' a digital product designer passionate' +
      ' about creating delightful' +
      ' and impactful experiences';
  return (
    <div className='intro'>
      {intro1}
      <br/>
      {intro2}
    </div>
  );
};

export default Intro;
