import React from 'react';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';

function RadioButtonGroup({onValueChange}) {
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onValueChange(value); // Invoke the callback 
  };

  return (
    <div style={{ background: 'linear-gradient(to right, rgba(255, 0, 0, 0.3), rgba(0, 128, 0, 0.3))', paddingLeft: 22, borderRadius: 20}}>
      <RadioGroup
        row
        value={selectedValue}
        onChange={handleChange}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <FormControlLabel value={1} control={<Radio size='small' />} />
        <FormControlLabel value={2} control={<Radio size='small' />} />
        <FormControlLabel value={3} control={<Radio size='small' />} />
        <FormControlLabel value={4} control={<Radio size='small' />} />
        <FormControlLabel value={5} control={<Radio size='small' />} />
        <FormControlLabel value={6} control={<Radio size='small' />} />
        <FormControlLabel value={7} control={<Radio size='small' />} />
        <FormControlLabel value={8} control={<Radio size='small' />} />
        <FormControlLabel value={9} control={<Radio size='small' />} />
        <FormControlLabel value={10} control={<Radio size='small' />} />
      </RadioGroup>
    </div>
  );
}

export default RadioButtonGroup;
