import React from 'react'
import { Link } from "react-router-dom";
class RentScooty extends React.Component{
    constructor(){
        super();
    this.state={
        Car:[
            {
                name:"TVS Jupiter",
                imgUrl:"https://bd.gaadicdn.com/processedimages/tvs/tvs-scooty/640X309/v_scooty-pep-plus_gd.png",
                rent:"₹500/day"
            },
            {
                name:"TVS Zest",
                imgUrl:"https://auto.ndtvimg.com/bike-images/big/tvs/scooty-zest-110/tvs-scooty-zest-110.jpg?v=24",
                rent:"₹500/day"
            },
            {
                name:"TVS Jupiter",
                imgUrl:"https://bd.gaadicdn.com/processedimages/tvs/tvs-scooty/640X309/v_scooty-pep-plus_gd.png",
                rent:"₹500/day"
            },
            {
                name:"TVS Zest",
                imgUrl:"https://auto.ndtvimg.com/bike-images/big/tvs/scooty-zest-110/tvs-scooty-zest-110.jpg?v=24",
                rent:"₹500/day"
            },  {
                name:"TVS Jupiter",
                imgUrl:"https://bd.gaadicdn.com/processedimages/tvs/tvs-scooty/640X309/v_scooty-pep-plus_gd.png",
                rent:"₹500/day"
            },
            {
                name:"TVS Zest",
                imgUrl:"https://auto.ndtvimg.com/bike-images/big/tvs/scooty-zest-110/tvs-scooty-zest-110.jpg?v=24",
                rent:"₹500/day"
            },  {
                name:"TVS Jupiter",
                imgUrl:"https://bd.gaadicdn.com/processedimages/tvs/tvs-scooty/640X309/v_scooty-pep-plus_gd.png",
                rent:"₹500/day"
            },
            {
                name:"TVS Zest",
                imgUrl:"https://auto.ndtvimg.com/bike-images/big/tvs/scooty-zest-110/tvs-scooty-zest-110.jpg?v=24",
                rent:"₹500/day"
            },  {
                name:"TVS Jupiter",
                imgUrl:"https://bd.gaadicdn.com/processedimages/tvs/tvs-scooty/640X309/v_scooty-pep-plus_gd.png",
                rent:"₹500/day"
            },
            {
                name:"TVS Zest",
                imgUrl:"https://auto.ndtvimg.com/bike-images/big/tvs/scooty-zest-110/tvs-scooty-zest-110.jpg?v=24",
                rent:"₹500/day"
            }

        ]
    }
    }
    render(){
        return(
         <div style={{clear:"both"}}>
        <div style={{ marginTop: "100px", marginLeft: "100px" }}>
        <div style={{background:"red",width:"95%",borderRadius:"5px"}}><h2 style={{ textAlign: "center",fontWeight:"bold"}}>Scooty</h2></div>
        {
          this.state.Car.map(items => {
            return (
              <div className="card" style={{ width: "300px", float: "left", marginLeft: "30px", marginBottom: "20px" }}>
                <img src={items.imgUrl} style={{ width: "280px", height: "200px" }}></img>
                <hr></hr>
                <p style={{ textAlign: "center" }}>{items.name}</p>
                <p style={{ textAlign: "center", fontWeight: "bold" }}>{items.rent}</p>
               <Link to="/bookScooty"><button className="btn btn-danger" style={{width:"100%"}} >BOOK</button></Link> 
              </div>
            )
          })
        }
      </div>
         </div>
        );
    }
}
export default RentScooty;