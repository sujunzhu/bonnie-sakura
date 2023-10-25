import React, {useState} from 'react';
import PropTypes from 'prop-types';
import '../css/Preview.css';

const images = [
  {
    index: 0,
    title: 'Dutch Art',
    src: 'https://wallpapersmug.com/download/1600x900/f5d72b/digital-art-horizon-mountains-forest-pinkish.jpg',
  },
  {
    index: 1,
    title: 'Sportify APP',
    src: 'https://images.wallpaperscraft.com/image/single/wolf_moon_night_150508_1600x900.jpg',
  },
  {
    index: 2,
    title: 'Vocab Learner',
    src: 'https://wallpapers.com/images/hd/big-blue-moon-denyvdscqfxtjypr.jpg',
  },
  {
    index: 3,
    title: 'Smart Search',
    src: 'https://wallpapersmug.com/download/1600x900/e9f357/high-skies-pixel-art-4k.jpg',
  },
  {
    index: 4,
    title: 'Internal tool',
    src: 'https://images.wallpaperscraft.com/image/single/landscape_art_road_127350_1600x900.jpg',
  },
  {
    index: 5,
    title: 'Kurie App',
    src: 'https://wallpapersmug.com/download/1600x900/f80e73/minimal-landscape-sunset-4k.jpg',
  },
];

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

  const navCards = images.map((image) => (
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

  return (
    <div className='preview-container'>
      <img
        className='preview-img'
        src={images[selected].src}
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
