import React from 'react'
const BookCar=()=>{
    return(
       <div style={{marginLeft:"600px",marginTop:"200px"}}>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfGg935oEr6Jg61BlITRwwomM3NfenU016R4CpYn9soWYew5T7A" style={{width:"400px",height:"300px",marginLeft:"-50px"}}></img>
       <p style={{marginLeft:"100px"}}>Maruti Suzuki</p>
       <p style={{marginLeft:"100px"}}>₹1500/day</p>
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
       <button className="btn btn-danger" style={{marginTop:"20px",width:"250px"}}>Book</button>
        </div>
    );
}
export default BookCar;