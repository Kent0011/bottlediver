import React from 'react'
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";
import { FaSpotify, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";

export const Header = () => {

    const navigate = useNavigate();

    return (
        <div className='Header'>
            <img src="logo.PNG" style={{width: '40%', padding: '0 10px 0 10px'}}/>
            <li className='icons'>
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
        </div>
    )
}
