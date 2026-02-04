import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import IconButton from '@mui/material/IconButton';
import { FaSpotify } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { SiYoutubemusic, SiAmazonmusic } from "react-icons/si";

const modalstyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: 'fit-content', sm: '600px' },
    maxWidth: { xs: '90%', sm: '100%' },
    bgcolor: 'white',
    color: '#14202c',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    justifyContent: 'center',
    textAlign: 'center',
    display: { xs: 'block', sm: 'flex' }
};


const DiscoContent = (props: { title: string, M: string[], Mnum: number, jacketpass: string, applelink: string, spotifylink: string, youtubelink: string, linelink: string, amazonlink: string, selected: boolean, album?: boolean }) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let album = false;
    if (props.album) {
        album = true;
    } else {
        album = false;
    }

    useEffect(() => {
        if (props.selected) {
            setOpen(true);
        }
    }, [props.selected]);

    const music = () => {
        const items = []
        for (let i = 0; i < props.Mnum; i++) {
            items.push (
                <Box fontWeight="fontWeightLight" sx={{ fontSize: { xs: '10px', sm: '12px' }, padding: { xs: '0 0 0 10px', sm: '0 0 0 10px' } }}>
                    M{i + 1}. {props.M[i]}
                </Box>
            )
        };
        return(
            <Box>{items}</Box>
        );
    };

    const modalmusic = () => {
        const items = []
        for (let i = 0; i < props.Mnum; i++) {
            items.push (
                <Box fontWeight="fontWeightLight" sx={{ fontSize: album ? '12px' : '15px', textAlign: 'left' }}>
                    M{i + 1}. {props.M[i]}
                </Box>
            )
        };
        if (album) {
            return(
                <Box sx={{ width: 'fit-content', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end', margin: '0 auto' }}>
                    <Box sx={{ margin: '0 0 0 6px' }}>
                        {items.slice(0, Math.ceil(props.Mnum / 2))}
                    </Box>
                    <Box sx={{ margin: '0 0 0 12px' }}>
                        {items.slice(Math.ceil(props.Mnum / 2))}
                    </Box>
                </Box>
            );
        } else {
            return(
                <Box sx={{ width: 'fit-content' }}>
                    {items}
                </Box>
            );
        }
    };

    return (
        <Box>
            <Box sx={{ maxWidth: '600px', margin: { xs: '10% auto', sm: '5% auto' }, paddingLeft: { xs: '13%', sm: '10%' }, display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '32%', textAlign: 'left', display: 'flex', alignItems: 'center' }}>
                    <img className='H' onClick={() => { handleOpen() }} src={props.jacketpass} alt="" style={{ width: '100%', cursor: 'pointer' }} />
                </Box>
                <Box className='H1' onClick={() => { handleOpen() }} sx={{ marginLeft: '12%', textAlign: 'left', Width: '80%' }}>
                    <Box fontWeight="fontWeightLight" sx={{ fontSize: { xs: '15px', sm: '20px' }, padding: { xs: '5px 0 5px 0', sm: '5px 0 5px 0' }, cursor: 'pointer' }}>
                        {props.title}
                    </Box>
                    {music()}
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
                        <img src={props.jacketpass} alt="" style={{ width: '200px', justifyContent: 'center', margin: 'auto 5%', aspectRatio: "1" }} />
                        <Box sx={{ alignItems: 'center', margin: '5% auto' }}>
                            <Typography fontWeight="fontWeightLight" id="transition-modal-title" sx={{ fontSize: '20px', margin: '8% 0 0 0' }}>
                                {props.title}
                            </Typography>
                            <Typography fontWeight="fontWeightLight" id="transition-modal-description" sx={{ mt: 2, lineHeight: 2, width: 'fit-content', margin: '10px auto 0 auto' }}>
                                {modalmusic()}
                            </Typography>
                            <li className='icons2'>
                                <IconButton className='H2' onClick={() => { window.open(props.applelink) }} sx={{ color: 'black', aspectRatio: 1, width: '50px' }}>
                                    <SiApplemusic style={{ aspectRatio: 1, width: '100%' }} />
                                </IconButton>
                                <IconButton className='H2' onClick={() => { window.open(props.spotifylink) }} sx={{ color: 'black', aspectRatio: 1, width: '50px' }}>
                                    <FaSpotify style={{ aspectRatio: 1, width: '100%' }} />
                                </IconButton>
                                <IconButton className='H2' onClick={() => { window.open(props.youtubelink) }} sx={{ color: 'black', aspectRatio: 1, width: '50px' }}>
                                    <SiYoutubemusic style={{ aspectRatio: 1, width: '100%' }} />
                                </IconButton>
                                <IconButton className='H2' onClick={() => { window.open(props.linelink) }} sx={{ color: 'black', aspectRatio: 1, width: '50px' }}>
                                    <img src='LINE_MUSIC_secondary_logo_black.png' alt="" style={{ height: '22px', margin: '2px -2px 0 -2px' }} />
                                </IconButton>
                                <IconButton className='H2' onClick={() => { window.open(props.amazonlink) }} sx={{ color: 'black', aspectRatio: 1, width: '50px' }}>
                                    <SiAmazonmusic style={{ aspectRatio: 1, width: '100%', marginTop: '3px' }} />
                                </IconButton>
                            </li>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    )
}

export default DiscoContent
