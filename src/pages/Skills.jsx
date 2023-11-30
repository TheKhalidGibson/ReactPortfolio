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
        <MDBCarousel showControls fade >
          <MDBCarouselItem
            className="w-100 d-block carousel-img"
            itemId={1}
            src="../assets/Coolor1.png"
            alt="..."
          >
            <div className="row g-2">
                <h1>Frontend</h1>
              <div className="col-md-6 col-sm-12 px-3 pt-4">
                <MDBTypography><b>HTML</b>: Structuring Web Pages</MDBTypography>
                <MDBTypography><b>CSS</b>: Styling Web Pages </MDBTypography>
                <MDBTypography><b>JavaScript</b>: Making Web Pages Interactive</MDBTypography>
                <MDBTypography><b>React</b>: Dynamically Changing Components of Web Pages </MDBTypography>
              </div>
              <div className="col-md-6 col-sm-12 px-3 pt-4">
                <MDBTypography><b>Bootstrap</b>: Incorporating Design Templates</MDBTypography>
                <MDBTypography><b>Material UI</b>: Implementing Component Libraries</MDBTypography>
                <MDBTypography><b>JQuery</b>: Manipulating the DOM </MDBTypography>
                <MDBTypography><b>Sass</b>: Using Extensions with CSS</MDBTypography>
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
                <MDBTypography><b>Node.js</b>: Utilizing the Client- and Server-Sides</MDBTypography>
                <MDBTypography><b>Express</b>: Building with Node.js Frameworks</MDBTypography>
                <MDBTypography><b>SQL</b>: Storing and Utilizing Information in Databases</MDBTypography>
                <MDBTypography><b>Git</b>: Using Developer Tools for Version Control</MDBTypography>
              </div>
              <div className="col-md-6 col-sm-12 px-3 pt-4">
                <MDBTypography><b>APIs</b>: Requesting Information and Functionality from 3rd Parties</MDBTypography>
                <MDBTypography><b>NoSQL</b>: Querying Data in Various Structures</MDBTypography>
                <MDBTypography><b>MongoDB</b>: Storing Structured and Unstructured Data</MDBTypography>
                <MDBTypography><b>React</b>: Grouping Together Elements into Components Creating Cleaner Codes</MDBTypography>
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
                <MDBTypography><b>Problem Solving</b>: Identifying Not Only How to Solve the Problems but also How They Originated and How to Prevent Them</MDBTypography>
                <MDBTypography><b>Learning Mindset</b>: Always Having a Thirst and a Curiosity for Old and New Knowledge</MDBTypography>
                <MDBTypography><b>Communication</b>: Articulating in Ways that Everyone Can Understand Clearly</MDBTypography>
                <MDBTypography><b>Leadership</b>: Being in the Forefront of Inspiring Positive Action and Task Completion</MDBTypography>
              </div>
              <div className="col-md-6 col-sm-12 px-3 pt-4">
                <MDBTypography><b>Teamwork</b>: Aligning with the Team Needs and Organizing Tasks based on Strengths and Weaknesses</MDBTypography>
                <MDBTypography><b>Research</b>: Discovering Past Future and Current Challenges and Exploring Documentation and Expert Articles</MDBTypography>
                <MDBTypography><b>Independent Worker</b>: Focusing On Tasks and Executing on Goals that Do Not Require or Rely on Group Effort</MDBTypography>
                <MDBTypography><b>Interpersonal Skills</b>: Sociable in Ways that Create Meaningful Relationships in the Work Place </MDBTypography>
              </div>
            </div>
          </MDBCarouselItem>
        </MDBCarousel>
      </div>
      <form className="mx-5 pl-5 my-5 text-center">
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vTkSOebRx2gydhQvii1Lm7ry9qeUkonKwSNFXDA_iuiDxCsuBbzGirtxHzPTpKj5q9BikQa6xuaF2BU/pub"
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
