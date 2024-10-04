import React from 'react';

export const Slider = ({ value, onValueChange, ...props }) => {
  return (
    <input
      type="range"
      value={value}
      onChange={(e) => onValueChange([Number(e.target.value)])}
      {...props}
    />
  );
};
