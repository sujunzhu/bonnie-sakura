import React from 'react';
import '../css/SiteNav.css';

const localizedText = {
  title: 'Xiafan Ye',
  projects: 'Projects',
  writing: 'Writing',
  about: 'About',
};

const link = 'https://www.xiaofanye.com';

/**
 * The Site Nav.
 * @return {Node} the site nav
 */
const SiteNav = () => (
  <div className='sitenav-container'>
    <div className='title'>
      <a href="javascript:window.location.reload(true)">
        {localizedText.title}
      </a>
    </div>
    <div className='projects'>
      <a href={link} >
        {localizedText.projects}
      </a>
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

export default SiteNav;
