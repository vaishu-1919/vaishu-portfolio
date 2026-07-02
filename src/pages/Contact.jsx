import "./Contact.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://script.google.com/macros/s/AKfycbwMnhsGGI2w3SYfTcMfxW5DIluuP21l_FQDWmRInvz8uy4BRa35A_9XFEwchOcFvnKf/exec", {
        method: "POST",
        body: JSON.stringify(formData)
      });

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      toast.error("Failed to send message");
    }
  };

  return (
    <section className="contact">
      <h1>Contact Me</h1>

      <div className="contact-container">

        {/* FORM */}
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit">Send</button>
        </form>

        {/* SOCIAL BUTTONS */}
        <div className="contact-links">

          <button
            className="link-btn"
            onClick={() => window.open("https://mail.google.com/", "_blank")}
          >
            📧 Email
          </button>

          <button
            className="link-btn"
            onClick={() => window.open("https://github.com/", "_blank")}
          >
            💻 GitHub
          </button>

          <button
            className="link-btn"
            onClick={() => window.open("https://www.linkedin.com/", "_blank")}
          >
            💼 LinkedIn
          </button>

        </div>

      </div>

      <ToastContainer />
    </section>
  );
}

export default Contact;