import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: 300,
                color: '#00CC22',
                '& .MuiSlider-thumb': {
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #00CC22',
                    width: 18,
                    height: 18,
                    '&:hover': {
                        boxShadow: '0 0 0 8px rgba(0, 204, 34, 0.16)',
                    },
                },
                '& .MuiSlider-track': {
                    backgroundColor: '#00CC22',
                    border: 'none',
                },
                '& .MuiSlider-rail': {
                    backgroundColor: '#B7B7B7',
                    opacity: 1,
                },
                '& .MuiSlider-valueLabel': {
                    backgroundColor: '#00CC22',
                    borderRadius: 3,
                },
            }}
            {...props}
        />
    )
}

export default SuperRange