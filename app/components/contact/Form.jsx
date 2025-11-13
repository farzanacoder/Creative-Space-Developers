import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '+880 1711-123456',
    projectDetails: 'Tell us about your project...'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-primary mb-6 ">
        Send Us a Message
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-secondary mb-1 ">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-3 py-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D1D5DC] focus:border-[#D1D5DC]  bg-[#F3F3F5]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent bg-[#F3F3F5]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent bg-[#F3F3F5]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary mb-1">
            Project Details
          </label>
          <textarea
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent resize-vertical bg-[#F3F3F5]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-brand text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}