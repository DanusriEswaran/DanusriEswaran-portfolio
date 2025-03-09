import React, { useState } from "react";
import emailjs from "emailjs-com";
import Lottie from "lottie-react";
import animationData from "../../assets/contact.json"; // Replace with your Lottie JSON file
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showDialog, setShowDialog] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_986d0qa",
        "template_e3kl28l",
        formData,
        "2q0242ntIVnsSmU3D"
      )
      .then(() => {
        setShowDialog(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <section id="contact">
      <h2>CONTACT ME</h2>
      <div className="title-line"></div>
      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-card">
          <h3>Get in Touch</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Lottie Animation on the Right */}
        <div className="lottie-container">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>

      {/* Dialog Box */}
      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <p>Message sent successfully!</p>
            <button onClick={() => setShowDialog(false)}>OK</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
