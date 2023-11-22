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
   

        <MDBCarousel className="" data-interval="9000" showControls fade>
          <MDBCarouselItem
            className="w-30 d-block mx-auto carousel-img rounded-pill"
            itemId={1}
            src="../assets/FullAvatar6.png"
            alt="..."
          >
            <div><h1 className="avatar-greeting">Hey There</h1></div>
          </MDBCarouselItem>

          <MDBCarouselItem
            className="w-30 d-block mx-auto carousel-img rounded-pill"
            itemId={2}
            src="../assets/FullAvatar5.png"
            alt="..."
          >
            <div><h1 className="avatar-greeting text-center">Welcome Home</h1></div>
            
          </MDBCarouselItem>
          <MDBCarouselItem
            className="w-30 d-block mx-auto carousel-img rounded-pill"
            itemId={3}
            src="../assets/FullAvatar4.png"
            alt="..."
          >
            <div><h1 className="avatar-greeting text-center">I'm Khalid's Avatar</h1></div>
          </MDBCarouselItem>

          <MDBCarouselItem
            className="w-30 d-block mx-auto carousel-img rounded-pill"
            itemId={4}
            src="../assets/FullAvatar3.png"
            alt="..."
          >
            <div><h1 className="avatar-greeting text-center">Come On In</h1></div>
          </MDBCarouselItem>

          <MDBCarouselItem
            className="w-30 d-block mx-auto carousel-img rounded-pill"
            itemId={5}
            src="../assets/FullAvatar2.png"
            alt="..."
          >
            <div><h1 className="avatar-greeting text-center">Please Explore</h1></div>
          </MDBCarouselItem>

          <MDBCarouselItem
            className="w-30 d-block mx-auto carousel-img rounded-pill"
            itemId={6}
            src="../assets/FullAvatar1.png"
            alt="..."
          >
            <div><h1 className="avatar-greeting text-center">Make yourself at Home</h1></div>
          </MDBCarouselItem>
        </MDBCarousel>
      </div>
      <h1 className="mx-5 pl-5 my-5 text-center home-message">
        Creating Tech that will Create More Room for Human Interaction
      </h1>
    </main>
  );
}


