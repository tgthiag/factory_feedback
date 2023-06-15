import React from 'react';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';

function RadioButtonGroup({ onValueChange }) {
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onValueChange(value); // Invoke the callback
  };

  return (
    <div style={{ background: 'linear-gradient(to right, rgba(255, 0, 0, 0.3), rgba(0, 128, 0, 0.3))', paddingLeft: 22, borderRadius: 20 }}>
      <RadioGroup
        row
        value={selectedValue}
        onChange={handleChange}
        style={{ }}
      >
        {[...Array(10)].map((_, index) => (
          <FormControlLabel
            key={index + 1}
            value={index + 1}
            control={<Radio sx={{padding: 0, margin: -0.1}} size='small' />}
          />
        ))}
      </RadioGroup>
    </div>
  );
}

export default RadioButtonGroup;
