import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'


const Discography = () => {
    return (
        <Box sx={{ width: '80%', marginInline: 'auto' }}>
            <Box fontWeight="fontWeightLight" fontSize="32px" sx={{ padding: '30px 0 30px 0' }}>
                Discography
            </Box>
            <Divider variant="middle" />
            <Box sx={{ maxWidth: '600px', margin: '10% auto 10% auto', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '20%', textAlign: 'left', display: 'flex', alignItems: 'center' }}>
                    <img src="2nd.jpg" style={{ width: '100%' }} />
                </Box>
                <Box sx={{ marginLeft: '12%', textAlign: 'left', Width: '80%' }}>
                    <Box fontWeight="fontWeightLight" sx={{ fontSize: { xs: '15px', sm: '20px' }, padding: '5px 0 5px 0' }}>
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
            <Divider variant="middle" />
            <Box sx={{ maxWidth: '600px', margin: '10% auto 10% auto', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '20%', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
                    <img src="1st.jpg" style={{ width: '100%' }} />
                </Box>
                <Box sx={{ marginLeft: '12%', textAlign: 'left', Width: '80%' }}>
                    <Box fontWeight="fontWeightLight" sx={{ fontSize: { xs: '15px', sm: '20px' }, padding: '5px 0 5px 0' }}>
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
        </Box>
    )
}

export default Discography