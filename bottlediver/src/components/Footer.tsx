import React from 'react'
import Box from '@mui/material/Box'

const Footer = () => {
    return (
        <div className='Footer'>
            <Box fontWeight="fontWeightLight" fontSize="18px" sx={{ paddingTop: '10px' }}>
                bottle diver
            </Box>
            <Box fontSize="12px" sx={{ paddingBottom: '10px' }}>
                a Merodic Noise rock band from Kobe
            </Box>
            <Box fontSize="12px" sx={{ paddingBottom: '10px' }}>
                © 2024 bottle diver
            </Box>
        </div>
    )
}

export default Footer