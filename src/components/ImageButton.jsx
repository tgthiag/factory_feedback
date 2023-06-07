import React from 'react';

const ImageButton = ({ src, alt, onClick, select }) => {
    const [isHovered, setIsHovered] = React.useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    const boxShadow = isHovered || select === true ? '0 0 10px 8px rgba(0, 0, 0, 0.5)' : '0 0 10px 8px rgba(0, 0, 0, 0.2)';
    const transform = isHovered || select === true ? 'translateY(-6px)' : 'translateY(-1px)';
  
    const handleClick = () => {
      if (onClick) {
        onClick();
      }
    };
    // const handleClick = () => {
    //   // Navigate to another screen
    //   // console.log("clicked")
    //   // navigate('/home_page');
    // };
  
    return (
      <img
        src={src}
        alt={alt}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{
          width: '25%',
          height: 100,
          padding: 2,
          borderRadius: "20px",
          boxShadow: boxShadow,
          transition: 'box-shadow 0.3s, transform 0.3s',
          transform: transform ,
          margin: 14
        }}
      />
    );
  };

  export default ImageButton;