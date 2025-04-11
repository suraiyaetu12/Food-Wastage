import React, { useState } from "react";
import bgFAQ from "./../../assets/info-bg.svg";
import ScrollBar from "../Shared/ScrollBar/ScrollBar";
import ScrollToTopButton from "../Shared/ScrollToTopButton/ScrollToTopButton";

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "",
    foodType: "",
    quantity: "",
    pickupLocation: "",
    contact: "",
  });
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true); // Show success modal on form submission
    setFormData({ name: "", foodType: "", quantity: "", pickupLocation: "", contact: "" });
  };

  return (
    <div
      className="w-full h-full bg-no-repeat bg-cover overflow-x-hidden py-12"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/3DFq0Dg/drew-beamer-k-UHf-MW8awp-E-unsplash-1.jpg')",
      }}
    >
      {/* Scroll Progress Bar with green-yellow gradient */}
      <ScrollBar />
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold text-green-700">Donate Food</h1>
        <p className="mt-4 text-gray-600">
          Join us in fighting food waste! Fill out the form below to donate food.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-6 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded mb-3"
            required
          />
          <input
            type="text"
            name="foodType"
            value={formData.foodType}
            onChange={handleChange}
            placeholder="Type of Food"
            className="w-full p-2 border border-gray-300 rounded mb-3"
            required
          />
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Quantity (kg/liters/pieces)"
            className="w-full p-2 border border-gray-300 rounded mb-3"
            required
          />
          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            placeholder="Pickup Location"
            className="w-full p-2 border border-gray-300 rounded mb-3"
            required
          />
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Your Contact Number"
            className="w-full p-2 border border-gray-300 rounded mb-3"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
          >
            Submit Donation
          </button>
        </form>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box text-center">
            <h3 className="font-bold text-lg text-green-600">Donation Submitted!</h3>
            <p className="py-4">Thank you for your donation! We will contact you soon.</p>
            <div className="modal-action justify-center">
              <button
                onClick={() => setShowModal(false)}
                className="btn btn-success"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Back to Top */}
      <ScrollToTopButton></ScrollToTopButton>
    </div>
  );
};

export default Donate;
