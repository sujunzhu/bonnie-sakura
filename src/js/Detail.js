import React, {useState, useRef, useCallback} from 'react';
import useOutsideClick from './hooks/useOutsideClick';
import '../css/Detail.css';
import {PROJECTS} from './ProjectUtils';
import classnames from './utils/classnames';

/**
 * The Detail page.
 * @return {Node} the detail page
 */
const Detail = () => {
  const showNavButtonRef = useRef(null);
  const navRef = useRef(null);
  const [selected, setSelected] = useState(0);
  const [showNav, setShowNav] = useState(0);

  useOutsideClick(navRef, () => {
    if (showNav) {
      setShowNav(false);
    }
  });

  const showNavClick = useCallback(() => {
    setShowNav(true);
  });

  const navCards = PROJECTS.map((image) => (
    <div
      className='nav-card'
      key={image.title}
      data-disable-touch={true}
      onClick={() => setSelected(image.index)}
    >
      <img src={image.src} width={200} title={image.title} data-disable-touch={true} />
      <p className="title" data-disable-touch={true}>{image.title}</p>
    </div>
  ));

  const showNavButton = showNav ?
    null :
    (
      <div
        className='nav-toggle'
        onClick={showNavClick}
        data-disable-clickoutside={true}
        ref={showNavButtonRef}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/detail-nav-toggle.svg`}
          data-disable-clickoutside={true}
          width={40}
          height={40}
        />
      </div>
    );

  const navCardsComp = showNav ?
    (
      <div className='nav-cards-container' data-disable-touch={true}>
        {navCards}
      </div>
    ) :
    null;

  const detailNavClassName = classnames('detail-nav', {
    'show-nav': showNav,
  });

  return (
    <div className='detail-container'>
      {PROJECTS[selected].title}
      <div className={detailNavClassName} data-disable-touch={true} ref={navRef}>
        {showNavButton}
        {navCardsComp}
      </div>
    </div>
  );
};

export default Detail;
