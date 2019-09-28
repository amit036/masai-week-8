import React from "react";
import { Route } from "react-router-dom";
import Home from './Home.js'
// import About from './About.js'
// import Lookbook from './Lookbook.js'
// import Shop from './Services.js'
import Login from './Login.js'
import Signup from "./Signup.js";
import AdminLog from "./AdminLog.js";
import Pricing from "./Pricing.js";
const Routes = () => {
  return (
    <div>

      <React.Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/adminlog" component={AdminLog} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component ={Signup}/>
        <Route path="/pricing" component={Pricing}/>
      </React.Fragment>
    </div>
  )
    ;
};
export default Routes;