import React, {useEffect, useState, useCallback} from 'react';
import '../css/App.css';
import Intro from './Intro';
import Gallery from './Gallery';
import Preview from './Preview';
import Detail from './Detail';

const STATE = {
  INTRO: 'INTRO',
  GALLERY: 'GALLERY',
  PREVIEW: 'PREVIEW',
  DETAIL: 'DETAIL',
};

const FLOW = Object.values(STATE);
const prevState = (currentState) => {
  const curIdx = FLOW.indexOf(currentState[0]);
  if (curIdx === 0) {
    return [FLOW[curIdx]];
  }
  return [FLOW[curIdx - 1]];
};
const nextState = (currentState) => {
  const curIdx = FLOW.indexOf(currentState[0]);
  if (curIdx === FLOW.length - 1) {
    return [FLOW[curIdx]];
  }
  return [FLOW[curIdx + 1]];
};

/**
 * The React App.
 * @return {Node} an object
 */
function App() {
  const [state, setState] = useState([STATE.INTRO]);
  const isIntro = state[0] === STATE.INTRO;
  const isGallery = state[0] === STATE.GALLERY;
  const isPreview = state[0] === STATE.PREVIEW;
  const isDetail = state[0] === STATE.DETAIL;

  const handleKeyDown = useCallback((event) => {
    console.log(event);
    if (event.code === 'Enter' ||
      event.code === 'ArrowDown' ||
      event.code === 'PageDown' ||
      event.code === 'ArrowRight'
    ) {
      setState(nextState(state));
    } else if (event.code === 'ArrowUp' || event.code === 'PageUp' || event.code === 'ArrowLeft') {
      setState(prevState(state));
    }
  }, [state]);
  const handleWheel = useCallback((event) => {
    const next = event.deltaY > 0 ? nextState(state) : prevState(state);
    if (next[0] === state[0]) {
      return;
    }
    setState(next);
  }, [state]);

  let ts;
  const handleTouchStart = useCallback((event) => {
    console.log(event);
    ts = event.touches[0].clientY;
  });
  const handleTouchMove = useCallback((event) => {
    const te = event.changedTouches[0].clientY;
    if (ts > te) {
      setState(nextState(state));
    } else if (ts < te) {
      setState(prevState(state));
    }
  });

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [state]);

  return (
    <div
      className="portfolio-container"
      onWheel={handleWheel}
    >
      {
        isIntro &&
        <div className="intro-layover">
          <Intro />
        </div>
      }
      {
        isGallery &&
        <div className="gallery-page">
          <Gallery />
        </div>
      }
      {
        isPreview &&
        <div className="preview-page">
          <Preview />
        </div>
      }
      {
        isDetail &&
        <div className="detail-page">
          <Detail />
        </div>
      }
    </div>
  );
}

export default App;
