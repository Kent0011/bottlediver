import React from 'react'
import Box from '@mui/material/Box'

const About = () => {
    return (
        <div className='About content'>
            <Box fontWeight="fontWeightLight" fontSize="32px" sx={{ paddingTop: '10px' }}>
                bottle diver
            </Box>
            <Box sx={{ paddingBottom: '10px' }}>
                a Merodic Noise rock band from Kobe
            </Box>
            <Box fontWeight="fontWeightLight" fontSize="h6.fontSize" sx={{ padding: '10px' }}>
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