import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would usually send the form data to a server or email
    setFormStatus('Thank you for reaching out! We will get back to you shortly.');
    setFormData({ name: '', email: '', message: '' }); // Clear form after submission
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-success mb-4">Contact Nava Fruits</h2>
      <p className="text-center text-muted">We'd love to hear from you! Fill out the form below and we'll be in touch.</p>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">Send Message</button>
          </form>
          {formStatus && <div className="alert alert-success mt-3">{formStatus}</div>}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
