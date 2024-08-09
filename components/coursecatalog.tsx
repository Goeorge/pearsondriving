// components/CourseCatalog.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGraduationCap, FaClock } from 'react-icons/fa';

interface Course {
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

const courses: Course[] = [
  {
    id: 'cars',
    title: 'Class B1/B2 Driving course (Cars)',
    description: 'Category B1/B2 Driving Course. This category is for B1 (Light Passenger Car) and B2 (Automatic Light Vehicle Professional)',
    price: 'Ksh.10,500',
    imageUrl: '/course/course_5_1.png', // Update this path
    theoryHours: '04 Hours',
    practicalHours: '16 Hours',
    duration: '5 Weeks',
    level: 'Intermediate',

  },
  {
    id: 'vans',
    title: 'Class B3 Driving course (Vans)',
    description: 'Category B3 Driving Course. In this course, you learn driving as a profession and be a taxi driver or a chauffer (not more than 7 passengers).',
    price: 'Ksh.8,500',
    imageUrl: '/course/course_5_2.png', // Update this path
    theoryHours: '04 Hours',
    practicalHours: '16 Hours',
    duration: '5 Weeks',
    level: 'Intermediate',
  },
  {
    id: 'bikes',
    title: 'Class A2 Driving Course (Motorcycle)',
    description: 'Category A2 Driving Course. This category is for A2 (Motorcycle not exceeding 400cc).',
    price: 'Ksh.8,500',
    imageUrl: '/course/course_5_3.png', // Update this path
    theoryHours: '04 Hours',
    practicalHours: '16 Hours',
    duration: '2 Weeks',
    level: 'Intermediate',
  },
  {
    id: 'defensive',
    title: 'Defensive Driving',
    description: 'Defensive Driving Course is made to teach you driving when the vehicle is out of control.',
    price: 'Ksh.8,500',
    imageUrl: '/course/course_5_4.png', // Update this path
    theoryHours: '04 Hours',
    practicalHours: '16 Hours',
    duration: '5 Weeks',
    level: 'Intermediate',
  }
];

const CourseCatalog: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-orange font-semibold mb-4">Courses to Drive with Confidence</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-16">
          {courses.map((course, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-4 bg-white shadow-sm rounded-md overflow-hidden p-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="relative md:w-1/2 p-6">
                <Image src={course.imageUrl} alt={course.title} width={500} height={900} className="w-full h-96 object-cover" />
                <div className="absolute top-4 left-4 bg-orange text-white px-3 py-1 text-lg font-bold rounded break-after-all">
                  FROM <br/><span className="text-2xl">{course.price}</span>
                </div>
              </div>
              <div className="p-6 px-2 md:w-1/2 md:px-32">
                <h5 className='text-gray-400 font-semibold text-lg'>OUR COURSES</h5>
                <h3 className="text-4xl font-semibold mb-4 text-orange">{course.title}</h3>
                <p className="text-gray-700 mb-4">{course.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-8 mt-8 gap-4 text-gray-700">
                  <div className="flex items-center space-x-1">
                    <span className="flex items-center gap-4">
                      <Image src="/icon/icon-1.png" alt="Theory Icon" width={48} height={48} /> {/* Update this path */}
                      <div className='flex flex-col'>
                        <span className=" text-base">THEORY SESSION</span>
                        <span className="text-sm">{course.theoryHours}</span>
                      </div> 
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                  <span className="flex items-center gap-4">
                      <Image src="/icon/icon-4.png" alt="Theory Icon" width={48} height={48} /> {/* Update this path */}
                      <div className='flex flex-col'>
                        <span className=" text-base">PRACTICAL SESSION</span>
                        <span className="text-sm">{course.practicalHours}</span>
                      </div> 
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="flex items-center gap-4">
                      <Image src="/icon/icon-3.png" alt="Theory Icon" width={48} height={48} />
                      {/* <FaClock className="text-orange" size={45}/> */}
                      <div className='flex flex-col'>
                        <span className=" text-base">DURATION</span>
                        <span className="text-sm">{course.duration}</span>
                      </div> 
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="flex items-center gap-4">
                      <Image src="/icon/icon-2.png" alt="Theory Icon" width={48} height={48} />
                      {/* <FaGraduationCap className="text-orange mr-2" size={55}/> Update this path */}
                      <div className='flex flex-col'>
                        <span className=" text-base">LEVEL</span>
                        <span className="text-sm">{course.level}</span>
                      </div> 
                    </span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between">      
                <Link href={`/courses/${course.id}`} className="w-full bg-green text-white text-center px-4 py-2 rounded hover:bg-orange transition duration-300 no-underline">
                  LEARN MORE →
                </Link>
                <Link href='/enroll' className="w-full bg-green text-white text-center px-4 py-2 rounded hover:bg-orange transition duration-300 no-underline">
                  ENROLL NOW →
                </Link>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCatalog;
