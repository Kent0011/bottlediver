import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FadeAnimation from './FadeAnimation';



const Discography = () => {

    return (
        <Box sx={{ width: { xs: '90%', sm: '80%' }, marginInline: 'auto' }}>
            <FadeAnimation>
                <Box fontWeight="fontWeightLight" fontSize="32px" sx={{ padding: '30px 0 30px 0' }}>
                    Discography
                </Box>
            </FadeAnimation>
            <FadeAnimation>
                <Divider />
            </FadeAnimation>
            <FadeAnimation>
                <Box sx={{ maxWidth: '600px', margin: { xs: '10% auto', sm: '5% auto' }, justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: '20%', textAlign: 'left', display: 'flex', alignItems: 'center' }}>
                        <img className='H' onClick={() => { window.open('https://lnkfi.re/6kEKKLlG') }} src="2nd.jpg" style={{ width: '100%', cursor: 'pointer' }} />
                    </Box>
                    <Box className='H1' onClick={() => { window.open('https://lnkfi.re/6kEKKLlG') }} sx={{ marginLeft: '12%', textAlign: 'left', Width: '80%' }}>
                        <Box fontWeight="fontWeightLight" sx={{ fontSize: { xs: '15px', sm: '20px' }, padding: { xs: '5px 20px 5px 0', sm: '5px 27px 5px 0' }, cursor: 'pointer' }}>
                            2nd Single 『未明』
                        </Box>
                        <Box fontWeight="fontWeightLight" sx={{ fontSize: { xs: '12px', sm: '15px' } }}>
                            - M1. 未明
                        </Box>
                        <Box fontWeight="fontWeightLight" sx={{ fontSize: { xs: '12px', sm: '15px' } }}>
                            - M2. STROBE
                        </Box>
                    </Box>
                </Box>
            </FadeAnimation>
            <FadeAnimation>
                <Divider variant="middle" />
            </FadeAnimation>
            <FadeAnimation>
                <Box sx={{ maxWidth: '600px', margin: { xs: '10% auto', sm: '5% auto' }, justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: '20%', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
                        <img className='H' onClick={() => { window.open('https://lnkfi.re/6kEKKLlG') }} src="1st.jpg" style={{ width: '100%', cursor: 'pointer' }} />
                    </Box>
                    <Box className='H1' onClick={() => { window.open('https://lnkfi.re/6kEKKLlG') }} sx={{ marginLeft: '12%', textAlign: 'left', Width: '80%' }}>
                        <Box fontWeight="fontWeightLight" sx={{ fontSize: { xs: '15px', sm: '20px' }, padding: '5px 0 5px 0', cursor: 'pointer' }}>
                            1st Single 『ordinary』
                        </Box>
                        <Box fontWeight="fontWeightLight" sx={{ fontSize: { xs: '12px', sm: '15px' } }}>
                            - M1. 一閃
                        </Box>
                        <Box fontWeight="fontWeightLight" sx={{ fontSize: { xs: '12px', sm: '15px' } }}>
                            - M2. 日々
                        </Box>
                    </Box>
                </Box>
            </FadeAnimation>
            <FadeAnimation>
                <Divider variant="middle" />
            </FadeAnimation>
        </Box>
    )
}

export default Discography