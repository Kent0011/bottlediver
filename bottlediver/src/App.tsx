import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


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
                        <Route path="/about" element={<About />} />
                    </Routes>
                    <Footer />
                </div>

            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
