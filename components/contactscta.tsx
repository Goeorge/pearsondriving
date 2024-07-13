import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactsCTA: React.FC = () => {
  return (
    <section className="bg-blue-50 py-8 border border-orange ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly px-24">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <div className="flex items-center justify-center w-20 h-20 bg-white rounded-md shadow-md">
            <FaWhatsapp className="text-green text-3xl" fill="green" size={40}/>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-600">WhatsApp us any time:</p>
            <p className="text-xl font-semibold text-orange">+(254)-456-7890</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <div className="flex items-center justify-center w-20 h-20 bg-white rounded-md shadow-md">
            <FaPhoneAlt className="text-green text-3xl " size={40} fill="green"/>
          </div>
          <div>
            <p className="text-gray-600">Call us any time:</p>
            <p className="text-xl font-semibold text-orange">+(254)-556-06979</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center w-20 h-20 bg-white rounded-md shadow-md">
            <FaEnvelope className="text-blue-600 text-3xl" size={40} fill="green"/>
          </div>
          <div>
            <p className="text-gray-600">Email us any time:</p>
            <p className="text-xl font-semibold text-orange">info@dride.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsCTA;
