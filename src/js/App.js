import React, {useEffect, useState, useCallback} from 'react';
import '../css/App.css';
import Intro from './Intro';
import SiteNav from './SiteNav';
import Gallery from './Gallery';
import Preview from './Preview';
import Detail from './Detail';

const STATE = {
  INTRO: 'INTRO',
  GALLERY: 'GALLERY',
  PREVIEW: 'PREVIEW',
  DETAIL: 'DETAIL',
};

const FLOW = [STATE.INTRO, STATE.GALLERY, STATE.PREVIEW];
const prevState = (currentState) => {
  const curIdx = FLOW.indexOf(currentState[0]);

  // Per PM request, we don't wanna go back to previous page after hitting preview.
  if (curIdx <= 2) {
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

  const handleWheel = useCallback((event) => {
    if (event.target.dataset.disableTouch || FLOW.indexOf(state[0]) == -1) {
      return;
    }
    const next = event.deltaY > 0 ? nextState(state) : prevState(state);
    if (next[0] === state[0]) {
      return;
    }
    setState(next);
  }, [state]);

  let ts;
  const handleTouchStart = useCallback((event) => {
    if (event.target.dataset.disableTouch || FLOW.indexOf(state[0]) == -1) {
      return;
    }
    ts = event.touches[0].clientY;
  });
  const handleTouchEnd = useCallback((event) => {
    if (event.target.dataset.disableTouch || FLOW.indexOf(state[0]) == -1) {
      return;
    }
    const te = event.changedTouches[0].clientY;
    if (ts > te) {
      setState(nextState(state));
    } else if (ts < te) {
      setState(prevState(state));
    }
  });

  useEffect(() => {
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
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
        (isGallery || isPreview || isDetail) &&
        <div>
          <SiteNav handleProjectsClick={() => setState([STATE.PREVIEW])}/>
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
          <Preview goToDetail={() => setState([STATE.DETAIL])}/>
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
