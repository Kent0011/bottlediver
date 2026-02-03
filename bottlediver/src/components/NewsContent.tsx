import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import FadeAnimation from "./FadeAnimation";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import { ReactNode } from "react";

const modalstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", sm: "600px" },
  maxWidth: { xs: "80%", sm: "100%" },
  bgcolor: "white",
  color: "#14202c",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  justifyContent: "center",
  textAlign: "center",
  display: "block",
};

const NewsContent = (props: {
  title: string;
  modalTitle: string;
  children: ReactNode;
  imgpass: string;
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Box
        className="H1"
        onClick={handleOpen}
        sx={{
          maxWidth: "800px",
          margin: { xs: "3% auto", sm: "3% auto" },
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Box sx={{ margin: "0 7%", textAlign: "left" }}>
          <Box
            fontWeight="fontWeightLight"
            sx={{
              fontSize: { xs: "12px", sm: "16px" },
              padding: "5px 0 5px 0",
            }}
          >
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
            <img
              src={props.imgpass}
              style={{
                maxWidth: "80%",
                maxHeight: "150px",
                aspectRatio: "initial",
                justifyContent: "center",
                margin: "3% 0 0 0",
              }}
            />
            <Box sx={{ alignItems: "center", margin: "0 auto 5% auto" }}>
              <Typography
                fontWeight="fontWeightLight"
                id="transition-modal-title"
                sx={{ fontSize: "20px", margin: "5% 0 8% 0" }}
              >
                {props.modalTitle}
              </Typography>
              <Typography
                fontWeight="fontWeightLight"
                id="transition-modal-description"
                sx={{
                  fontSize: { xs: "12px", sm: "15px" },
                  mt: 2,
                  lineHeight: 2,
                  width: "100%",
                  marginInline: "auto",
                }}
              >
                {props.children}
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default NewsContent;
