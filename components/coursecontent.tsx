// components/CoursePage.tsx
'use client'

import React from "react";
import Image from "next/image";

type Course = {
  id:string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  theoryHours: string;
  practicalHours: string;
  duration: string;
  level:string;
}

type CourseContentProps = {
  coursecontent:Course;
}

const CourseContent: React.FC<CourseContentProps> = ({coursecontent}) => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
      {/* <div className="relative md:w-1/2 p-6">
                <Image src={coursecontent.imageUrl} alt={coursecontent.title} width={900} height={900} className="w-full h-96 object-cover" />
                <div className="absolute top-4 left-4 bg-orange text-white px-3 py-1 text-lg font-bold rounded break-after-all">
                  FROM <br/><span className="text-2xl">{coursecontent.price}</span>
                </div>
          </div> */}
        <div className="flex flex-col lg:flex-row justify-between items-start md:px-40">
        
          <div className="lg:w-2/4">
            <h2 className="text-4xl font-bold mb-6 text-orange">{coursecontent.title}</h2>
            <p className="text-gray-600 mb-6">
              {coursecontent.description}
            </p>
            <p className="text-gray-600 mb-6">
              Avoids pleasure itself because it pleasure but those do not know
              how to pursue pleasure but because those who know how to pursue
              pleasures rationally encounter consequences that are extremely.
            </p>
            <button className="bg-orange text-white py-3 px-6 rounded">
              OFFER & PACKAGE
            </button>
          </div>
          <div className="lg:w-2/4 mt-12 lg:mt-0 lg:pl-12">
            <div className="flex flex-col">
             <div>
             <div className="bg-orange text-white p-4 rounded-t-lg">
                <div className="font-bold text-lg">FROM</div>
                <div className="text-5xl font-extrabold">{coursecontent.price}</div>
                {/* <div className="text-lg">Per Person</div> */}
              </div>
             </div>
              <div className="flex flex-col items-start justify-between gap-2 p-2 px-4 py-6">
                <div className="text-xl font-semibold mb-2">Excellent</div>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-lg font-semibold">
                    4.5
                  </span>
                  <span className="text-gray-500 ml-2">(1,200 reviews)</span>
                </div>
                <div className="text-gray-600 mb-2"> Trust Score 4.5 (Based on 1,200 reviews) </div>
                <div className="flex flex-col items-start mb-4">
                  <span className="text-yellow-400 text-2xl mb-2">
                    ⭐️⭐️⭐️⭐️⭐️
                  </span>
                  <span className="text-green-500 font-semibold underline cursor-pointer">
                    READ REVIEWS
                  </span>
                </div>
              </div>
            </div>
           
          </div>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:px-40">
         <div className="bg-green text-white p-6 rounded">
             <div className="flex items-center mb-4">
               <Image src="/icon/icon-1.png" alt="Theory Icon" width={24} height={24} />
              <span className="ml-2">THEORY SESSION</span>
              <span className="ml-auto">{coursecontent.theoryHours}</span>
             </div>
            <div className="flex items-center">
              <Image src="/icon/icon-2.png" alt="Practical Icon" width={24} height={24} />
               <span className="ml-2">PRACTICAL SESSION</span>
               <span className="ml-auto">{coursecontent.practicalHours}</span>
             </div>
           </div>
           <div className="bg-green text-white p-6 rounded">
             <div className="flex items-center mb-4">
               <Image src="/icon/icon-3.png" alt="Examination Icon" width={24} height={24} />
               <span className="ml-2">EXAMINATION</span>
               <span className="ml-auto">20 Mins+ 30 Mins</span>
             </div>
             <div className="flex items-center">
               <Image src="/icon/icon-4.png" alt="Certificate Icon" width={24} height={24} />
               <span className="ml-2">CERTIFICATE</span>
               <span className="ml-auto">Course Completion</span>
             </div>
           </div>
         </div>
      </div>
    </section>
  );
};

export default CourseContent;
