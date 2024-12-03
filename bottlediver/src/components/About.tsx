import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box'
import FadeAnimation from './FadeAnimation';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";
import { FaSpotify, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";

const About = () => {
    return (
        <div>
            <Box sx={{ width: { xs: '90%', sm: '80%' }, marginInline: 'auto' }}>
                <FadeAnimation>
                    <Box fontWeight="fontWeightLight" fontSize="32px" sx={{ padding: '30px 0 30px 0' }}>
                        Biography
                    </Box>
                </FadeAnimation>
                <FadeAnimation>
                    <Divider />
                </FadeAnimation>
            </Box>
            <FadeAnimation>
                <Box fontWeight="fontWeightLight" sx={{ paddingTop: '40px' }}>
                    <img src="logo.png" style={{ height: '48px' }} />
                </Box>
            </FadeAnimation>
            <FadeAnimation>
                <Box fontWeight="fontWeightLight" sx={{ fontSize: { xs: '12px', sm: '15px' }, paddingBottom: '20px' }}>
                    a Merodic Noise rock band from Kobe
                </Box>
            </FadeAnimation>
            <FadeAnimation>
            <Box fontWeight="fontWeightLight" sx={{ fontSize: { xs: '12px', sm: '15px' } }}>
                2023年 結成<br/>
                2023年8月 1st Single 『ordinary』リリース<br/>
                2024年5月 2nd Single 『未明』リリース<br/>
            </Box>
            </FadeAnimation>
            <FadeAnimation>
                <Box fontWeight="fontWeightLight" sx={{ fontSize: { xs: '15px', sm: '20px' }, padding: '20px 0 5px 0' }}>
                    Member
                </Box>
            </FadeAnimation>
            <Box fontWeight="fontWeightLight" sx={{ fontSize: { xs: '12px', sm: '15px' } }}>
                <FadeAnimation>
                    <Box sx={{ padding: '3px' }}>
                        Vo.Gt. 伊藤弓月
                    </Box>
                </FadeAnimation>
                <FadeAnimation>
                    <Box sx={{ padding: '3px' }}>
                        Gt. 山本健登
                    </Box>
                </FadeAnimation>
                <FadeAnimation>
                    <Box sx={{ padding: '3px' }}>
                        Ba. 橋本崇志
                    </Box>
                </FadeAnimation>
                <FadeAnimation>
                    <Box sx={{ padding: '3px' }}>
                        Dr. 久保仁
                    </Box>
                </FadeAnimation>
                <li className='icons2'>
                <IconButton onClick={() => {window.open('https://www.youtube.com/@bottlediver-kobe')}} sx={{ color: 'white', aspectRatio: 1, width: {xs: '30px', sm: '15%'}}}>
                    <FaYoutube style={{ aspectRatio: 1, width: '100%' }} />
                </IconButton>
                <IconButton onClick={() => {window.open('https://x.com/bottle_diver')}} sx={{ color: 'white', aspectRatio: 1, width: {xs: '30px', sm: '15%'}}}>
                    <FaXTwitter style={{ aspectRatio: 1, width: '100%' }} />
                </IconButton>
                <IconButton onClick={() => {window.open('https://www.instagram.com/bottle_diver/')}} sx={{ color: 'white', aspectRatio: 1, width: {xs: '30px', sm: '15%'}}}>
                    <FaInstagram style={{ aspectRatio: 1, width: '100%' }} />
                </IconButton>
                <IconButton onClick={() => {window.open('https://music.apple.com/jp/artist/bottle-diver/1703550752')}} sx={{ color: 'white', aspectRatio: 1, width: {xs: '30px', sm: '15%'}}}>
                    <SiApplemusic style={{ aspectRatio: 1, width: '100%' }} />
                </IconButton>
                <IconButton onClick={() => {window.open('https://open.spotify.com/intl-ja/artist/1dSyeRp13r1RiHcobah6pE')}} sx={{ color: 'white', aspectRatio: 1, width: {xs: '30px', sm: '15%'}}}>
                    <FaSpotify style={{ aspectRatio: 1, width: '100%' }} />
                </IconButton>                
            </li>
            </Box>
        </div>
    )
}

export default About