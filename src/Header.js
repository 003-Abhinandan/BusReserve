import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
 import {AppBar,Button,Tab,Tabs,Toolbar,Typography} from '@mui/material';
 //import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
 //import Login from './components/login'

export const Header = () => {
   const [value,setValue]=useState();
   
  return (
     <React.Fragment>
        <AppBar sx={{background:"#063970"}}>
            <Toolbar>
                
              {/* <DirectionsBusFilledIcon/> */}
                 <Tabs textColor="inherit" value={value} 
                 onChange={(e,value)=>setValue(value)} 
                 indicatorColor="secondary">
                   <Tab label="BUS TICKETS"/>

                   <NavLink to="/Login" style={{textDecoration: "none", color: "white"}}>
                   <Tab label="Login"/>
                   </NavLink>

                   <NavLink to="/Signup" style={{textDecoration: "none", color: "white"}}>
                   <Tab label="SignUp"/>
                   </NavLink>
                 </Tabs>
                {/* <Button sx={{marginLeft:"auto"}} variant="contained">Login</Button>
                 <Button sx={{marginLeft:"10px"}} variant="contained">Signup</Button> */}
                 
            </Toolbar>
        </AppBar>
     </React.Fragment>
  );
}
export default Header;