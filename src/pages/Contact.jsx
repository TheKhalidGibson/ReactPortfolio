import { useState } from "react";

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

  return (
    <main className="m-0 contact-page">
      <div className="mx-5 pt-5">
        <p className="text-center fs-2">Stay in Touch</p>
        <form>
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
              type="text"
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

          <button type="submit" className="btn btn-light btn-lg mt-3">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
