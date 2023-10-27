import React, {useEffect, useRef} from 'react';
import '../css/Gallery.css';
import {Application} from '@splinetool/runtime';

/**
 * The Gallery page.
 * @return {Node} the gallery page
 */
const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (!galleryRef || !galleryRef.current) {
      return;
    }

    const app = new Application(galleryRef.current);
    app.load('https://prod.spline.design/nvKISINGevWKdkig/scene.splinecode');
  });

  return (
    <canvas className='gallery-container' width={100} height={100} ref={galleryRef} />
  );
};

export default Gallery;
