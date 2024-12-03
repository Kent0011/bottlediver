import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box'
import FadeAnimation from './FadeAnimation';

const About = () => {
    return (
        <div>
            <Box sx={{ width: { xs: '90%', sm: '80%' }, marginInline: 'auto' }}>
                <FadeAnimation>
                    <Box fontWeight="fontWeightLight" fontSize="32px" sx={{ padding: '30px 0 30px 0' }}>
                        Biography
                    </Box>
                </FadeAnimation>
                <FadeAnimation>
                    <Divider />
                </FadeAnimation>
            </Box>
            <FadeAnimation>
                <Box fontWeight="fontWeightLight" sx={{ paddingTop: '40px' }}>
                    <img src="logo.png" style={{ height: '48px' }} />
                </Box>
            </FadeAnimation>
            <FadeAnimation>
                <Box fontWeight="fontWeightLight" sx={{ fontSize: { xs: '12px', sm: '15px' }, paddingBottom: '20px' }}>
                    a Merodic Noise rock band from Kobe
                </Box>
            </FadeAnimation>
            <FadeAnimation>
            <Box fontWeight="fontWeightLight" sx={{ fontSize: { xs: '12px', sm: '15px' } }}>
                2023年 結成<br/>
                2023年8月 1st Single 『ordinary』リリース<br/>
                2024年5月 2nd Single 『未明』リリース<br/>
            </Box>
            </FadeAnimation>
            <FadeAnimation>
                <Box fontWeight="fontWeightLight" sx={{ fontSize: { xs: '15px', sm: '20px' }, padding: '20px 0 5px 0' }}>
                    Member
                </Box>
            </FadeAnimation>
            <Box fontWeight="fontWeightLight" sx={{ fontSize: { xs: '12px', sm: '15px' } }}>
                <FadeAnimation>
                    <Box sx={{ padding: '3px' }}>
                        Vo.Gt. 伊藤弓月
                    </Box>
                </FadeAnimation>
                <FadeAnimation>
                    <Box sx={{ padding: '3px' }}>
                        Gt. 山本健登
                    </Box>
                </FadeAnimation>
                <FadeAnimation>
                    <Box sx={{ padding: '3px' }}>
                        Ba. 橋本崇志
                    </Box>
                </FadeAnimation>
                <FadeAnimation>
                    <Box sx={{ padding: '3px' }}>
                        Dr. 久保仁
                    </Box>
                </FadeAnimation>
            </Box>
        </div>
    )
}

export default About