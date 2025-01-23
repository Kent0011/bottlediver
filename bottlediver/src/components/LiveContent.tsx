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

const modalstyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    minWidth: '50%',
    maxWidth: '80%',
    bgcolor: 'white',
    color: '#14202c',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    justifyContent: 'center'
};


const LiveContent = (props: { title: string, with: string, modalTitle: string, ticket: string, time: string, link: string }) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Box className='H1' onClick={handleOpen} sx={{ maxWidth: '800px', margin: { xs: '2% auto', sm: '2% auto' }, justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                <Box sx={{ margin: '0 7%', textAlign: 'left' }}>
                    <Box fontWeight="fontWeightLight" sx={{ fontSize: { xs: '12px', sm: '16px' }, padding: '5px 0 2px 0' }}>
                        {props.title}
                    </Box>
                    <Box fontWeight="fontWeightLight" sx={{ display: { xs: 'none', sm: 'block' }, fontSize: { sm: '15px' }, paddingLeft: '3%' }}>
                        - w.  {props.with}
                    </Box>
                </Box>
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
                        <Typography fontWeight="fontWeightLight" id="transition-modal-title" sx={{ fontSize: { xs: '12px', sm: '20px' } }}>
                            {props.modalTitle}
                        </Typography>
                        <Typography fontWeight="fontWeightLight" id="transition-modal-description" sx={{ mt: 2, fontSize: { xs: '11px', sm: '15px' }, lineHeight: 2, width: '100%' }}>
                            With - {props.with}<br />
                            Ticket - {props.ticket}<br />
                            Time table - {props.time}
                        </Typography>
                        <Button href={props.link} style={{ textAlign: 'center', margin: '10px 25% -18px 25%', width: '50%' }}> learn more </Button>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    )
}

export default LiveContent