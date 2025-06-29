import { Box, Grid, Typography } from '@mui/material'
import assets from '../assets/assets'

const HomeLeftContainer = () => {
  return (
    <Box >
      <Grid container className="home-left-section">
        <Grid size={11}>
          <Box className="logo-title">
            <img src={assets.logo_icon} alt="Chat image" className="max-width" />
            <Typography variant="h6" className="whiteColor">G Chat</Typography>
            </Box>     
        </Grid>
        <Grid size={1} className="flex-ac-jc">
          <Box className="menu-icon">
            <img src={assets.menu_icon} alt="Chat image" className="max-width" />
            </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HomeLeftContainer
