import React,{useState} from 'react'
import { Link } from 'react-router-dom';
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
                   <Tab label="Home"/>

                   <NavLink to="/AdminLogin" style={{textDecoration: "none", color: "white"}}>
                   <Tab label="Admin"/>
                   </NavLink>
                    
                   <NavLink to="/User" style={{textDecoration: "none", color: "white"}}>
                   <Tab label="User"/>
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