import React from 'react';
import imgSrc1 from './../../assets/image1.png';
import imgSrc2 from './../../assets/image2.png';
import imgSrc3 from './../../assets/image3.png';
import ImageButton from '../items/ImageButton';

function BodySelectLanguage() {
  const imageButtons = [
    { src: imgSrc1, alt: 'Image 1' },
    { src: imgSrc2, alt: 'Image 2' },
    { src: imgSrc3, alt: 'Image 3' },
  ];

  const handleClick = (index) => {
    // Handle the click event for the image button at the specified index
    console.log(`Image button clicked at index ${index}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '50vh', alignItems: 'center' }}>
      {imageButtons.map((imageButton, index) => (
        <ImageButton
          key={index}
          src={imageButton.src}
          alt={imageButton.alt}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

export default BodySelectLanguage;
