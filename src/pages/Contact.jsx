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
        <p className="text-center fs-2 pb-5 resume-header wrapper">Stay in Touch</p>
    
        <MDBCard
          className="mx-5 px-5 py-5"
          style={{ backgroundColor: "#293241", color: "#E0FBFC" }}
        >
          <h5>Name:</h5>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Type Name Here"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <h5>Email:</h5>

          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Type Email Here"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <h5>Message:</h5>

          <div className="input-group">
            <textarea
              className="form-control"
              placeholder="Type Message Here"
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-light btn-lg mt-3 contact-submit-btn"
            onSubmit={handleFormSubmit}
            disabled={!(formData.name && formData.email && formData.message)}

          >
            Submit
          </button>
          {/* <button className="btn draw-border">Draw Border</button> */}
        </MDBCard>
      </div>
    </main>
  );
}
