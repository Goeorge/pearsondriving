import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactsCTA: React.FC = () => {
  return (
    <section className="bg-white py-16 " id="contacts">
      <div className="flex flex-col lg:flex-row items-center justify-evenly px-16">
        <div className="flex items-left lg:items-center justify-start space-x-10 md:space-x-20 lg:space-x-8 mb-4 lg:justify-evenly  md:mb-0">
          <div className="flex items-left justify-center w-16 h-16 bg-white rounded-md ">
            <FaWhatsapp className="text-green text-3xl" fill="green" size={40}/>
          </div>
          <div className="flex flex-col items-left justify-center">
            <p className="text-gray-600">WhatsApp us any time:</p>
            <a href="https://wa.me/254700123456" className="text-lg font-semibold text-orange">0746834612</a>
          </div>
        </div>
        <div className="flex items-left lg:items-center justify-center space-x-10 md:space-x-20 lg:space-x-8 mb-4 md:mb-0">
          <div className="flex items-left justify-center w-16 h-16 bg-white rounded-md ">
            <FaPhoneAlt className="text-green text-3xl " size={40} fill="green"/>
          </div>
          <div className="flex flex-col items-left" >
            <p className="text-gray-600">Call us any time:</p>
            <a href="tel:+254700123456" className="text-lg font-semibold text-orange">0746834612</a>
          </div>
        </div>
        <div className="flex items-center justify-start space-x-10 md:space-x-20 lg:space-x-8">
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-md ">
            <FaEnvelope className="text-green text-3xl" size={40} fill="green"/>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-600">Email us any time:</p>
            <a href="mailto:example@example.com" className="text-lg font-semibold text-orange">info@pearsondrivingschool.co.ke</a>
            <a href="mailto:example@example.com" className="text-lg font-semibold text-orange">pearsondrivingschool@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsCTA;
