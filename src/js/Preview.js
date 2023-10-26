import React, {useState} from 'react';
import PropTypes from 'prop-types';
import '../css/Preview.css';
import {PROJECTS} from './ProjectUtils';

const propTypes = {
  goToDetail: PropTypes.func.isRequired,
};

/**
 * The Preview page.
 * @param {Object} props - props
 * @return {Node} the preview page
 */
const Preview = (props) => {
  const [selected, setSelected] = useState(0);

  const navCards = PROJECTS.map((image, index) => {
    const className = `nav-card${selected === index ? ' selected' : ''}`;
    return (
      <div
        className={className}
        key={image.title}
        data-disable-touch={true}
        onClick={() => setSelected(image.index)}
      >
        <img src={image.src} width={200} title={image.title} data-disable-touch={true} />
        <p className="title" data-disable-touch={true}>{image.title}</p>
      </div>
    );
  });

  return (
    <div className='preview-container'>
      <img
        className='preview-img'
        src={PROJECTS[selected].src}
        onClick={() => props.goToDetail()}
      />
      <div className='preview-nav' data-disable-touch={true}>
        <div className='nav-cards-container' data-disable-touch={true}>
          {navCards}
        </div>
      </div>
    </div>
  );
};

Preview.propTypes = propTypes;

export default Preview;
