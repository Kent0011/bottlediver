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
                    <Button href="https://docs.google.com/forms/d/e/1FAIpQLSfeHoMQok0EVnG7Q-TaPyHf6Q_UIypQ4EIS538oW-J7fCPUdw/viewform?usp=sf_link" sx={{ margin: '0 0 15px 0', fontSize: '18px' }}>TICKET</Button>
                    <Button onClick={handleOpen} sx={{ margin: '0 0 15px 0', fontSize: '18px' }}>GOODS</Button>
                </Box>
            </FadeAnimation>
            <FadeAnimation>
                <Divider />
            </FadeAnimation>
            <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
                <FadeAnimation>
                    <LiveContent
                        title='2024.12.20 (Fri) @寺田町Fireloop - AIRTONIC 1st mini album 記念すべき火種  release tour'
                        with='AIRTONIC / shoka / Hyuga'
                        modalTitle='AIRTONIC 1st mini album 記念すべき火種  release tour @寺田町Fireloop'
                        ticket='¥2400 (+1D)'
                        time="OPEN 18:30 / START 19:00"
                        link='https://x.com/bottle_diver/status/1859554173936636347' />
                </FadeAnimation>
                <FadeAnimation>
                    <Divider variant="middle" />
                </FadeAnimation>
                <FadeAnimation>
                    <LiveContent
                        title='2024.12.29 (Sun) @神戸KINGSX - 夜叉子presents『半神半鬼』'
                        with='夜叉子 / komusume / TOM-ATOM / TURBO LIGHTER / ナイトサファリ'
                        modalTitle='夜叉子presents『半神半鬼』 @神戸KINGSX'
                        ticket='ADV. ¥2,400- / DOOR. ¥2,900- / 学割. ¥1,900-（+1D)'
                        time="OPEN 16:30 / START 17:00"
                        link='https://x.com/yashago_845/status/1853029523039850963' />
                </FadeAnimation>
                <FadeAnimation>
                    <Divider variant="middle" />
                </FadeAnimation>
                <FadeAnimation>
                    <LiveContent
                        title='2025.1.17 (Fri) @寺田町Fireloop - Fireloop presents 「New order」'
                        with="リフの惑星 / LOVIN' THE BUNK / いろかにほへと"
                        modalTitle='Fireloop presents 「New order」 @寺田町Fireloop'
                        ticket='¥2,400 (+1D)'
                        time="OPEN 18:15 / START 18:45"
                        link='https://x.com/bottle_diver/status/1864998750843998455' />
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
                        <img src='goods.png' style={{width: '100%'}}/>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    )
}

export default Live