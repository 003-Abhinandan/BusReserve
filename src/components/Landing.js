import React from 'react'
import Header1 from '../Header1';
import Bimage from '../Public/Bus_Stand.jpg';
import Box from '@mui/material/Box';
import './Home.css';
import pic1 from "../Public/Bus_Stand.jpg";
import pic from "../Public/Homepic.jpg";

const styles = {
  paperContainer: {
    backgroundImage: `url(${pic})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
};



export default function Landing() {
  return (
    <div>
    <Header1></Header1>
     
    <Box style={styles.paperContainer} sx={{ minHeight: "100vh" }}>

    </Box>
    </div>
  );
}



