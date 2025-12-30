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
import { SiYoutubemusic, SiAmazonmusic } from "react-icons/si";
import NewsContent from './NewsContent';
import Button from '@mui/material/Button';

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
                    2023年 結成<br />
                    2023年8月 1st Single 『ordinary』リリース<br />
                    2024年5月 2nd Single 『未明』リリース<br />
                    2026年2月 1st Album 『Scrawl』リリース<br />
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


                <Box sx={{ width: { xs: '90%', sm: '80%' }, marginInline: 'auto', marginTop: '60px' }}>
                    <FadeAnimation>
                        <Box fontWeight="fontWeightLight" fontSize="32px" sx={{ padding: '30px 0 30px 0' }}>
                            News
                        </Box>
                    </FadeAnimation>
                    <FadeAnimation>
                        <Divider />
                    </FadeAnimation>
                </Box>
                <Box sx={{ width: { xs: '90%', sm: '80%' }, maxWidth: '800px', margin: '0 auto' }}>
                    <FadeAnimation>
                        <NewsContent
                            title='2025.12.28 - 1st Album 『Scrawl』リリース決定'
                            modalTitle='2025.12.28 - 1st Album 『Scrawl』リリース決定'
                            imgpass='releasenote.jpg' >
                            今後のスケジュール<br />
                            2026.01.07.『再散再恣』YouTubeにて先行公開<br />
                            2026.01.21.『透明人間』サブスクリプション先行配信<br />
                            2026.02.11.『Scrawl』サブスクリプション配信開始, CD販売開始<br />
                        </NewsContent>
                    </FadeAnimation>
                    <FadeAnimation>
                        <Divider variant="middle" />
                    </FadeAnimation>
                </Box>
                <Box sx={{ width: { xs: '90%', sm: '80%' }, maxWidth: '800px', margin: '0 auto' }}>
                    <FadeAnimation>
                        <NewsContent
                            title='2025.01.17 - battle de egg 2025 2次審査 web投票スタート!'
                            modalTitle='2025.01.17 - battle de egg 2025 2次審査 web投票スタート!'
                            imgpass='main.jpg' >
                            battle de egg 2025 1次審査に通過しました! <br />
                            2次審査はファンによるweb投票となります! 下記リンクから投票をぜひお願いいたします! <br />
                            投票は終了しました
                        </NewsContent>
                    </FadeAnimation>
                    <FadeAnimation>
                        <Divider variant="middle" />
                    </FadeAnimation>
                </Box>
                <Box sx={{ width: { xs: '90%', sm: '80%' }, maxWidth: '800px', margin: '0 auto' }}>
                    <FadeAnimation>
                        <NewsContent
                            title='2024.12.30 - 夜叉子『半神半鬼』 Thank you for comming!'
                            modalTitle='2024.12.30 - 夜叉子『半神半鬼』 Thank you for comming!'
                            imgpass='news1.jpg' >
                            夜叉子 1st Anniversary & EP release party 『半神半鬼』 ご来場頂いた皆様、ありがとうございました！
                        </NewsContent>
                    </FadeAnimation>
                    <FadeAnimation>
                        <Divider variant="middle" />
                    </FadeAnimation>
                </Box>
                <Box sx={{ width: { xs: '90%', sm: '80%' }, maxWidth: '800px', margin: '0 auto' }}>
                    <FadeAnimation>
                        <NewsContent
                            title='2024.12.19 - bottle diver 公式サイト open!'
                            modalTitle='2024.12.19 - bottle diver 公式サイト open!'
                            imgpass='main.jpg' >
                            bottlediverの公式ウェブサイトがオープンしました! 今後のライブ情報やリリース情報などを随時更新していきますので、お楽しみに!
                        </NewsContent>
                    </FadeAnimation>
                    <FadeAnimation>
                        <Divider variant="middle" />
                    </FadeAnimation>
                </Box>


                <Box sx={{ width: { xs: '90%', sm: '80%' }, marginInline: 'auto', marginTop: '60px' }}>
                    <FadeAnimation>
                        <Box fontWeight="fontWeightLight" fontSize="32px" sx={{ padding: '30px 0 30px 0' }}>
                            Subscriptions
                        </Box>
                    </FadeAnimation>
                    <FadeAnimation>
                        <Divider />
                    </FadeAnimation>
                </Box>
                <FadeAnimation>
                    <Box fontWeight="fontWeightLight" sx={{ fontSize: { xs: '12px', sm: '15px' }, padding: '30px 0 5px 0', lineHeight: '2' }}>
                        各種配信サイトにて楽曲配信中!<br />
                        アーティストページはこちら
                    </Box>
                </FadeAnimation>
                <FadeAnimation>
                    <Box sx={{ width: { xs: '60%', sm: '40%' }, marginInline: 'auto' }}>
                        <li className='icons2' style={{ marginInline: 'auto' }}>
                            <IconButton className='H2' onClick={() => { window.open("https://music.apple.com/jp/artist/bottle-diver/1703550752") }} sx={{ aspectRatio: 1, width: { xs: '50px', sm: '15%' } }}>
                                <SiApplemusic style={{ aspectRatio: 1, width: '100%' }} />
                            </IconButton>
                            <IconButton className='H2' onClick={() => { window.open("https://open.spotify.com/intl-ja/artist/1dSyeRp13r1RiHcobah6pE") }} sx={{ aspectRatio: 1, width: { xs: '50px', sm: '15%' } }}>
                                <FaSpotify style={{ aspectRatio: 1, width: '100%' }} />
                            </IconButton>
                            <IconButton className='H2' onClick={() => { window.open("https://music.youtube.com/channel/UCcMl6Fpk77ByOXUXUJSe_gg") }} sx={{ aspectRatio: 1, width: { xs: '50px', sm: '15%' } }}>
                                <SiYoutubemusic style={{ aspectRatio: 1, width: '100%' }} />
                            </IconButton>
                            <IconButton className='H2' onClick={() => { window.open("https://music.line.me/webapp/artist/mi000000001efa2902") }} sx={{ aspectRatio: 1, width: { xs: '50px', sm: '15%' } }}>
                                <img src='LINE_MUSIC_secondary_logo_white.png' style={{ height: '22px', margin: '2px -2px 0 -2px' }} />
                            </IconButton>
                            <IconButton className='H2' onClick={() => { window.open("https://music.amazon.co.jp/artists/B0CG5DZ2BY/bottle-diver") }} sx={{ aspectRatio: 1, width: { xs: '50px', sm: '15%' } }}>
                                <SiAmazonmusic style={{ aspectRatio: 1, width: '100%', marginTop: '3px' }} />
                            </IconButton>
                        </li>
                    </Box>
                </FadeAnimation>


                <Box sx={{ width: { xs: '90%', sm: '80%' }, marginInline: 'auto', marginTop: '60px' }}>
                    <FadeAnimation>
                        <Box fontWeight="fontWeightLight" fontSize="32px" sx={{ padding: '30px 0 30px 0' }}>
                            SNS
                        </Box>
                    </FadeAnimation>
                    <FadeAnimation>
                        <Divider />
                    </FadeAnimation>
                </Box>
                <FadeAnimation>
                    <Box fontWeight="fontWeightLight" sx={{ fontSize: { xs: '12px', sm: '15px' }, padding: '30px 0 5px 0', lineHeight: '2' }}>
                        各種SNS随時更新中!
                    </Box>
                </FadeAnimation>
                <FadeAnimation>
                    <Box sx={{ width: { xs: '60%', sm: '40%' }, marginInline: 'auto' }}>
                        <li className='icons2' style={{ marginInline: 'auto' }}>
                            <IconButton className='H2' onClick={() => { window.open('https://www.youtube.com/@bottlediver-kobe') }} sx={{ color: 'white', aspectRatio: 1, width: { xs: '50px', sm: '15%' } }}>
                                <FaYoutube style={{ aspectRatio: 1, width: '100%' }} />
                            </IconButton>
                            <IconButton className='H2' onClick={() => { window.open('https://x.com/bottle_diver') }} sx={{ color: 'white', aspectRatio: 1, width: { xs: '50px', sm: '15%' } }}>
                                <FaXTwitter style={{ aspectRatio: 1, width: '100%' }} />
                            </IconButton>
                            <IconButton className='H2' onClick={() => { window.open('https://www.instagram.com/bottle_diver/') }} sx={{ color: 'white', aspectRatio: 1, width: { xs: '50px', sm: '15%' } }}>
                                <FaInstagram style={{ aspectRatio: 1, width: '100%' }} />
                            </IconButton>
                        </li>
                    </Box>
                </FadeAnimation>


                <Box sx={{ width: { xs: '90%', sm: '80%' }, marginInline: 'auto', marginTop: '60px' }}>
                    <FadeAnimation>
                        <Box fontWeight="fontWeightLight" fontSize="32px" sx={{ padding: '30px 0 30px 0' }}>
                            Contact
                        </Box>
                    </FadeAnimation>
                    <FadeAnimation>
                        <Divider />
                    </FadeAnimation>
                </Box>
                <FadeAnimation>
                    <Box fontWeight="fontWeightLight" sx={{ maxWidth: { xs: '80%', sm: '70%' }, marginInline: 'auto', fontSize: { xs: '12px', sm: '15px' }, padding: '30px 0 5px 0', lineHeight: '2' }}>
                        出演依頼等お問い合わせは下記メールアドレスまたはDMにて受け付けております
                    </Box>
                </FadeAnimation>
                <FadeAnimation>
                    <Box fontWeight="fontWeightLight" sx={{ fontSize: { xs: '12px', sm: '15px' }, padding: '0 0 5px 0', lineHeight: '2' }}>
                        e-mail : bottlediver.kobe@gmail.com
                    </Box>
                </FadeAnimation>
            </Box>
        </div>
    )
}

export default About