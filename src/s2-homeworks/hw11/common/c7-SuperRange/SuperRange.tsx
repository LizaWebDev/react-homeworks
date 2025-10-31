import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#00CC22',
                height: 5,
                width: 300,
                '& .MuiSlider-track': {
                    border: 'none',
                    backgroundColor: '#00CC22',
                },
                '& .MuiSlider-rail': {
                    opacity: 0.5,
                    backgroundColor: '#8B8B8B',
                },
                '& .MuiSlider-thumb': {
                    height: 20,
                    width: 20,
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #00CC22',
                    '&:hover, &.Mui-focusVisible': {
                        boxShadow: '0px 0px 0px 8px rgba(0, 204, 34, 0.16)',
                    },
                    '&.Mui-active': {
                        boxShadow: '0px 0px 0px 12px rgba(0, 204, 34, 0.16)',
                    },
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange