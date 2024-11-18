'use client';
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  // Replace '/api/send-email' with the new App Router path
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
    
        const data = await response.json();
    
        if (response.ok) {
            setSuccessMessage('Thank you for reaching out! I will get back to you soon.');
            setFormData({ name: '', email: '', message: '' });
            setErrorMessage('');
        } else {
            setErrorMessage(data.message || 'Oops, something went wrong.');
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
        setErrorMessage('Oops, something went wrong. Please try again.');
        } finally {
        setIsSubmitting(false);
        }
    };
  

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center pt-14">
      <h1 className="text-4xl text-center py-10">Contact Me</h1>

      <div className="max-w-2xl w-full p-6 bg-gray-900 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg text-gray-400">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700"
              required
            />
          </div>
          <div>
            <label className="block text-lg text-gray-400">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700"
              required
            />
          </div>
          <div>
            <label className="block text-lg text-gray-400">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700"
              required
            />
          </div>
          {successMessage && (
            <div className="text-green-500 text-center">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="text-red-500 text-center">{errorMessage}</div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-3 rounded-lg ${
              isSubmitting ? 'bg-gray-600' : 'bg-blue-600'
            } text-white`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
