import React from 'react';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

const StyledTooltip = styled(Tooltip)({
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  color: 'white',
});

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <StyledTooltip enterTouchDelay={0} placement="top" title={value} open={open}>
      {children}
    </StyledTooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&::before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&::before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

export default function HoriSlider() {
  const [value, setValue] = React.useState(20);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value)
  };

  return (
    <Box sx={{ width: 320, height:300 }}>
      
      <PrettoSlider
        ValueLabelComponent={ValueLabelComponent}
        aria-label="pretto slider"
        value={value}
        onChange={handleChange}
        defaultValue={20}
  valueLabelDisplay="auto"
  orientation="vertical"

  sx={{
    '& input[type="range"]': {
      WebkitAppearance: 'slider-vertical', 
    },
    height:300
  }}
      />
    </Box>
  );
}
