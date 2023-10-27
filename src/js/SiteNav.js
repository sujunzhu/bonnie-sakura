import React, {useState} from 'react';
import PropTypes from 'prop-types';
import '../css/SiteNav.css';

const localizedText = {
  title: 'Xiafan Ye',
  projects: 'Projects',
  writing: 'Writing',
  about: 'About',
};

const link = 'https://www.xiaofanye.com';

const propTypes = {
  handleProjectsClick: PropTypes.func.isRequired,
};

/**
 * The Site Nav.
 * @param {Object} props
 * @return {Node} the site nav
 */
const SiteNav = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const normalDropdown = (
    <div className='normal-menu'>
      <div className='title'>
        <a href=".">
          {localizedText.title}
        </a>
      </div>
      <div className='projects'>
        <button onClick={() => props.handleProjectsClick()} >
          {localizedText.projects}
        </button>
      </div>
      <div className='writing'>
        <a href={link} >
          {localizedText.writing}
        </a>
      </div>
      <div className='about'>
        <a href={link} >
          {localizedText.about}
        </a>
      </div>
      <button className='more' onClick={()=>setShowDropdown(!showDropdown)} />
    </div>
  );
  const hamburgerDropdown = !showDropdown ?
    null : (
      <div className='hamburger-menu'>
        <div className='projects'>
          <button onClick={() => props.handleProjectsClick()} >
            {localizedText.projects}
          </button>
        </div>
        <div className='writing'>
          <a href={link} >
            {localizedText.writing}
          </a>
        </div>
        <div className='about'>
          <a href={link} >
            {localizedText.about}
          </a>
        </div>
      </div>
    );

  return (
    <div className='sitenav-container'>
      {normalDropdown}
      {hamburgerDropdown}
    </div>
  );
};

SiteNav.propTypes = propTypes;

export default SiteNav;
