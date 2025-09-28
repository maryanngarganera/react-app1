import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = e => setForm({ ...form, [e.target.id]: e.target.value });

  const sendMessage = () => {
    const { name, email, message } = form;
    if (name && email && message) {
      alert("Thank you for your message! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="row">
          <div className="col-lg-6 mb-4 d-flex align-items-stretch">
            <div className="contact-info w-100" style={{minHeight: '100%'}}>
              <h3>Let's Work Together</h3>
              <p>We're always interested in new opportunities and exciting projects.</p>
              <div className="contact-item"><i className="fas fa-envelope me-3"></i> react@grp4.com</div>
              <div className="contact-item"><i className="fas fa-phone me-3"></i> +63 9876543210</div>
              <div className="contact-item"><i className="fas fa-map-marker-alt me-3"></i> University of Cabuyao</div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form">
              <input id="name" value={form.name} onChange={handleChange} className="form-control mb-3" placeholder="Your Name" />
              <input id="email" value={form.email} onChange={handleChange} className="form-control mb-3" placeholder="Your Email" />
              <textarea id="message" value={form.message} onChange={handleChange} rows="5" className="form-control mb-3" placeholder="Your Message"></textarea>
              <button className="btn btn-custom w-100" onClick={sendMessage}>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
