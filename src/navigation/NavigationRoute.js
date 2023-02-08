import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Landing from "../components/Landing";
import BusSchedule from "../components/BusSchedule";
import UserDetails from "../components/UserDetails";
import Admin from "../components/Admin";
import AdminLogin from "../components/AdminLogin";
  
  console.log("NavigationRoute");
  const NavigationRoute = () => {
    return (
      <div>
        <Router>
    
          <Routes>
            <Route path="/" element={<Navigate to="/Landing"/>} />
            <Route path="/Landing" element={<Landing/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="/User" element={<Home/>}/>
            <Route path="/Booking" element={<BusSchedule/>}/>
            <Route path="/UserDetails" element={<UserDetails/>}/>
            <Route path="/AdminLogin" element={<AdminLogin/>}/>
            <Route path="/Admin" element={<Admin/>}/>
          </Routes>
        </Router>
      </div>
    );
  };
  
  export default NavigationRoute;