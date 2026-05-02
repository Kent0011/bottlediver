import { ReactNode } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Discography from "./components/Discography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Live from "./components/Live";
import Divider from "@mui/material/Divider";
import Videos from "./components/Videos";
import { Analytics } from "@vercel/analytics/react";
import Admin from "./components/Admin";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#29b6f6",
    },
    secondary: {
      main: "#0288d1",
    },
  },
});

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="App">
      <Box>
        <Header />
      </Box>
      <Box
        id="carouselExampleAutoplaying"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        sx={{ width: "100%", aspectRatio: "16/9" }}
      >
        <Box className="carousel-inner">
          <Box className="carousel-item active">
            <img src="/main.jpg" className="d-block w-100" alt="" />
          </Box>
          <Box className="carousel-item">
            <img src="/2.jpg" className="d-block w-100" alt="" />
          </Box>
          <Box className="carousel-item">
            <img src="/3.jpg" className="d-block w-100" alt="" />
          </Box>
          <Box className="carousel-item">
            <img src="/4.jpg" className="d-block w-100" alt="" />
          </Box>
        </Box>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </Box>
      <Menu />
      {children}
      <Divider variant="middle" sx={{ marginTop: "100px" }} />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/bd-admin-secret" element={<Admin />} />
          <Route
            path="/"
            element={
              <PublicLayout>
                <About />
              </PublicLayout>
            }
          />
          <Route
            path="/discography"
            element={
              <PublicLayout>
                <Discography />
              </PublicLayout>
            }
          />
          <Route
            path="/live"
            element={
              <PublicLayout>
                <Live />
              </PublicLayout>
            }
          />
          <Route
            path="/videos"
            element={
              <PublicLayout>
                <Videos />
              </PublicLayout>
            }
          />
          <Route
            path="*"
            element={
              <PublicLayout>
                <About />
              </PublicLayout>
            }
          />
        </Routes>
        <Analytics />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
