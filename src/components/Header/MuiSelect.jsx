import { Select } from '@mui/material'
import React from 'react'

const MuiSelect = () => {
    const options = [
        { value: 'city-1', label: 'Санкт-Петербург' },
        { value: 'city-2', label: 'Москва' },
        { value: 'city-3', label: 'Новгород' },
      ];
    
      const colourStyles = {
        control: (styles) => ({
          ...styles,
          backgroundColor: 'rgba(71, 147, 255, 0.2)',
          width: '194px',
          height: '37px',
          border: 'none',
          borderRadius: '10px',
          zIndex: 100,
        }),
        singleValue: (styles) => ({
          ...styles,
          color: '#000',
        }),
      };  
  return (
    <Select
          defaultValue={options[0]}
          styles={colourStyles}
          options={options}
        />
  )
}

export default MuiSelect
