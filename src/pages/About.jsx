import "../assets/style.css";
import React from "react";
import {
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

export default function PersonalProfile() {
  return (
    <section className="vh-90" style={{ backgroundColor: "#7180B9" }}>
      <MDBContainer className="py-5 h-90 justify-content-center">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="12" className="mb-4 mb-lg-0">
            <MDBCard
              className="mb-3 px-5"
              style={{ backgroundColor: "#293241" }}
            >
              <MDBRow className="g-0">
                <MDBCol
                  md="12"
                  className=" gradient-custom text-center"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                  }}
                >
                  <div className="about-me-header center my-5 py-3">
                    <MDBCardImage
                      src="./assets/profilePic3.jpg"
                      alt="Avatar Transparent ProfilePic"
                      className="img-fluid pb-3 profile-pic shadow-2-strong rounded-pill animated bounce infinite"
                      style={{ width: "150px" }}
                      fluid
                    />
                    <MDBTypography tag="h2">Khalid Gibson</MDBTypography>
                    <MDBTypography tag="h4">
                      {" "}
                      (Certified Software Developer)
                    </MDBTypography>
                  </div>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="12">
                  <MDBCardBody className="p-4 card-body-all text-center">
                    <MDBTypography tag="h2">Who Am I?</MDBTypography>

                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1 text-center pb-5">
                      {/* <MDBCol size="6" className="mb-5 "> */}
                      <MDBCardText className="">
                        I'm a Full-Stack Web Developer from the Philadelphia
                        area. I have a passion for Front-End Design and User
                        Interface projects. I graduated from the University of
                        Pennsylvania LPS Coding BootCamp so I am skilled in both
                        Front and Back-End Technologies
                      </MDBCardText>
                      <MDBIcon
                        fas
                        icon="user-graduate"
                        className="about-me-header"
                      />
                      {/* </MDBCol>                      */}
                    </MDBRow>

                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3 text-center">
                        <MDBTypography tag="h4">
                          My Essential Focal Points
                        </MDBTypography>

                        {/* <MDBCardText className="">My Technological Journey Through Coding</MDBCardText> */}
                        <MDBContainer className="">
                        <MDBTypography tag="h6">
                          Quick Responses
                        </MDBTypography>
                          <span className="material-symbols-outlined">
                            bolt
                          </span>
                          {/* <img
                            src="./assets/Js.jpg"
                            className="rounded-3"
                            style={{ width: "85px" }}
                            alt="Avatar"
                          /> */}
                          <hr className="mt-0 mb-4" />
                          <MDBTypography tag="h6">
                          Dynamic Pages
                        </MDBTypography>
                          <span className="material-symbols-outlined">
                            dynamic_feed
                          </span>
                          {/* <img
                            src="./assets/css.jpg"
                            className="rounded-3"
                            style={{ width: "85px" }}
                            alt="Avatar"
                          /> */}
                          <hr className="mt-0 mb-4" />
                          <MDBTypography tag="h6">
                          Device Friendly
                        </MDBTypography>
                          <span className="material-symbols-outlined">
                            devices
                          </span>
                          {/* <img
                            src="./assets/API.jpg"
                            className="rounded-3"
                            style={{ width: "85px" }}
                            alt="Avatar"
                          /> */}
                          <hr className="mt-0 mb-4"/>
                          <MDBTypography tag="h6">
                          Bringing Projects to Life
                        </MDBTypography>
                          <span className="material-symbols-outlined">
                            planner_review
                          </span>
                          {/* <img
                            src="./assets/html.jpg"
                            className="rounded-3"
                            style={{ width: "85px" }}
                            alt="Avatar"
                          /> */}
                        </MDBContainer>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3 text-center">
                        <MDBTypography tag="h4">
                          Temperature Check?
                        </MDBTypography>
                        <MDBContainer className="temperature-badge">
                        <MDBTypography tag="h6">
                          Front End Skills
                        </MDBTypography>
                          <MDBBadge color="danger" pill>
                            🔥🔥Hot Skillz🔥🔥
                          </MDBBadge>
                          <hr className="mt-0 mb-4" />
                          <MDBTypography tag="h6">
                          Back End Skills
                        </MDBTypography>
                          <MDBBadge color="danger" pill>
                            🔥🔥Hot Skillz🔥🔥
                          </MDBBadge>
                          <hr className="mt-0 mb-4" />
                          <MDBTypography tag="h6">
                          Debugging and Testing
                        </MDBTypography>
                          <MDBBadge color="warning" pill>
                            📈 Medium Levels 📈 
                          </MDBBadge>
                          <hr className="mt-0 mb-4" />
                          <MDBTypography tag="h6">
                          Data Structures and Algorithms
                        </MDBTypography>
                          <MDBBadge color="warning" pill>
                           📖 Mild Levels 📖 (.. learning)
                          </MDBBadge>
                        </MDBContainer>
                      </MDBCol>
                    </MDBRow>

                    <div className="d-flex justify-content-start">
                      <a href="#!">
                        <MDBIcon fab icon="facebook me-3" size="lg" />
                      </a>
                      <a href="#!">
                        <MDBIcon fab icon="twitter me-3" size="lg" />
                      </a>
                      <a href="#!">
                        <MDBIcon fab icon="instagram me-3" size="lg" />
                      </a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
