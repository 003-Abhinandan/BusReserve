import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Signup from "../components/Signup";
  
  
  console.log("NavigationRoute");
  const NavigationRoute = () => {
    return (
      <div>
        <Router>
    
          <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>
          </Routes>
        </Router>
      </div>
    );
  };
  
  export default NavigationRoute;