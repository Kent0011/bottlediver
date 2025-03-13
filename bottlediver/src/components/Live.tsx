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

const modalstyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs: '90%', sm: '70%'},
    height: 'fit-content',
    bgcolor: 'black',
    color: '#14202c',
    boxShadow: 24,
    p: 1,
    justifyContent: 'center',
    alignItems: 'center'
};


const Live = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <Box sx={{ width: { xs: '90%', md: '80%' }, marginInline: 'auto' }}>
            <FadeAnimation>
                <Box fontWeight="fontWeightLight" fontSize="32px" sx={{ padding: '30px 0 20px 0' }}>
                    Live
                </Box>
            </FadeAnimation>
            <FadeAnimation>
                <Box sx={{ display: 'flex', width: {xs: '90%', sm:'70%'}, justifyContent: 'space-around', margin: '0 auto' }}>
                    <Button href="https://docs.google.com/forms/d/e/1FAIpQLSfeHoMQok0EVnG7Q-TaPyHf6Q_UIypQ4EIS538oW-J7fCPUdw/viewform?usp=sf_link" sx={{ margin: '0 0 15px 0', fontSize: {xs: '15px', sm:'18px'} }}>TICKET</Button>
                    <Button onClick={handleOpen} sx={{ margin: '0 0 15px 0', fontSize: {xs: '15px', sm:'18px'} }}>GOODS</Button>
                </Box>
            </FadeAnimation>
            <FadeAnimation>
                <Divider />
            </FadeAnimation>
            <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
                <FadeAnimation>
                    <LiveContent 
                        title="2025.03.20 - 『メリケンミュージックナイツ』 @メリケンパーク"
                        modalTitle="2025.03.20 Thu. 『メリケンミュージックナイツ』 @メリケンパーク"
                        with="気づいたら劇場"
                        time="START 16:00"
                        ticket="Free"
                        link="https://x.com/bottle_diver/status/1900171306609643957"
                    />
                </FadeAnimation>
                <FadeAnimation>
                    <Divider variant="middle" />
                </FadeAnimation>
            </Box>
            <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
                <FadeAnimation>
                    <LiveContent 
                        title="2025.04.12 - 『夜明けの燈火』 @D×Q神戸"
                        modalTitle="2025.04.12 Sat. 『夜明けの燈火』 @D×Q神戸"
                        with="夜叉子 / アフターブルー / 幻想痛"
                        time="OPEN 18:00 / START 18:30"
                        ticket="一般 ¥2500+1D / 大学生 ¥2000 / 高校生以下 ¥1000"
                        link="https://x.com/bottle_diver/status/1900171306609643957"
                    />
                </FadeAnimation>
                <FadeAnimation>
                    <Divider variant="middle" />
                </FadeAnimation>
            </Box>
            <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
                <FadeAnimation>
                    <LiveContent 
                        title="2025.04.24 - 『New order』 @寺田町Fireloop"
                        modalTitle="2025.04.24 Thu. 『New order』 @寺田町Fireloop"
                        with="ハコワレ / ジャンナト / Lambiris"
                        time="OPEN 18:30 / START 19:00"
                        ticket="¥2200 +1D"
                        link="https://x.com/bottle_diver/status/1900168218939150763"
                    />
                </FadeAnimation>
                <FadeAnimation>
                    <Divider variant="middle" />
                </FadeAnimation>
            </Box>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box fontWeight="fontWeightLight" sx={modalstyle}>
                        <img src='goods2.png' style={{width: '100%'}}/>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    )
}

export default Live