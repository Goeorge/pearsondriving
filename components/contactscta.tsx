import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactsCTA: React.FC = () => {
  return (
    <section className="bg-blue-50 py-8 border border-orange " id="contacts">
      <div className="flex flex-col lg:flex-row items-center justify-evenly px-16">
        <div className="flex items-center justify-start space-x-10 md:space-x-20 lg:space-x-8 mb-4 lg:justify-evenly  md:mb-0">
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-md shadow-md">
            <FaWhatsapp className="text-green text-3xl" fill="green" size={40}/>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-600">WhatsApp us any time:</p>
            <p className="text-lg font-semibold text-orange">+(254)-456-78907</p>
          </div>
        </div>
        <div className="flex items-center justify-start space-x-10 md:space-x-20 lg:space-x-8 mb-4 md:mb-0">
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-md shadow-md">
            <FaPhoneAlt className="text-green text-3xl " size={40} fill="green"/>
          </div>
          <div>
            <p className="text-gray-600">Call us any time:</p>
            <p className="text-lg font-semibold text-orange">+(254)-556-06979</p>
          </div>
        </div>
        <div className="flex items-center justify-start space-x-10 md:space-x-20 lg:space-x-8">
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-md shadow-md">
            <FaEnvelope className="text-green text-3xl" size={40} fill="green"/>
          </div>
          <div>
            <p className="text-gray-600">Email us any time:</p>
            <p className="text-lg font-semibold text-orange">info@pearsondriving.co.ke</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsCTA;
