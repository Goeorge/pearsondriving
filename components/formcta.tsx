'use client'

import React, { useState, useEffect } from "react";
import { sendEmail } from "@/lib/email";
import { FaCheckCircle } from "react-icons/fa";

const Formcta: React.FC = () => {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    course: '',
    message: '',
    // subscribe: false,
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    number: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

   // Handle input change for select fields
   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({
  //     ...formData,
  //     subscribe: e.target.checked,
  //   });
  // };

   // Basic form validation function
   const validateForm = () => {
    let formIsValid = true;

    let newErrors = {
      name: '',
      email: '',
      number: '',
      course: '',
      message: '',
      // subscribe: false,
    };

    // Validate firstName
    if (!formData.name || formData.name.length === 0) {
      formIsValid = false;
      newErrors.name = "First name is required";
    }

    // Validate phoneNumber (basic length check)
    if (!formData.number || formData.number.length < 10 || !/^\d+$/.test(formData.number)) {
      formIsValid = false;
      newErrors.number = "Phone number must be at least 10 digits";
    }

    // Validate email (simple regex check)
    const emailPattern = /\S+@\S+\.\S+/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      formIsValid = false;
      newErrors.email = "Valid email is required";
    }


    setErrors(newErrors);
    return formIsValid;
  };

 const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission (for testing)
    console.log(formData); // Print formData to the console

    // Validate form before proceeding
    if (!validateForm()) {
      alert("Please fix the errors before submitting");
      return;
    }

    try {
      // Send emails to the sales team and the customer
      // Send email to sales@phonex.co.ke
      await sendEmail(
        "info@pearsondrivingschool.co.ke",
        "New Lead from Pearson Driving Website",
        `
        <h3>Customer Details</h3>
        <p><strong>First Name:</strong> ${formData.name}</p>
        <p><strong>Last Name:</strong> ${formData.number}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Course of Interest:</strong> ${formData.course}</p>
        <p><strong>Message:</strong> ${formData.message}</p> 
      `
      );

      // Optionally, you can clear the form after submission
      setFormData({
        name: '',
        email: '',
        number: '',
        course: '',
        message: '',
        // subscribe: false,
      });

      // Trigger a toast notification
      // toast.success('Order placed successfully!');
      // alert("Email sent successfully!");

      // set up next step
      setStep(2); // Move to the next step
    } catch (error) {
      alert("There was an error sending the email. Please try again.");
    }
    
  };

  return (
    <section className="py-16 bg-white" id='formcta'>
      <div className="container  mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <iframe className="w-full h-[450px] rounded-lg shadow-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4774.144869033366!2d36.95491119918486!3d-0.42268756519332046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18285e01e5e5c87f%3A0x69eb61749c1efeb1!2sOld%20Batian%20House%2C%20Nyeri!5e1!3m2!1sen!2ske!4v1733131780225!5m2!1sen!2ske" allowFullScreen={false} loading="lazy"></iframe>
        </div>
        <div className="md:w-1/2 w-full md:pl-10">
        {step === 1 && (
              <div>
              <h2 className="text-3xl font-bold text-orange mb-6">Get A <span className="text-green">Free</span> Consultation</h2>
              <p className="text-gray-600 mb-6">Car driver instructor must also have good communication skills, patience, confidence and teaching skills.</p>
              <form className="grid grid-cols-1 gap-4">
                <div className="flex gap-4">
                  <div className="w-full">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                      
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      placeholder="Your Email"
                      className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-full">
                    <label htmlFor="number" className="block text-sm font-medium text-gray-700">Your Number *</label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      value={formData.number}
                      placeholder="Your Number"
                      className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700">Select Course *</label>
                    <select
                      id="course"
                      name="course"
                      title="course"
                      value={formData.course}
                      onChange={handleSelectChange}
                      className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      
                    >
                      <option value="Defensive Driving">Defensive Driving</option>
                      <option value="Adult In Car Lessons">Adult In Car Lessons</option>
                      <option value="Truck Driving">Truck Driving</option>
                      <option value="Initial Driving Lesson">Initial Driving Lesson</option>
                      <option value="Woman Education">Woman Education</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                  <textarea
                    id="message"
                    placeholder="Your Message"
                    name="message"
              
                    rows={4}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  onClick={handleFormSubmit}
                  className="w-full bg-green text-white px-4 py-2 rounded-md hover:bg-orange transition duration-300"
                >
                  SUBMIT NOW
                </button>
              </form>
              </div>
          )}
          
        {step === 2 && (
              <div className="flex flex-col items-center justify-center">
                {/* Success Icon */}
                <div className="w-24 h-24 bg-green rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
            
                  {/* Success Message */}
                  <h1 className="text-3xl font-bold text-orange mb-2">Message sent Successfully</h1>
                  {/* <p className="text-gray-400 text-center mb-6">
                    Our team will call you so as to arrange the installation date.
                  </p> */}
              </div>
        )}
      </div>
      </div>
    </section>
  );
};

export default Formcta;
