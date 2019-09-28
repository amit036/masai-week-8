import React from 'react'
import { Link } from "react-router-dom";
class Rentbike extends React.Component{
    constructor(){
        super();
    this.state={
        Bike:[
            {
                name:"TVS Apache",
                imgUrl:"https://auto.ndtvimg.com/bike-images/colors/tvs/apache-rtr-200-4v/tvs-apache-rtr-200-4v-black.png?v=1",
                rent:"₹800/day"
            },
            {
                name:"Bajaj Pulsar NS200",
                imgUrl:"https://auto.ndtvimg.com/bike-images/colors/bajaj/pulsar-200-ns/bajaj-pulsar-200-ns-wild-red.png?v=26",
                rent:"₹1500/day"
            },
            {
                name:"Yamaha YZF",
                imgUrl:"https://imgd.aeplcdn.com/1280x720/bw/ec/36469/Yamaha-YZF-R3-Action-138042.jpg?wm=0",
                rent:"₹1500/day"
            },
            {
                name:"TVS Apache",
                imgUrl:"https://auto.ndtvimg.com/bike-images/colors/tvs/apache-rtr-200-4v/tvs-apache-rtr-200-4v-black.png?v=1",
                rent:"₹800/day"
            },
            {
                name:"Bajaj Pulsar NS200",
                imgUrl:"https://auto.ndtvimg.com/bike-images/colors/bajaj/pulsar-200-ns/bajaj-pulsar-200-ns-wild-red.png?v=26",
                rent:"₹1500/day"
            },
            {
                name:"Yamaha YZF",
                imgUrl:"https://imgd.aeplcdn.com/1280x720/bw/ec/36469/Yamaha-YZF-R3-Action-138042.jpg?wm=0",
                rent:"₹1500/day"
            },{
                name:"TVS Apache",
                imgUrl:"https://auto.ndtvimg.com/bike-images/colors/tvs/apache-rtr-200-4v/tvs-apache-rtr-200-4v-black.png?v=1",
                rent:"₹800/day"
            },
            {
                name:"Bajaj Pulsar NS200",
                imgUrl:"https://auto.ndtvimg.com/bike-images/colors/bajaj/pulsar-200-ns/bajaj-pulsar-200-ns-wild-red.png?v=26",
                rent:"₹1500/day"
            },
            {
                name:"Yamaha YZF",
                imgUrl:"https://imgd.aeplcdn.com/1280x720/bw/ec/36469/Yamaha-YZF-R3-Action-138042.jpg?wm=0",
                rent:"₹1500/day"
            },
            {
                name:"Bajaj Pulsar NS200",
                imgUrl:"https://auto.ndtvimg.com/bike-images/colors/bajaj/pulsar-200-ns/bajaj-pulsar-200-ns-wild-red.png?v=26",
                rent:"₹1500/day"
            }

        ]
    }
    }
    render(){
        return(
         <div style={{clear:"both"}}>
        <div style={{ marginTop: "100px", marginLeft: "100px" }}>
        <div style={{background:"red",width:"95%",borderRadius:"5px"}}><h2 style={{ textAlign: "center",fontWeight:"bold"}}>Bike</h2></div>
        {
          this.state.Bike.map(items => {
            return (
              <div className="card" style={{ width: "300px", float: "left", marginLeft: "30px", marginBottom: "20px" }}>
                <img src={items.imgUrl} style={{ width: "280px", height: "200px" }}></img>
                <hr></hr>
                <p style={{ textAlign: "center" }}>{items.name}</p>
                <p style={{ textAlign: "center", fontWeight: "bold" }}>{items.rent}</p>
               <Link to="/bookBike"><button className="btn btn-success" style={{width:"100%"}} >BOOK</button></Link> 
              </div>
            )
          })
        }
      </div>
         </div>
        );
    }
}
export default Rentbike;