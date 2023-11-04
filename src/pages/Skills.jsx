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
      <h1 className="pb-5 pt-3 resume-header text-center">Skills</h1>
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

        <MDBCarousel showControls fade>
          <MDBCarouselItem
            className="w-100 d-block carousel-img"
            itemId={1}
            src="../assets/Coolor1.png"
            alt="..."
          >
            <div className="row g-2">
                <h1>Frontend</h1>
              <div className="col-md-6 col-sm-12 px-3 pt-4">
                <MDBTypography>HTML: This is a placeholder sentence here</MDBTypography>
                <MDBTypography>HTML: This is a placeholder sentence here</MDBTypography>
                <MDBTypography>HTML: This is a placeholder sentence here</MDBTypography>
                <MDBTypography>HTML: This is a placeholder sentence here</MDBTypography>
              </div>
              <div className="col-md-6 col-sm-12 px-3 pt-4">
                <MDBTypography>HTML: This is a placeholder sentence here</MDBTypography>
                <MDBTypography>HTML: This is a placeholder sentence here</MDBTypography>
                <MDBTypography>HTML: This is a placeholder sentence here</MDBTypography>
                <MDBTypography>HTML: This is a placeholder sentence here</MDBTypography>
              </div>
            </div>
          </MDBCarouselItem>

          <MDBCarouselItem
            className="w-100 d-block carousel-img"
            itemId={2}
            src="../assets/Coolor2.png"
            alt="..."
          >
            <div className="row g-2">
                <h1>Backend</h1>
              <div className="col-md-6 col-sm-12 px-3 pt-4">
                <MDBTypography>HTML: This is a placeholder sentence here</MDBTypography>
                <MDBTypography>HTML: This is a placeholder sentence here</MDBTypography>
                <MDBTypography>HTML: This is a placeholder sentence here</MDBTypography>
                <MDBTypography>HTML: This is a placeholder sentence here</MDBTypography>
              </div>
              <div className="col-md-6 col-sm-12 px-3 pt-4">
                <MDBTypography>HTML: This is a placeholder sentence here</MDBTypography>
                <MDBTypography>HTML: This is a placeholder sentence here</MDBTypography>
                <MDBTypography>HTML: This is a placeholder sentence here</MDBTypography>
                <MDBTypography>HTML: This is a placeholder sentence here</MDBTypography>
              </div>
            </div>
          </MDBCarouselItem>

          <MDBCarouselItem
            className="w-100 d-block carousel-img"
            itemId={3}
            src="../assets/Coolor3.png"
            alt="..."
          >
            <div className="row g-2">
                <h1>Transferables</h1>
              <div className="col-md-6 col-sm-12 px-3 pt-4">
                <MDBTypography>HTML: This is a placeholder sentence here</MDBTypography>
                <MDBTypography>HTML: This is a placeholder sentence here</MDBTypography>
                <MDBTypography>HTML: This is a placeholder sentence here</MDBTypography>
                <MDBTypography>HTML: This is a placeholder sentence here</MDBTypography>
              </div>
              <div className="col-md-6 col-sm-12 px-3 pt-4">
                <MDBTypography>HTML: This is a placeholder sentence here</MDBTypography>
                <MDBTypography>HTML: This is a placeholder sentence here</MDBTypography>
                <MDBTypography>HTML: This is a placeholder sentence here</MDBTypography>
                <MDBTypography>HTML: This is a placeholder sentence here</MDBTypography>
              </div>
            </div>
          </MDBCarouselItem>
        </MDBCarousel>
      </div>
      <form className="mx-5 pl-5 my-5 text-center">
        <a
          href="https://drive.google.com/file/d/1jnYPy2KIDOJShawuX3C8zUf4x3Ined8i/view?usp=drive_link"
          class="card-link"
        >
          <button type="button" className="btn btn-primary btn-lg submitBtn">
            My Resume Link
          </button>
        </a>
      </form>
    </main>
  );
}
