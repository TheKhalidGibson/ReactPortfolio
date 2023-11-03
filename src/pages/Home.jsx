import React from "react";
import {
  MDBCarouselItem,
  MDBCarousel,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBBadge,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";




export default function Resume() {
  return (

    <main className="m-0 contact-page">


    <h1 className="pb-5 pt-3 resume-header text-center">Welcome Home</h1>
<div className=" pb-5 mx-3 mb-5 pl-5">
      {/* <ul className="pb-5" >
        <h5>Coding Experience</h5>
        <li>Full Stack Web Development</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
        <li>MySQL</li><br/>

        <h5>General Skills</h5>
        <li>Communication</li>
        <li>Leadership</li>
        <li>Sales</li>
        <li>Building Rapport</li>
        <li>Team Building</li>

      </ul> */}

<MDBCarousel className=""  showControls fade>
      <MDBCarouselItem
        className='w-30 d-block mx-auto carousel-img rounded-pill'
        itemId={1}
        src='../assets/FullAvatar6.png'
        alt='...'
      >
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-30 d-block mx-auto carousel-img rounded-pill'
        itemId={2}
        src='../assets/FullAvatar5.png'
        alt='...'
      >
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-30 d-block mx-auto carousel-img rounded-pill'
        itemId={3}
        src='../assets/FullAvatar4.png'
        alt='...'
      >
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-30 d-block mx-auto carousel-img rounded-pill'
        itemId={4}
        src='../assets/FullAvatar3.png'
        alt='...'
      >
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-30 d-block mx-auto carousel-img rounded-pill'
        itemId={5}
        src='../assets/FullAvatar2.png'
        alt='...'
      >
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-30 d-block mx-auto carousel-img rounded-pill'
        itemId={6}
        src='../assets/FullAvatar1.png'
        alt='...'
      >
      </MDBCarouselItem>
    </MDBCarousel>

    </div>
       <h1 className="mx-5 pl-5 my-5 text-center home-message">
        Creating Tech that will Create More Room for Human Interaction
      </h1> 

    </main>
  );
}
