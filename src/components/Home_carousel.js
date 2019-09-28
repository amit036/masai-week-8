import React from 'react'
const Home_carousel=()=>{
    return(
 <div>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" style={{height: "800px"}}>
    <div class="carousel-item active">
      <img style={{height: "800px"}} class="d-block w-100" src="https://d36g7qg6pk2cm7.cloudfront.net/assets/og_city_home-49f86ab1b6f03e6ac461849bf5e5aabf9d1a28660ae121e99bde93444e38b973.jpg" alt="First slide" />
      <div class="carousel-caption d-none d-md-block">
      <button className="btn btn-primary ">BOOK </button>
      <button className="btn btn-primary ml-4">FREE 2 DAYS TRAIL</button>
     </div>
   </div>
    <div class="carousel-item">
      <img style={{height: "800px"}} class="d-block w-100" src="https://cdn4.vectorstock.com/i/1000x1000/02/33/man-giving-woman-keys-of-red-car-present-vector-22710233.jpg" alt="Second slide" />
      <div class="carousel-caption d-none d-md-block">
      <button className="btn btn-primary">BOOK </button>
      
     </div>
    </div>
    <div class="carousel-item">
      <img  style={{height: "800px"}} class="d-block w-100" src="https://entrackr.com/wp-content/uploads/2019/05/scooter-rental.jpg" alt="Third slide" />
      <div class="carousel-caption d-none d-md-block">
      <button className="btn btn-primary">BOOK </button>
     </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </div>
    )
}
export default Home_carousel;