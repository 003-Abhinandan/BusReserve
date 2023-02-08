import React from 'react'
import Header from '../Header';
import Bimage from '../Public/Bus_Stand.jpg';
import Box from '@mui/material/Box';
import './Home.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import pic1 from "../Public/Bus_Stand.jpg";
import pic from "../Public/Bus.png";

const styles = {
  paperContainer: {
    backgroundImage: `url(${pic})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
};



export default function Home() {
  return (
    <div>
    <Header></Header>
     
    <Box style={styles.paperContainer} sx={{ minHeight: "100vh" }}>

    </Box>
    </div>
  );
}
