import React from "react";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import FadeAnimation from "./FadeAnimation";
import VideosContent from "./VideosContent";
import { useVideos } from "../api/hooks";

const Videos = () => {
  const items = useVideos();

  return (
    <Box sx={{ width: { xs: "90%", md: "80%" }, marginInline: "auto" }}>
      <FadeAnimation>
        <Box
          fontWeight="fontWeightLight"
          fontSize="32px"
          sx={{ padding: "30px 0 30px 0" }}
        >
          MV / Live video
        </Box>
      </FadeAnimation>
      <FadeAnimation>
        <Divider />
      </FadeAnimation>
      <Box sx={{ maxWidth: "800px", margin: "0 auto" }}>
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <FadeAnimation>
              <VideosContent title={item.title} link={item.link} />
            </FadeAnimation>
            <FadeAnimation>
              <Divider variant="middle" />
            </FadeAnimation>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default Videos;
