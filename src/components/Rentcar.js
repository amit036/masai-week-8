import React from 'react'
import { Link } from "react-router-dom";
class Rentcar extends React.Component{
    constructor(){
        super();
    this.state={
        Car:[
            {
                name:"Maruti Suzuki",
                imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfGg935oEr6Jg61BlITRwwomM3NfenU016R4CpYn9soWYew5T7A",
                rent:"₹1500/day"
            },
            {
                name:"Maruti Dzire",
                imgUrl:"https://media.zigcdn.com/media/model/2017/May/dire_320x160.jpg",
                rent:"₹1500/day"
            },
            {
                name:"Maruti Ertiga",
                imgUrl:"http://im.rediff.com/money/2019/aug/08ertiga.jpg",
                rent:"₹1500/day"
            },
            {
                name:"Maruti Suzuki",
                imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfGg935oEr6Jg61BlITRwwomM3NfenU016R4CpYn9soWYew5T7A",
                rent:"₹1500/day"
            },
            {
                name:"Maruti Dzire",
                imgUrl:"https://media.zigcdn.com/media/model/2017/May/dire_320x160.jpg",
                rent:"₹1500/day"
            },
            {
                name:"Maruti Ertiga",
                imgUrl:"http://im.rediff.com/money/2019/aug/08ertiga.jpg",
                rent:"₹1500/day"
            },
            {
                name:"Maruti Suzuki",
                imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfGg935oEr6Jg61BlITRwwomM3NfenU016R4CpYn9soWYew5T7A",
                rent:"₹1500/day"
            },
            {
                name:"Maruti Dzire",
                imgUrl:"https://media.zigcdn.com/media/model/2017/May/dire_320x160.jpg",
                rent:"₹1500/day"
            },
            {
                name:"Maruti Ertiga",
                imgUrl:"http://im.rediff.com/money/2019/aug/08ertiga.jpg",
                rent:"₹1500/day"
            },
            {
                name:"Maruti Ertiga",
                imgUrl:"http://im.rediff.com/money/2019/aug/08ertiga.jpg",
                rent:"₹1500/day"
            }

        ]
    }
    }
    render(){
        return(
         <div style={{float:"left"}}>
        <div style={{ marginTop: "100px", marginLeft: "100px" }}>
        <div style={{background:"red",width:"95%",borderRadius:"5px"}}><h2 style={{ textAlign: "center",fontWeight:"bold" }}>Cars</h2></div>
        {
          this.state.Car.map(items => {
            return (
              <div className="card" style={{ width: "300px", float: "left", marginLeft: "30px", marginBottom: "20px" }}>
                <img src={items.imgUrl} style={{ width: "280px", height: "200px" }}></img>
                <hr></hr>
                <p style={{ textAlign: "center" }}>{items.name}</p>
                <p style={{ textAlign: "center", fontWeight: "bold" }}>{items.rent}</p>
               <Link to="/bookCar"><button className="btn btn-primary" style={{width:"100%"}} >BOOK</button></Link> 
              </div>
            )
          })
        }
      </div>
         </div>
        );
    }
}
export default Rentcar;