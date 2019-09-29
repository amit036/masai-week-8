import React from 'react'
import { Link } from "react-router-dom";
const Card=(props)=>{
return(
    <div>
                <div className="card" style={{ width: "300px", marginLeft: "60px",marginBottom:"20px"}}>
                    <img src={props.imgUrl} style={{ width: "280px", height: "200px" }}></img>
                    <hr></hr>
                    <p style={{ textAlign: "center" }}>{props.name}</p>
                    <p style={{ textAlign: "center", fontWeight: "bold" }}>{props.rent}</p>
                    <Link to="/bookCar"><button className="btn btn-primary" style={{width:"100%"}} >BOOK</button></Link>
                </div>
    </div>
);
}
export default Card;