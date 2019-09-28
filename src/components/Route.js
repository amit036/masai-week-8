import React from "react";
import { Route } from "react-router-dom";
// import Home from './Home.js'
// import About from './About.js'
// import Lookbook from './Lookbook.js'
// import Shop from './Services.js'
import Login from './Login.js'
// import Earrings from "./Earrings.js";
// import Bracelates from "./Bracelates.js";
// import Necklaces from "./Necklaces.js";
import Signup from "./Signup.js";
import AdminLog from "./AdminLog.js";
const Routes = () => {
  return (
    <div>

      <React.Fragment>
        {/* <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/lookbook" component={Lookbook} />
        <Route path="/shop" component={Shop} />
        <Route path="/Earrings" component={Earrings} />
        <Route path="/Bracelates" component={Bracelates} /> */}
        <Route path="/adminlog" component={AdminLog} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component ={Signup}/>
      </React.Fragment>
    </div>
  )
    ;
};
export default Routes;