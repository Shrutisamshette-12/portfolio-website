import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      alert("✅ Message Sent Successfully!");

      console.log(response.data);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
  console.log(error);

  if (error.response) {
    console.log(error.response.data);
    alert(error.response.data.message);
  } else {
    alert(error.message);
  }
}
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <h2>Contact Me</h2>

        <form className="contact-form" onSubmit={handleSubmit}>

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
            rows="6"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;