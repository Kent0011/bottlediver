import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box'

const About = () => {
    return (
        <div>
            <Box sx={{ width: '80%', marginInline: 'auto' }}>
                <Box fontWeight="fontWeightLight" fontSize="32px" sx={{ padding: '30px 0 30px 0' }}>
                    About
                </Box>
                <Divider variant="middle" />
            </Box>
            <Box fontWeight="fontWeightLight" fontSize="32px" sx={{ paddingTop: '40px' }}>
            <img src="logo.png" style={{height: '48px'}} />
            </Box>
            <Box sx={{ paddingBottom: '20px' }}>
                a Merodic Noise rock band from Kobe
            </Box>
            <Box fontWeight="fontWeightLight" fontSize="h6.fontSize" sx={{ padding: '20px 0 5px 0' }}>
                Member
            </Box>
            <Box>
                <Box sx={{ padding: '5px' }}>
                    Vo.Gt. 伊藤弓月
                </Box>
                <Box sx={{ padding: '5px' }}>
                    Gt. 山本健登
                </Box>
                <Box sx={{ padding: '5px' }}>
                    Ba. 橋本崇志
                </Box>
                <Box sx={{ padding: '5px' }}>
                    Dr. 久保仁
                </Box>
            </Box>
        </div>
    )
}

export default About