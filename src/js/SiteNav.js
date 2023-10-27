import React from 'react';
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
const SiteNav = (props) => (
  <div className='sitenav-container'>
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
    <a className='logo' href={link} />
  </div>
);

SiteNav.propTypes = propTypes;

export default SiteNav;
