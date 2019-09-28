import React from 'react'
import Home_carousel from './Home_carousel'
import Footer from './Footer'
const Home = () => {
    return (
      <div style={{marginTop:"100px"}}>
      <Home_carousel/>
      <div className="offset-1" style={{float:"left"}}>
      <h2 className="mt-5 ml-5">Book Car/Bikes</h2>
      <img src="https://vogo.in/careers/assets/images/high_impact_work.png" style={{width:"400px",height:"400px"}}></img>
      </div>

      <div className="offset-1" style={{float:"left"}}>
      <h2 className="mt-5 ml-5">2 days Free Trail</h2>
      <img className="offset-1" src="https://www.drivedrivecar.com/assets/img/list-car.png" style={{width:"400px",height:"400px"}}></img>
      </div>
      
      <div className="offset-1" style={{float:"left"}}>
      <h2 className="mt-5 ml-5">Low Rent & Comfortable</h2>
      <img className="offset-1" src="https://cdn0.desidime.com/attachments/photos/538637/medium/54096371542026750_4.svg?1542026754"style={{width:"400px",height:"400px"}}></img>
      </div>
      <div style={{clear:"both",marginTop:"30px"}}>
          <Footer/>
      </div>
     </div>
          );
    }
export default Home;