import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r bg-black text-white py-9 rounded-lg m-5 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-xs">
          We’d love to hear from you! Whether you have a question about our products,
          need support, or just want to say hello.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border text-xs border-gray-300 rounded-lg px-2 py-1 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border text-xs border-gray-300 rounded-lg px-2 py-1 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border  text-xs border-gray-300 rounded-lg px-2 py-1 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full border  text-xs border-gray-300 rounded-lg px-2 py-1 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-gray-600">
            Feel free to reach out to us through any of the following channels:
          </p>
          <div className="space-y-4 text-gray-700">
            <p><strong>📍 Address:</strong> 123 Electronicz Street, Karachi, Pakistan</p>
            <p><strong>📞 Phone:</strong> +92 315 615116</p>
            <p><strong>✉️ Email:</strong> support@electronicz.com</p>
          </div>

          {/* Google Map */}
          <div className="mt-6">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.692504436326!2d67.0322803150022!3d24.86146218405067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f6f3f2c0a43%3A0x79f46d57edc50f17!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1691581631054!5m2!1sen!2s"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
