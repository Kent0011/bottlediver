import React from 'react'
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box'
import FadeAnimation from './FadeAnimation';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
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
                        title="2026.1.9 - Golden Wind"
                        modalTitle="2026.1.9 - Golden Wind"
                        place="D×Q 神戸"
                        with="Dufferin / Norwegian Forest Cat"
                        time=""
                        ticket="一般2500円 / 大学生1400円 / 高校生以下400円"
                        link="https://x.com/dq_kobe2022/status/1993650948791771148?s=46"
                    />
                </FadeAnimation>
                <FadeAnimation>
                    <Divider variant="middle" />
                </FadeAnimation>
            </Box>
            <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
                <FadeAnimation>
                    <LiveContent 
                        title="2026.2.11 - ???"
                        modalTitle="2026.2.11"
                        place="D×Q 神戸"
                        with="???"
                        time="???"
                        ticket="???"
                        link="#"
                    />
                </FadeAnimation>
                <FadeAnimation>
                    <Divider variant="middle" />
                </FadeAnimation>
            </Box>
            <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
                <FadeAnimation>
                    <LiveContent 
                        title="2026.2.21 - ???"
                        modalTitle="2026.2.21"
                        place="KOBE Padoma"
                        with="???"
                        time="???"
                        ticket="???"
                        link="#"
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
                        <img src='goodslist.jpg' alt="" style={{width: '100%'}}/>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    )
}

export default Live
