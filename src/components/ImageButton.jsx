import { useNavigate } from 'react-router-dom';
import React from 'react';

const ImageButton = ({ src, alt }) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = React.useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    const boxShadow = isHovered ? '0 0 10px 8px rgba(0, 0, 0, 0.5)' : 'none';
    const transform = isHovered ? 'translateY(-10px)' : 'none';
  
    const handleClick = () => {
      // Navigate to another screen
      console.log("clicked")
      navigate('/home_page');
    };
  
    return (
      <img
        src={src}
        alt={alt}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
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

  export default ImageButton;