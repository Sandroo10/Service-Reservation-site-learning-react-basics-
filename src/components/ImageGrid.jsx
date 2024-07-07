import React from 'react';
import './ImageGrid.css';
import image1 from '../images/image1.avif';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpeg';
import image7 from '../images/image7.avif';
import { useTranslation } from 'react-i18next';

const images = [image1, image2, image3, image4, image5, image6, image7];

const ImageGrid = () => {
  const { t } = useTranslation();
  
  return (
    <div className="image-grid">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`img-${index}`} className="grid-image" />
      ))}
      <div className='text-area image-grid'>
        <p>{t('Choose the service of your desire and give yourself the entertainment you deserve')}</p>
      </div>
      <div className='text-area2 image-grid'>
        {t('Entertainment has this way of resetting itself ~ Zachary Levi')}
      </div>
    </div>
  );
};

export default ImageGrid;
