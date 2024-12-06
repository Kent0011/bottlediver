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


const Live = () => {


    return (
        <Box sx={{ width: { xs: '90%', md: '80%' }, marginInline: 'auto' }}>
            <FadeAnimation>
                <Box fontWeight="fontWeightLight" fontSize="32px" sx={{ padding: '30px 0 30px 0' }}>
                    Live
                </Box>
            </FadeAnimation>
            <FadeAnimation>
                <Divider />
            </FadeAnimation>
            <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
                <FadeAnimation>
                    <LiveContent
                        title='2024.12.08 (Sun) @メリケンパーク - メリケンミュージックナイツ〜2024冬〜'
                        with='出演多数'
                        modalTitle='メリケンミュージックナイツ〜2024冬〜 @メリケンパーク'
                        ticket='Free'
                        time="START 11:00 / 16:00終了予定"
                        link='https://x.com/bottle_diver/status/1854796338141290659' />
                </FadeAnimation>
                <FadeAnimation>
                    <Divider variant="middle" />
                </FadeAnimation>
                <FadeAnimation>
                    <LiveContent
                        title='2024.12.20 (Fri) @寺田町Fireloop - AIRTONIC 1st mini album 記念すべき火種  release tour'
                        with='AIRTONIC / shoka / Hyuga'
                        modalTitle='AIRTONIC 1st mini album 記念すべき火種  release tour @寺田町fireloop'
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
        </Box>
    )
}

export default Live