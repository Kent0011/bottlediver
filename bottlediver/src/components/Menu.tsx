import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useLocation, useNavigate } from "react-router-dom";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SpeakerIcon from "@mui/icons-material/Speaker";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";
import PersonIcon from "@mui/icons-material/Person";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const pathToValue: Record<string, number> = {
  "/": 0,
  "/discography": 1,
  "/live": 2,
  "/videos": 3,
};

const valueToPath = ["/", "/discography", "/live", "/videos"];

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const value = pathToValue[location.pathname] ?? 0;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    navigate(valueToPath[newValue]);
  };

  return (
    <Box sx={{ width: "100%", marginBottom: "10px" }}>
      <Box
        className="Menubar"
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Tabs
          className="Menubar"
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ marginInline: "auto" }}
        >
          <Tab
            icon={<PersonIcon />}
            label="Top"
            {...a11yProps(0)}
            sx={{ width: "25%", display: { xs: "none", sm: "flex" } }}
          />
          <Tab
            icon={<HeadphonesIcon />}
            label="discography"
            {...a11yProps(1)}
            sx={{ width: "25%", display: { xs: "none", sm: "flex" } }}
          />
          <Tab
            icon={<SpeakerIcon />}
            label="live"
            {...a11yProps(2)}
            sx={{ width: "25%", display: { xs: "none", sm: "flex" } }}
          />
          <Tab
            icon={<MusicVideoIcon />}
            label="videos"
            {...a11yProps(3)}
            sx={{ width: "25%", display: { xs: "none", sm: "flex" } }}
          />
        </Tabs>
      </Box>
      <Box
        className="Menubar"
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: { xs: "block", sm: "none" },
        }}
      >
        <Tabs
          className="Menubar"
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ marginInline: "auto" }}
        >
          <Tab
            icon={<PersonIcon />}
            {...a11yProps(0)}
            sx={{
              width: "25%",
              paddingBottom: "15px",
              display: { xs: "flex", sm: "none" },
            }}
          />
          <Tab
            icon={<HeadphonesIcon />}
            {...a11yProps(1)}
            sx={{
              width: "25%",
              paddingBottom: "15px",
              display: { xs: "flex", sm: "none" },
            }}
          />
          <Tab
            icon={<SpeakerIcon />}
            {...a11yProps(2)}
            sx={{
              width: "25%",
              paddingBottom: "15px",
              display: { xs: "flex", sm: "none" },
            }}
          />
          <Tab
            icon={<MusicVideoIcon />}
            {...a11yProps(3)}
            sx={{
              width: "25%",
              paddingBottom: "15px",
              display: { xs: "flex", sm: "none" },
            }}
          />
        </Tabs>
      </Box>
    </Box>
  );
};

export default Menu;
