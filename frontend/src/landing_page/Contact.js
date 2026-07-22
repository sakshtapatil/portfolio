import React, { useState } from "react";

function Contact() {
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setSuccess(false);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        console.log(data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Unable to connect to backend.");
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h1 className="text-center">Get in Touch</h1>

        <div className="hero-line"></div>

        <div className="row">
          <div className="col-6">
            <h2>Let's Connect</h2>

            <div className="card mt-3 mb-3">
              <div className="card-body">
                <p>Phone</p>
                <p>
                  <a href="tel:9916716403" className="contact-link">
                    <i className="fa-solid fa-phone"></i> 9916716403
                  </a>
                </p>
              </div>
            </div>

            <div className="card mt-3 mb-3">
              <div className="card-body">
                <p>Email</p>
                <p>
                  <a
                    href="mailto:schandurepatil@gmail.com"
                    className="contact-link"
                  >
                    <i className="fa-solid fa-envelope"></i>{" "}
                    schandurepatil@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <form className="col-6 mt-3 mb-3" onSubmit={handleSubmit}>
            <h5 className="mt-4">Name</h5>

            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <h5 className="mt-4">Email</h5>

            <input
              type="email"
              name="email"
              className="form-control mt-2"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <h5 className="mt-4">Message</h5>

            <textarea
              name="message"
              className="form-control"
              rows="4"
              placeholder="Enter your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              className="btn w-100 mt-3 p-2"
              style={{
                backgroundColor: "#8FEBDD",
                color: "black",
                borderRadius: "15px",
                fontWeight: "bold",
                border: "none",
              }}
            >
              Send Message
            </button>

            {success && (
              <div className="alert alert-success mt-3">
                ✅ Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;