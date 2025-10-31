import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: '300px',
                color: '#00CC22',
                '& .MuiSlider-thumb': {
                    backgroundColor: '#fff',
                    border: '1px solid #00CC22',
                    width: 18,
                    height: 18,
                },
                '& .MuiSlider-track': {
                    color: '#00CC22',
                },
                '& .MuiSlider-rail': {
                    color: '#B7B7B7',
                },
            }}
            {...props}
        />
    )
}

export default SuperRange