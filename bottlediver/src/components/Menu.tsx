import React from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate, BrowserRouter, Route, Routes } from "react-router-dom";
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SpeakerIcon from '@mui/icons-material/Speaker';
import FeedIcon from '@mui/icons-material/Feed';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Menu = () => {

    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        if (newValue == 0) {
            navigate('/about');
        };
        if (newValue == 1) {
            navigate('/discography');
        };
        if (newValue == 2) {
            navigate('/live');
        };
        if (newValue == 3) {
            navigate('/news');
        };
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box className="Menubar" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs className="Menubar" value={value} onChange={handleChange} aria-label="basic tabs example" sx={{marginInline: 'auto'}}>
                    <Tab icon={<QuestionMarkIcon />} label="about" {...a11yProps(0)} sx={{ width: '25%' }}/>
                    <Tab icon={<HeadphonesIcon />} label="discography" {...a11yProps(1)} sx={{ width: '25%' }}/>
                    <Tab icon={<SpeakerIcon />} label="live" {...a11yProps(2)} sx={{ width: '25%' }}/>
                    <Tab icon={<FeedIcon />} label="news" {...a11yProps(3)} sx={{ width: '25%' }}/>
                </Tabs>
            </Box>
        </Box>
    );
}

export default Menu