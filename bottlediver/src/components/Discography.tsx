import React from "react";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import FadeAnimation from "./FadeAnimation";
import { useLocation } from "react-router-dom";
import DiscoContent from "./DiscoContent";
import { useDiscography } from "../api/hooks";

const Discography = () => {
  const location = useLocation();
  const qParams = new URLSearchParams(location.search);
  const record = qParams.get("record");
  const items = useDiscography();

  return (
    <Box sx={{ width: { xs: "90%", sm: "80%" }, marginInline: "auto" }}>
      <FadeAnimation>
        <Box
          fontWeight="fontWeightLight"
          fontSize="32px"
          sx={{ padding: "30px 0 30px 0" }}
        >
          Discography
        </Box>
      </FadeAnimation>

      <FadeAnimation>
        <Divider />
      </FadeAnimation>

      <FadeAnimation>
        <Divider variant="middle" />
      </FadeAnimation>

      {items.map((item) => (
        <React.Fragment key={item.id}>
          <FadeAnimation>
            <DiscoContent
              title={item.title}
              musics={item.musics}
              image={item.image}
              applemusic_link={item.applemusic_link}
              spotify_link={item.spotify_link}
              youtubemusic_link={item.youtubemusic_link}
              linemusic_link={item.linemusic_link}
              amazonmusic_link={item.amazonmusic_link}
              selected={record === item.id}
            />
          </FadeAnimation>

          <FadeAnimation>
            <Divider variant="middle" />
          </FadeAnimation>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default Discography;
