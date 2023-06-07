import React, { useState } from 'react';
import imgSrc1 from './../../assets/image1.png';
import imgSrc2 from './../../assets/image2.png';
import imgSrc3 from './../../assets/image3.png';
import ImageButtonLangage from '../items/ImageButton';
import TextButtonPlant from '../items/textButton';
import { useTranslation } from 'react-i18next';
import i18n from '../../services/translation';

function BodySelectConfig() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(1);
  const [selectedText, setSelectedText] = useState(null);
  const imageButtons = [
    { src: imgSrc1, alt: 'Image 1' },
    { src: imgSrc2, alt: 'Image 2' },
    { src: imgSrc3, alt: 'Image 3' },
  ];
  const textButtons = [
    { text: "Macedo" },
    { text: "Cumbica" },
  ];

  const handleClickImage = (index) => {
    console.log(`Image button clicked at index ${index}`);
    if (index === 0) {
      i18n.changeLanguage('pt');
    } else if (index === 1) {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('es');
    }
    setSelectedImage(index);
  };

  const handleClickText = (index) => {
    console.log(`bt button clicked at index ${index}`);
    setSelectedText(index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '50vh', alignItems: 'center' }}>
      <div>
        {imageButtons.map((imageButton, index) => (
          <ImageButtonLangage
            select={selectedImage === index ? true : false}
            key={index}
            src={imageButton.src}
            alt={imageButton.alt}
            onClick={() => handleClickImage(index)}
          />
        ))}
      </div>

      <p style={{ color: 'black' }}>{t('plant')}:</p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {textButtons.map((item, index) => (
          <TextButtonPlant
            select={selectedText === index ? true : false}
            key={index}
            text={item.text}
            onClick={() => handleClickText(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default BodySelectConfig;
