import React from 'react';
import Image from 'next/image';
import { FaRegCheckCircle } from 'react-icons/fa';
import { VscChecklist } from "react-icons/vsc";

const steps = [
  {
    number: '01',
    title: 'Select Your Plan',
    description: 'Before starting any course please select a plan as your requirement to achieve your goal in time.',
    icon: '/icon/process_card_1.svg',
    icon_2: <VscChecklist size={24} className="text-green" />,
  },
  {
    number: '02',
    title: 'Consultation',
    description: 'If you face any problem to start your program our support team is always ready consult with them.',
    icon: '/icon/process_card_2.svg',
  },
  {
    number: '03',
    title: 'Buy Your Courses',
    description: 'Once you are ready to start the course please purchase your chosen course via online or physically.',
    icon: '/icon/process_card_3.svg',
  },
  {
    number: '04',
    title: 'Start Your Training',
    description: 'Finally when you finished every process then it is time to start your training with us regularly.',
    icon: '/icon/process_card_4.svg',
  },
];

const SignUpProcess: React.FC = () => {
  return (
    <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `url('/hero/signup_bg.webp')` }}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
      <div className="md:w-1/2 p-6 flex items-center justify-center">
        {/* <Image src="/hero/signup_bg.webp" alt="Sign Up Process" width={500} height={500} className="rounded-lg shadow-lg" /> */}
      </div>
      <div className="md:w-1/2 p-6">
        <div className="mb-4">
          <h2 className="text-white text-lg mb-2">Our Work Process</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-orange mb-4">Start The Pearson Learning Process</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center justify-center w-10 h-10 bg-green text-white rounded-full mr-4">
                  <span className="text-lg font-bold">{step.number}</span>
                </div>
                <Image src={step.icon} alt={step.title} width={40} height={40}/>
              </div>
              <h3 className="text-xl font-semibold text-orange mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default SignUpProcess;
