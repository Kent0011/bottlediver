import React from 'react'
import Box from '@mui/material/Box'
import Divider from "@mui/material/Divider"

const Footer = () => {
    return (
        <Box className='Footer' sx={{marginTop: '100px'}}>
            <Divider variant="middle" />
            <Box fontWeight="fontWeightLight" fontSize="18px" sx={{ paddingTop: '10px' }}>
                bottle diver
            </Box>
            <Box fontSize="12px" sx={{ paddingBottom: '10px' }}>
                a Merodic Noise rock band from Kobe
            </Box>
            <Box fontSize="12px" sx={{ paddingBottom: '10px' }}>
                © 2024 bottle diver
            </Box>
        </Box>
    )
}

export default Footer