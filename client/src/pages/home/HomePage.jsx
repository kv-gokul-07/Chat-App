import {Box, Grid, Typography} from "@mui/material";
import HomeLeftContainer from "../../components/HomeLeftContainer";
import HomeCenterContainer from "../../components/HomeCenterContainer";
import { useState } from "react";
import assets from "../../assets/assets";

const HomePage = () => {

  const [selectedUser, setSelectedUser] = useState({userId: ""});

  const toggleUser = () => {
    setSelectedUser({userId: 1});
  }

  return (
    <Box className="home-container container">
      { selectedUser.userId ?
        <Grid container className="panels-container">
          <Grid size={3} className="left-panel panels">
            <HomeLeftContainer toggleUser={toggleUser} />
          </Grid>
          <Grid size={6} className="center-panel panels">
            <HomeCenterContainer />
          </Grid>
          <Grid size={3} className="right-panel panels">
        
          </Grid>
        </Grid>:
        <Grid container>
          <Grid size={6} className="center-panel">
            <HomeLeftContainer />
          </Grid>
          <Grid size={6}>
            <Box className="default-container">
                <Box className="chat-default-image">
                  <img src={assets.logo_icon} alt="Chat image" className="max-width" />
                  <Typography variant="h6" className="whiteColor">Chat anytime, anywhere</Typography>
                </Box>
            </Box>
          </Grid>
        </Grid>
            }
    </Box>
 
  )
}

export default HomePage
