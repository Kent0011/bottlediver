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
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";
import { FaSpotify, FaYoutube, FaInstagram } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { SiYoutubemusic, SiAmazonmusic } from "react-icons/si";
import DiscoContent from './DiscoContent';



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
                <Divider variant="middle" />
            </FadeAnimation>


            <FadeAnimation>
                <Box sx={{ padding: { xs: '0 20px 0 0', sm: '0 27px 0 0' } }}>
                    <DiscoContent
                        title='2nd Single『未明』'
                        M={['未明', 'STROBE']}
                        Mnum={2}
                        jacketpass='2nd.jpg'
                        applelink='https://music.apple.com/jp/album/%E6%9C%AA%E6%98%8E-single/1744125311'
                        spotifylink='https://open.spotify.com/intl-ja/album/5Rgbl4XLZ78VgPeP4XVegq'
                        youtubelink='https://music.youtube.com/playlist?list=OLAK5uy_kl46KWk_dw3Y0Rm0va4dM6jBktgpSyhUE'
                        linelink='https://music.line.me/webapp/album/mb00000000039a83ac'
                        amazonlink='https://music.amazon.co.jp/albums/B0D32GWR1H'
                    />
                </Box>
            </FadeAnimation>


            <FadeAnimation>
                <Divider variant="middle" />
            </FadeAnimation>


            <FadeAnimation>
                <Box>
                    <DiscoContent
                        title='1st Single『ordinary』'
                        M={['一閃', '日々']}
                        Mnum={2}
                        jacketpass='1st.jpg'
                        applelink='https://music.apple.com/jp/album/ordinary-single/1703550750'
                        spotifylink='https://open.spotify.com/intl-ja/album/00eiyF0eya7LkCQwa4KlX4'
                        youtubelink='https://music.youtube.com/playlist?list=OLAK5uy_k-hqVLBwMV8UCdVUO3MrmyNiCeE3LHu1k'
                        linelink='https://music.line.me/webapp/album/mb0000000003040676'
                        amazonlink='https://music.amazon.co.jp/albums/B0CG5GKG9T'
                    />
                </Box>
            </FadeAnimation>


            <FadeAnimation>
                <Divider variant="middle" />
            </FadeAnimation>
        </Box>
    )
}

export default Discography