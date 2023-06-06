import React from 'react';
import imgSrc1 from './../assets/image1.png';
import imgSrc2 from './../assets/image2.png';
import imgSrc3 from './../assets/image3.png';

const ImageButton = ({ src, alt }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const boxShadow = isHovered ? '0 0 10px 8px rgba(0, 0, 0, 0.5)' : 'none';
  const transform = isHovered ? 'translateY(-5px)' : 'none';

  return (
    <img
      src={src}
      alt={alt}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: '150px',
        height: '100px',
        borderRadius: "20px",
        boxShadow: boxShadow,
        transition: 'box-shadow 0.3s, transform 0.3s',
        transform: transform,
        margin: 20
      }}
    />
  );
};

function BodySelectLanguage(){
    return(
        <div style={{display: 'flex', justifyContent: 'center',height: '50vh', alignItems:"center"}}>
        <ImageButton src={imgSrc1} alt="Image 1" />
        <ImageButton src={imgSrc2} alt="Image 2" />
        <ImageButton src={imgSrc3} alt="Image 3" />
      </div>
    )
}
export default BodySelectLanguage;