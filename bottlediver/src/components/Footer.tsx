import React from 'react'
import Box from '@mui/material/Box'
import Divider from "@mui/material/Divider"
import { FaReact } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

const Footer = () => {
    return (
        <Box className='Footer' sx={{ padding: '40px', color:"#ffffff99" }}>
            <Box fontSize="15px" sx={{ paddingBottom: '3px' }}>
                © 2024 bottle diver
            </Box>
            <Box fontSize="12px" sx={{ paddingBottom: '3px' }}>
                source : <a href='https://github.com/Kent0011/bottlediver' style={{color:"#ffffff99"}}> GitHub </a>
            </Box>
        </Box>
    )
}

export default Footer