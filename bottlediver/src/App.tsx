import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Discography from './components/Discography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Live from './components/Live';


function App() {

    const theme = createTheme({

        palette: {
            mode: 'dark',
            primary: {
                main: '#29b6f6',
            },
            secondary: {
                main: '#0288d1',
            },
        },
    });

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <div className="App">
                    <Header/>
                    <img src="artist.png" className='headphoto' />
                    <Menu />
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/discography" element={<Discography />} />
                        <Route path="/live" element={<Live />} />
                    </Routes>
                    <Footer />
                </div>

            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
