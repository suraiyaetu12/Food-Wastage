// import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import bgFAQ from "./../../assets/bgContact.jpg";
import React, { useState } from "react";
import ScrollBar from "../Shared/ScrollBar/ScrollBar";
import ScrollToTopButton from "../Shared/ScrollToTopButton/ScrollToTopButton";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can send the form data here via API or EmailJS
    // Simulate success
    setIsSubmitted(true);

    // Optionally reset the form
    e.target.reset();
  };

  return (
    <div
      className="w-full h-full bg-no-repeat bg-cover overflow-x-hidden"
      style={{
        background: `url(${bgFAQ})`,
        backgroundSize: "cover",
      }}
    >
      {/* Scroll Progress Bar with green-yellow gradient */}
      <ScrollBar />
      <div className="max-w-4xl mx-auto px-4 py-12 text-black">
      <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-yellow-500">
            Have questions or want to contribute? Reach out to us!
          </h2>
        <p className="text-lg text-gray-500 mt-2">
          We're here to help. Whether you're donating food or have questions about our mission, reach out!
        </p>
      </div>

      {/* Contact Info and Form */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Info */}
        <div className="space-y-4 content-center">
          <div className="flex items-center gap-4">
            <span className="text-primary">
              <i className="fa-solid fa-location-dot text-2xl"></i>
            </span>
            <p>123 Community Street, Green City, Earth</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-primary">
              <i className="fa-solid fa-phone text-2xl"></i>
            </span>
            <p>+1 (555) 123-4567</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-primary">
              <i className="fa-solid fa-envelope text-2xl"></i>
            </span>
            <p>support@foodrescue.org</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="card bg-base-100 shadow-md p-6 space-y-4"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered bg-slate-300 w-11/12"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered bg-slate-300  w-11/12"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered bg-slate-300  w-11/12"
              placeholder="Your message..."
              rows={4}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary  w-11/12 mx-auto">
            Send Message
          </button>
        </form>
      </div>

      {/* Success Modal */}
      {isSubmitted && (
        <dialog id="success_modal" className="modal modal-open">
          <div className="modal-box text-center">
            <h3 className="font-bold text-lg text-success">Thank you!</h3>
            <p className="py-4 text-white">Your message has been sent successfully. We'll get back to you soon.</p>
            <div className="modal-action">
              <button
                className="btn btn-success"
                onClick={() => setIsSubmitted(false)}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
    {/* Back to Top */}
    <ScrollToTopButton></ScrollToTopButton>
    </div>
  );
};

export default Contact;
