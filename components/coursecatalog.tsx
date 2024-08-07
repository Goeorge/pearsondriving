// components/CourseCatalog.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// interface Course {
//   title: string;
//   description: string;
//   price: string;
//   level: string;
//   instructor: string;
//   duration: string;
//   imageUrl: string;
// }

// const courses: Course[] = [
//   {
//     title: 'Defensive Driving',
//     description: 'Defensive driving is a set of driving techniques that help minimize the risks of accidents and improve overall safety.',
//     price: '$80',
//     level: 'Intermediate',
//     instructor: 'David Watt',
//     duration: '6 Weeks',
//     imageUrl: '/path/to/defensive-driving.jpg'
//   },
//   {
//     title: 'Professional Driving',
//     description: 'Professional driving involves driving for a living, such as delivery drivers, taxi drivers, and truck drivers it requires.',
//     price: '$150',
//     level: 'Intermediate',
//     instructor: 'David Watt',
//     duration: '6 Weeks',
//     imageUrl: '/path/to/professional-driving.jpg'
//   },
//   {
//     title: 'Truck Driving',
//     description: 'Truck driving involves operating large commercial vehicles, such as semi-trucks, tractor-trailers, and delivery trucks.',
//     price: '$90',
//     level: 'Intermediate',
//     instructor: 'David Watt',
//     duration: '6 Weeks',
//     imageUrl: '/path/to/truck-driving.jpg'
//   },
//   {
//     title: 'Traffic Science',
//     description: 'The Traffic Science course covers the principles and practices of traffic engineering, including traffic flow theory.',
//     price: '$70',
//     level: 'Intermediate',
//     instructor: 'David Watt',
//     duration: '6 Weeks',
//     imageUrl: '/path/to/traffic-science.jpg'
//   }
// ];

// const CourseCatalog: React.FC = () => {
//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-semibold mb-4">Our Trending Courses</h2>
//           <h1 className="text-6xl font-bold">Course For Driving With Confidence</h1>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {courses.map((course, index) => (
//             <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <Image src={course.imageUrl} alt={course.title} width={500} height={300} className="w-full h-48 object-cover" />
//               <div className="p-6">
//                 <div className="flex justify-between items-center mb-4">
//                   <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-lg">{course.price}</span>
//                   <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-lg">{course.level}</span>
//                 </div>
//                 <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
//                 <p className="text-gray-700 mb-4">{course.description}</p>
//                 <div className="flex items-center mb-4">
//                   <Image src="/path/to/instructor.jpg" alt={course.instructor} width={40} height={40} className="rounded-full" />
//                   <div className="ml-2">
//                     <p className="text-gray-800">{course.instructor}</p>
//                     <p className="text-gray-600 text-sm">{course.duration}</p>
//                   </div>
//                 </div>
//                 <Link href="#" className="text-blue-500 hover:text-blue-700 font-semibold">
//                   Read More &rarr;
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// components/CourseCatalog.tsx

// components/CourseCatalog.tsx

interface Course {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  theoryHours: string;
  practicalHours: string;
}

const courses: Course[] = [
  {
    title: 'Extended Driving Course',
    description: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil pain...',
    price: 'Ksh.6,400',
    imageUrl: '/course/course_5_1.png', // Update this path
    theoryHours: '04 Hours',
    practicalHours: '16 Hours'
  },
  {
    title: 'Standard Driving Course',
    description: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil pain...',
    price: 'Ksh.10,000',
    imageUrl: '/course/course_5_2.png', // Update this path
    theoryHours: '04 Hours',
    practicalHours: '16 Hours'
  },
  {
    title: 'Standard Driving Course',
    description: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil pain...',
    price: 'Ksh.9,000',
    imageUrl: '/course/course_5_3.png', // Update this path
    theoryHours: '04 Hours',
    practicalHours: '16 Hours'
  },
  {
    title: 'Standard Driving Course',
    description: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil pain...',
    price: 'Ksh.8,500',
    imageUrl: '/course/course_5_4.png', // Update this path
    theoryHours: '04 Hours',
    practicalHours: '16 Hours'
  }
];

const CourseCatalog: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-orange font-semibold mb-4">Courses to Drive with Confidence</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 bg-white shadow-lg rounded-md overflow-hidden p-8">
              <div className="relative md:w-1/2">
                <Image src={course.imageUrl} alt={course.title} width={500} height={800} className="w-full h-96 object-cover" />
                <div className="absolute top-4 left-4 bg-orange text-white px-3 py-1 text-lg font-bold rounded break-after-all">
                  FROM <br/><span className="text-2xl">{course.price}</span>
                </div>
              </div>
              <div className="p-6 px-2 md:w-1/2 md:px-20">
                <h5 className='text-gray-400 font-semibold text-lg'>OUR COURSES</h5>
                <h3 className="text-4xl font-semibold mb-4 text-orange">{course.title}</h3>
                <p className="text-gray-700 mb-4">{course.description}</p>
                <div className="flex items-center mb-8 mt-8">
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center">
                      <Image src="/icon/icon-1.png" alt="Theory Icon" width={54} height={54} /> {/* Update this path */}
                      <div className='flex flex-col'>
                        <span className=" text-base">THEORY SESSION</span>
                        <span className="text-sm">{course.theoryHours}</span>
                      </div> 
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                  <span className="flex items-center">
                      <Image src="/icon/icon-1.png" alt="Theory Icon" width={54} height={54} /> {/* Update this path */}
                      <div className='flex flex-col'>
                        <span className=" text-base">PRACTICAL SESSION</span>
                        <span className="text-sm">{course.practicalHours}</span>
                      </div> 
                    </span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between">      
                <Link href='/courses/page' className="w-full bg-green text-white text-center px-4 py-2 rounded hover:bg-orange transition duration-300 no-underline">
                  LEARN MORE →
                </Link>
                <Link href='/courses/page' className="w-full bg-green text-white text-center px-4 py-2 rounded hover:bg-orange transition duration-300 no-underline">
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
