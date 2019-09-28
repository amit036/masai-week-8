import React from 'react'
import Rentcar from './Rentcar';
import Rentbike from './Rentbike';
import RentScooty from './RentScooty';
class Rent extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
            <Rentcar />
            <Rentbike/>
            <RentScooty/>
            </div>
        );

    }
}
export default Rent;