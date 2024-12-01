import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box'


const Live = () => {
    return (
        <Box sx={{width: '80%', marginInline: 'auto'}}>
            <Box fontWeight="fontWeightLight" fontSize="32px" sx={{ padding: '30px 0 30px 0' }}>
                Live
            </Box>
            <Divider variant="middle" />
        </Box>
    )
}

export default Live