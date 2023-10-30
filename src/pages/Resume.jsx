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


    <h1 className="pb-5 pt-3 resume-header text-center">Resume</h1>
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

<MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>

    </div>
      {/* <form className="mx-5 pl-5 my-5 text-center">
      <a href="https://drive.google.com/file/d/1jnYPy2KIDOJShawuX3C8zUf4x3Ined8i/view?usp=drive_link" class="card-link"><button type="button" className="btn btn-primary btn-lg submitBtn">My Resume Link</button></a>
      </form> */}

    </main>
  );
}
