import React from 'react';

const TextButtonPlant = ({ text, onClick, select }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const boxShadow = isHovered || select ? '0 0 10px 8px rgba(0, 0, 0, 0.5)' : '0 0 10px 8px rgba(0, 0, 0, 0.2)';
  const transform = isHovered || select ? 'translateY(-6px)' : 'translateY(-1px)';

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h3
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{
          padding: 20,
          borderRadius: '20px',
          boxShadow: boxShadow,
          transition: 'box-shadow 0.3s, transform 0.3s',
          transform: transform,
          margin: 10,
          cursor: 'pointer',
          color: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center', // Aligns text vertically
        }}
      >
        {text}
      </h3>
    </div>
  );
};

export default TextButtonPlant;
