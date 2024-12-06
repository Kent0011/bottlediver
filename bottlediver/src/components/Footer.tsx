import React from 'react'
import Box from '@mui/material/Box'
import Divider from "@mui/material/Divider"
import { FaReact } from "react-icons/fa";
import { SiMui } from "react-icons/si";

const Footer = () => {
    return (
        <Box className='Footer' sx={{ padding: '40px', color:"#ffffff99" }}>
            <Box fontSize="15px" sx={{ paddingBottom: '3px' }}>
                © 2024 bottle diver
            </Box>
            <Box fontSize="12px" sx={{ paddingBottom: '3px' }}>
                Powered by  <FaReact style={{ margin: '0 -1px -1px 3px' }} /> React  <SiMui style={{ margin: '0 0 -1px 3px' }} /> MUI
            </Box>
        </Box>
    )
}

export default Footer