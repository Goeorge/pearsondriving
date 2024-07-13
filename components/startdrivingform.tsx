import React from 'react';

const StartDrivingForm: React.FC = () => {
  return (
    <section className="bg-gray-900 py-10">
      <div className="container mx-auto px-6">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Start Your Driving Courses</h2>
          <form className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-1">
              <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name..."
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <p className="text-red-500 text-xs mt-1">Please fill out this field.</p>
            </div>
            <div className="md:col-span-1">
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                Your Email *
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email..."
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <p className="text-red-500 text-xs mt-1">Please fill out this field.</p>
            </div>
            <div className="md:col-span-1">
              <label htmlFor="number" className="block text-sm font-medium text-white mb-1">
                Your Number *
              </label>
              <input
                type="text"
                id="number"
                placeholder="Number..."
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <p className="text-red-500 text-xs mt-1">Please fill out this field.</p>
            </div>
            <div className="md:col-span-1">
              <label htmlFor="course" className="block text-sm font-medium text-white mb-1">
                Choose A Course *
              </label>
              <select
                id="course"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              >
                <option value="Defensive Driving">Defensive Driving</option>
                <option value="Adult In Car Lessons">Adult In Car Lessons</option>
                <option value="Truck Driving">Truck Driving</option>
                <option value="Initial Driving Lesson">Initial Driving Lesson</option>
                <option value="Woman Education">Woman Education</option>
              </select>
              <p className="text-red-500 text-xs mt-1">Please fill out this field.</p>
            </div>
            <div className="md:col-span-1 flex items-end">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                START NOW →
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default StartDrivingForm;
