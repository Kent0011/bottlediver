import React from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate, BrowserRouter, Route, Routes } from "react-router-dom";
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SpeakerIcon from '@mui/icons-material/Speaker';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PersonIcon from '@mui/icons-material/Person';



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
            navigate('/');
        };
        if (newValue == 1) {
            navigate('/discography');
        };
        if (newValue == 2) {
            navigate('/live');
        };
        if (newValue == 3) {
            navigate('/videos');
        };
    };

    return (

        <Box sx={{ width: '100%', marginBottom: '10px' }}>
            <Box className="Menubar" sx={{ borderBottom: 1, borderColor: 'divider', display: { xs: 'none', sm: 'block' } }}>
                <Tabs className="Menubar" variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ marginInline: 'auto' }}>
                    <Tab icon={<PersonIcon />} label="Top" {...a11yProps(0)} sx={{ width: '25%', display: { xs: 'none', sm: 'flex' } }} />
                    <Tab icon={<HeadphonesIcon />} label="discography" {...a11yProps(1)} sx={{ width: '25%', display: { xs: 'none', sm: 'flex' } }} />
                    <Tab icon={<SpeakerIcon />} label="live" {...a11yProps(2)} sx={{ width: '25%', display: { xs: 'none', sm: 'flex' } }} />
                    <Tab icon={<MusicVideoIcon />} label="videos" {...a11yProps(3)} sx={{ width: '25%', display: { xs: 'none', sm: 'flex' } }} />
                </Tabs>
            </Box>
            <Box className="Menubar" sx={{ borderBottom: 1, borderColor: 'divider', display: { xs: 'block', sm: 'none' } }}>
                <Tabs className="Menubar" variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ marginInline: 'auto' }}>
                    <Tab icon={<PersonIcon />}  {...a11yProps(0)} sx={{ width: '25%', paddingBottom: '15px', display: { xs: 'flex', sm: 'none' } }} />
                    <Tab icon={<HeadphonesIcon />}  {...a11yProps(1)} sx={{ width: '25%', paddingBottom: '15px', display: { xs: 'flex', sm: 'none' } }} />
                    <Tab icon={<SpeakerIcon />}  {...a11yProps(2)} sx={{ width: '25%', paddingBottom: '15px', display: { xs: 'flex', sm: 'none' } }} />
                    <Tab icon={<MusicVideoIcon />}  {...a11yProps(3)} sx={{ width: '25%', paddingBottom: '15px', display: { xs: 'flex', sm: 'none' } }} />
                </Tabs>
            </Box>
        </Box>
    );
}

export default Menu