import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { FaYoutube } from "react-icons/fa";
import Backdrop from "@mui/material/Backdrop";

const modalstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "70%" },
  height: "fit-content",
  bgcolor: "black",
  color: "#14202c",
  boxShadow: 24,
  p: 1,
  justifyContent: "center",
  alignItems: "center",
};

const VideosContent = (props: { title: string; src: string }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Box
        className="H1"
        onClick={handleOpen}
        sx={{
          maxWidth: "600px",
          margin: { xs: "5% auto", md: "5% auto" },
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Box sx={{ margin: "0 7%", textAlign: "left" }}>
          <Box
            fontWeight="fontWeightLight"
            sx={{
              fontSize: { xs: "15px", md: "20px" },
              padding: "5px 0 2px 0",
            }}
          >
            <FaYoutube style={{ margin: "0 20px -3px 20px" }} />
            {props.title}
          </Box>
        </Box>
      </Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box fontWeight="fontWeightLight" sx={modalstyle}>
            <iframe
              title="player"
              id="player"
              src={props.src}
              rel="1"
              frameBorder="0"
              allowFullScreen
            />
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default VideosContent;
