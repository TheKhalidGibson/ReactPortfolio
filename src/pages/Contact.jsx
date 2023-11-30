import "../assets/style.css";

import { useState } from "react";
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
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email is invalid");
      return;
    }

    setEmail("");
  };

  return (
    <main className="m-0 contact-page">
      <div className="mx-5 pt-5">
        <p className="text-center fs-2 pb-5 resume-header wrapper">
          Stay in Touch
        </p>

        <MDBCard
          className="mx-5 px-5 py-5"
          style={{ backgroundColor: "#293241", color: "#E0FBFC" }}
        >
          <div className="row g-2">
            <h1>Best Ways to Reach Me</h1>
            <div className="col-md-6 row  px-3 pt-4">
              <a href="https://www.linkedin.com/in/khalidgibson/">
                <img
                  src="../assets/LinkedIn1.png"
                  className="contact-icons"
                  alt="..."
                />
              </a>
              <MDBTypography className="contact-icon-labels">LinkedIn</MDBTypography>

              <a href="https://twitter.com/KhalidGibson">
                <img
                  src="../assets/Twitter1.png"
                  className="contact-icons"
                  alt="..."
                />
              </a>

              <MDBTypography className="contact-icon-labels">Twitter</MDBTypography>

              <a href="https://twitter.com/KhalidGibson">
                <img
                  src="../assets/GMail1.png"
                  className="contact-icons"
                  alt="..."
                />
              </a>

              <MDBTypography className="contact-icon-labels">Email</MDBTypography>
            </div>
            <div className="col-md-6 col-sm-12 px-3 pt-4">
              <img
                src="../assets/MyAvatar15.png"
                className="img-thumbnail"
                alt="..."
              />
            </div>
          </div>
        </MDBCard>
      </div>
    </main>
  );
}
