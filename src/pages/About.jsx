import "../assets/style.css";

// export default function About() {
//   return (

//     <main className="m-0 contact-page">

// <div className="mx-5 pt-5">

// <div>
//       <img src="./assets/profilePic3.jpg" className="rounded mx-5 mb-3 mx-auto d-block pt-5" width="150" height="auto" alt="..."/>
// </div>
// <h1 className="text-center pb-5 pt-3">About Me</h1>
// <br />
//   <div>
//       <p className="mx-5">
//       I am a Full-Stack Developer who is currently learning how to enter into the industry by seeking education and repetition in the craft. The University of Penn LPS BootCamp is that education for me and although I am currently a student, I have great confidence in my progression so far and look forward to what the future will hold.
//       </p>
//   </div>

// </div>

// <form className="py-5 mx-auto text-center">
// <a href="https://github.com/TheKhalidGibson"><button type="button" className="btn btn-primary btn-lg submitBtn">My GitHub Profile</button></a>

// </form>
// </main>
//   );
// }

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
                    
                    <hr className="mt-0 mb-4"/>
                    <MDBRow className="pt-1 text-center pb-5">
                      {/* <MDBCol size="6" className="mb-5 "> */}
                        <MDBCardText className="">
                          I'm a Full-Stack Web Developer from the Philadelphia
                          area. I have a passion for Front-End Design and User
                          Interface projects. I graduated from the University of
                          Pennsylvania LPS Coding BootCamp so I am skilled in
                          both Front and Back-End Technologies
                        </MDBCardText>
                      {/* </MDBCol>                      */}
                    </MDBRow>

                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3 text-center">
                        <MDBTypography tag="h4">
                          My Technological Journey Through Coding
                        </MDBTypography>

                        {/* <MDBCardText className="">My Technological Journey Through Coding</MDBCardText> */}
                        <MDBContainer className="">
                          <img
                            src="./assets/API.jpg"
                            className="rounded-3"
                            style={{ width: "75px" }}
                            alt="Avatar"
                          />
                          <img
                            src="./assets/css.jpg"
                            className="rounded-3"
                            style={{ width: "75px" }}
                            alt="Avatar"
                          />
                          <img
                            src="./assets/html.jpg"
                            className="rounded-3"
                            style={{ width: "75px" }}
                            alt="Avatar"
                          />
                          <img
                            src="./assets/Js.jpg"
                            className="rounded-3"
                            style={{ width: "75px" }}
                            alt="Avatar"
                          />
                        </MDBContainer>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3 text-center">
                        <MDBTypography tag="h4">
                          Temperature Check?
                        </MDBTypography>
                        <MDBContainer className="temperature-badge">
                          <MDBBadge color="success" pill>
                            Active
                          </MDBBadge>
                          <MDBBadge color="primary" pill>
                            Onboarding
                          </MDBBadge>
                          <MDBBadge color="success" pill>
                            Active
                          </MDBBadge>
                          <MDBBadge color="primary" pill>
                            Onboarding
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

              {/* <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src='...' class="d-block w-100" alt="avatar"/>
    </div>
    <div class="carousel-item">
      <img src='...' class="d-block w-100" alt="avatar"/>
    </div>
    <div class="carousel-item">
      <img src='...' class="d-block w-100" alt="avatar"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
