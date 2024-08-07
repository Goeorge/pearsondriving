import React from 'react';

const Formcta: React.FC = () => {
  return (
    <section className="py-10" id='formcta'>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center">       
        <div className="md:w-2/3 w-full md:pl-10">
          <h2 className="text-3xl font-bold text-orange mb-6 text-center ">Get A <span className="text-green">Free</span> Consultation</h2>
          <p className="text-gray-600 mb-6">Car driver instructor must also have good communication skills, patience, confidence and teaching skills.</p>
          <form className="grid grid-cols-1 gap-4">
            <div className="flex gap-4">
              <div className="w-full">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name *</label>
                <input
                  type="text"
                  id="name"
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
                  placeholder="Your Email"
                  className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-full">
                <label htmlFor="number" className="block text-sm font-medium text-gray-700">Your Number *</label>
                <input
                  type="text"
                  id="number"
                  placeholder="Your Number"
                  className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="course" className="block text-sm font-medium text-gray-700">Select Course *</label>
                <select
                  id="course"
                  className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
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
                rows={4}
                className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green text-white px-4 py-2 rounded-md hover:bg-orange transition duration-300"
            >
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Formcta;
