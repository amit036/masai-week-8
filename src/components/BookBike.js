import React from 'react'
const BookBike=()=>{
    return(
       <div style={{marginLeft:"600px",marginTop:"200px"}}>
       <img src="https://auto.ndtvimg.com/bike-images/colors/tvs/apache-rtr-200-4v/tvs-apache-rtr-200-4v-black.png?v=1"  style={{width:"400px",height:"300px",marginLeft:"-50px"}}></img>
       <p style={{marginLeft:"100px"}}>TVS Apache</p>
       <p style={{marginLeft:"100px"}}>₹1000/day</p>
       <select className="form-control" style={{width:"250px"}}>
           <option value="1">1 Day</option>
           <option value="2">2 Day</option>
           <option value="3">3 Day</option>
           <option value="4">4 Day</option>
           <option value="5">5 Day</option>
           <option value="6">6 Day</option>
           <option value="7">7 Day</option>
           <option value="8">8 Day</option>
           <option value="9">9 Day</option>
           <option value="10">10 Day</option>
       </select>
       <button className="btn btn-success" style={{marginTop:"20px",width:"250px"}}>Book</button>
        </div>
    );
}
export default BookBike;