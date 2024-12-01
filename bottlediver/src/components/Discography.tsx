import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'


const Discography = () => {
    return (
        <Box sx={{width: '80%', marginInline: 'auto'}}>
            <Box fontWeight="fontWeightLight" fontSize="32px" sx={{ padding: '10px 0 10px 0' }}>
                Discography
            </Box>
            <Divider variant="middle" />
            <Box sx={{width: '70%', paddingTop: '10px', marginInline: 'auto', textAlign: 'left'}}>
                <Grid xs={12}>
                    未明
                </Grid>
            </Box>
        </Box>
    )
}

export default Discography