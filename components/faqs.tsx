"use client"

import React, { useState } from 'react';
import Image from 'next/image'

const faqs = [
  {
    question: 'How many hours of lessons do you need to pass?',
    answer: 'My driving instructor was fantastic; calm, patient and encouraging! I would recommend her to anybody looking to start driving lessons. Respect to you for making this dream possible into reality.',
  },
  {
    question: 'Is it better to have 1 or 2 hour driving lessons?',
    answer: 'It depends on your learning style and availability. Some students find that longer sessions help them retain information better, while others prefer shorter, more frequent lessons.',
  },
  {
    question: 'How many driving lessons do I need before test?',
    answer: 'The number of lessons required can vary depending on your learning pace, previous driving experience, and confidence level. On average, most learners need around 45 hours of lessons.',
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-black-500 py-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 p-6">
          <h2 className="text-green text-lg font-semibold mb-2">Frequently Asked Have Any Question?</h2>
          <h1 className="text-3xl text-orange lg:text-4xl font-bold mb-4">Find Answers In Our List Of Frequently Asked Questions</h1>
          <p className="mb-6">
            Airport driving school were excellent from start to finish in helping me pass my bus test today. My instructor Valise was great, patient and explained everything very well from the first lessons to the last one.
          </p>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-white font-semibold bg-green p-3 rounded-lg flex justify-between items-center focus:outline-none"
              >
                <span>{faq.question}</span>
                <span>{activeIndex === index ? '-' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="mt-2 p-4 bg-white rounded-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="lg:w-1/2 p-6">
          <Image src="/course/course_5_4.png" alt="FAQ" className="rounded-lg shadow-lg" width={600} height={600} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
