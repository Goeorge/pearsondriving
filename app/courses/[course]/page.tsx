// app/page.tsx
'use client'

import React from 'react';
import { useParams } from 'next/navigation';
import CourseContent from '@/components/coursecontent';

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

const CoursePage: React.FC = () => {
  const params = useParams();
  const {course} = params;

  let content;
  let coursecontent;

  //Debug
  console.log(`Course ${course}`);

  switch (course){
    case 'cars':
      content = <CourseContent coursecontent={courses[0]}/>
      break;
    case 'vans':
      content = <CourseContent coursecontent={courses[1]}/>
      break;
    case 'bikes':
      content = <CourseContent coursecontent={courses[2]}/>
      break;
    case 'defensive':
      content = <CourseContent coursecontent={courses[3]}/>
      break;
    default:
      content = <div>Default content or 404 page</div>;
      break;
  }
  return (
    <div>
      {content}
    </div>
  );
};

export default CoursePage;
