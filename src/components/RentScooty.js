import React from 'react'
import Card from './Card'
import VehicleTitle from './VehicleTitle'
class RentScooty extends React.Component{
    constructor(){
        super();
    this.state={
        Scooty:[
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
            <div style={{float:"left",clear:"both"}}>
                <div>
                    <VehicleTitle bg="#DD136F" vname="Scooty"/>
                </div>
            {
              this.state.Scooty.map(items => {
                return (
                <div style={{float:"left"}}>
                  <Card name={items.name} rent={items.rent} imgUrl={items.imgUrl}/>
                </div>
                )
              })
            }
          </div>
            );
    }
}
export default RentScooty;