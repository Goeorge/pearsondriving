import { FC } from 'react';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

const AboutUs: FC = () => {
  return (
    <section className="bg-white p-6" id='aboutus'>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <Image src="/pearson-driving-school-office-ourdoor-look.png" className="rounded-lg" alt="Driving School" width={500} height={500} />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-10">
          <div className="mb-4 flex items-center">
            <span className="font-semibold text-lg text-green mr-2">About Us</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-orange mb-4">
            Welcome To Our Driving School & Learn To Drive
          </h1>
          <p className="text-gray-600 mb-6">
          Located in the heart of Nyeri Town, Kenya, Pearson driving school is committed to providing top-notch driving education to our community. We pride ourselves on our comprehensive and personalized approach to teaching, ensuring that each of our students becomes a confident and responsible driver.
          </p>
          <ul className="mb-6 space-y-4">
            <li className="flex items-start">
              <FaCheckCircle className="text-xl text-green mr-2" />
              Experienced Instructors: Our team of certified and experienced instructors is dedicated to providing patient and thorough training. They are well-versed in the latest road safety regulations and driving techniques.
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-xl text-green mr-2" />
              Comprehensive Courses: We offer a wide range of courses tailored to meet the needs of beginners, intermediate drivers, and those looking to refresh their skills. From theory classes to practical driving lessons, we cover all aspects of driving.
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-xl text-green mr-2" />
              Flexible Scheduling: We understand that our students have diverse schedules. That’s why we offer flexible lesson timings, including evenings and weekends, to accommodate everyone.
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-xl text-green mr-2" />
              Affordable Rates: Quality driving education doesn’t have to be expensive. We provide competitive pricing and flexible payment plans to make our courses accessible to everyone.
            </li>
          </ul>
          {/* <Link href="/about-us" className="inline-block bg-green text-white py-2 px-4 rounded hover:bg-orange transition duration-300 no-underline">
            ABOUT MORE →
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
