import React from 'react'
import Card from './Card';
import VehicleTitle from './VehicleTitle';
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
            <div style={{float:"left",clear:"both"}}>
                <div>
                    <VehicleTitle bg="orange" vname="Bike"/>
                </div>
            {
              this.state.Bike.map(items => {
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
export default Rentbike;