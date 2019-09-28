import React from "react";
import { Route } from "react-router-dom";
import Home from './Home.js'
import Login from './Login.js'
import Signup from "./Signup.js";
import AdminLog from "./AdminLog.js";
import Pricing from "./Pricing.js";
import Rent from "./Rent.js";
import Trail2day from "./Trail2day.js";
import BookCar from "./BookCar.js";
import BookBike from "./BookBike.js";
import BookScooty from "./BookScooty.js";
import Contact from "./Contact.js";
const Routes = () => {
  return (
    <div>

      <React.Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/adminlog" component={AdminLog} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component ={Signup}/>
        <Route path="/pricing" component={Pricing}/>
        <Route path="/trail" component={Trail2day}/>
        <Route path="/rent" component={Rent}/>
        <Route path="/bookCar" component={BookCar}/>
        <Route path="/bookBike" component={BookBike}/>
        <Route path="/bookScooty" component={BookScooty}/>
        <Route path="/contact" component={Contact}/>
      </React.Fragment>
    </div>
  )
    ;
};
export default Routes;