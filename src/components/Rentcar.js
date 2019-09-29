import React from 'react'
import Card from './Card';
import VehicleTitle from './VehicleTitle';
class Rentcar extends React.Component{
    constructor(props){
        super(props);
    this.state={
        Car:[
            {
                name:"Maruti Suzuki",
                imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfGg935oEr6Jg61BlITRwwomM3NfenU016R4CpYn9soWYew5T7A",
                rent:"₹1500/day",
                id:0
            },
            {
                name:"Maruti Dzire",
                imgUrl:"https://media.zigcdn.com/media/model/2017/May/dire_320x160.jpg",
                rent:"₹1500/day",
                id:1
            },
            {
                name:"Maruti Ertiga",
                imgUrl:"http://im.rediff.com/money/2019/aug/08ertiga.jpg",
                rent:"₹1500/day",
                id:2
            },
            {
                name:"Maruti Suzuki",
                imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfGg935oEr6Jg61BlITRwwomM3NfenU016R4CpYn9soWYew5T7A",
                rent:"₹1500/day",
                id:3
            },
            {
                name:"Maruti Dzire",
                imgUrl:"https://media.zigcdn.com/media/model/2017/May/dire_320x160.jpg",
                rent:"₹1500/day",
                id:4
            },
            {
                name:"Maruti Ertiga",
                imgUrl:"http://im.rediff.com/money/2019/aug/08ertiga.jpg",
                rent:"₹1500/day",
                id:5
            },
            {
                name:"Maruti Suzuki",
                imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfGg935oEr6Jg61BlITRwwomM3NfenU016R4CpYn9soWYew5T7A",
                rent:"₹1500/day",
                id:6
            },
            {
                name:"Maruti Dzire",
                imgUrl:"https://media.zigcdn.com/media/model/2017/May/dire_320x160.jpg",
                rent:"₹1500/day",
                id:7
            },
            {
                name:"Maruti Ertiga",
                imgUrl:"http://im.rediff.com/money/2019/aug/08ertiga.jpg",
                rent:"₹1500/day",
                id:8
            },
            {
                name:"Maruti Ertiga",
                imgUrl:"http://im.rediff.com/money/2019/aug/08ertiga.jpg",
                rent:"₹1500/day",
                id:9
            }

        ]
    }
    }
    render(){
        return(
        <div style={{float:"left"}}>
            <div>
                <VehicleTitle bg="red" vname="Car"/>
            </div>
        {
          this.state.Car.map(items => {
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
export default Rentcar;