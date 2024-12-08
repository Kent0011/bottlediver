import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box'
import FadeAnimation from './FadeAnimation';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import LiveContent from './LiveContent';
import VideosContent from './VideosContent';


const Videos = () => {


    return (
        <Box sx={{ width: { xs: '90%', md: '80%' }, marginInline: 'auto' }}>
            <FadeAnimation>
                <Box fontWeight="fontWeightLight" fontSize="32px" sx={{ padding: '30px 0 30px 0' }}>
                    MV / Live video
                </Box>
            </FadeAnimation>
            <FadeAnimation>
                <Divider />
            </FadeAnimation>
            <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
                <FadeAnimation>
                    <VideosContent title='[Live video] 未明 - bottle diver' src="https://www.youtube.com/embed/-hGQfkXrHXg" />
                </FadeAnimation>
                <FadeAnimation>
                    <Divider variant="middle" />
                </FadeAnimation>
                <FadeAnimation>
                    <VideosContent title='[MV] 一閃 - bottle diver' src="https://www.youtube.com/embed/6X4GLucTnKo" />
                </FadeAnimation>
                <FadeAnimation>
                    <Divider variant="middle" />
                </FadeAnimation>
                <FadeAnimation>
                    <VideosContent title='[MV] 日々 - bottle diver' src="https://www.youtube.com/embed/mvN_CmPTaTg" />
                </FadeAnimation>
                <FadeAnimation>
                    <Divider variant="middle" />
                </FadeAnimation>
                <FadeAnimation>
                    <VideosContent title='[Live video] 一閃 - bottle diver' src="https://www.youtube.com/embed/6QEm47ajExU" />
                </FadeAnimation>
                <FadeAnimation>
                    <Divider variant="middle" />
                </FadeAnimation>
            </Box>
        </Box>
    )
}

export default Videos