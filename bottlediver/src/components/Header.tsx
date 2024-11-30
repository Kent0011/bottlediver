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
            <li className='icons'>
                <IconButton onClick={() => {window.open('https://www.youtube.com/@bottlediver-kobe')}} sx={{ color: 'white' }}>
                    <FaYoutube />
                </IconButton>
                <IconButton onClick={() => {window.open('https://x.com/bottle_diver')}} sx={{ color: 'white' }}>
                    <FaXTwitter />
                </IconButton>
                <IconButton onClick={() => {window.open('https://www.instagram.com/bottle_diver/')}} sx={{ color: 'white' }}>
                    <FaInstagram />
                </IconButton>
                <IconButton onClick={() => {window.open('https://music.apple.com/jp/artist/bottle-diver/1703550752')}} sx={{ color: 'white' }}>
                    <SiApplemusic />
                </IconButton>
                <IconButton onClick={() => {window.open('https://open.spotify.com/intl-ja/artist/1dSyeRp13r1RiHcobah6pE')}} sx={{ color: 'white' }}>
                    <FaSpotify />
                </IconButton>                
            </li>
        </div>
    )
}
