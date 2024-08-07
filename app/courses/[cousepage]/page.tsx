// app/page.tsx
import React from 'react';
import CourseHeader from '@/components/courseheader'
import CoursePage from '@/components/coursepage';
import CourseTestimonials from '@/components/coursetestimonial'
import Stats from '@/components/stats';
import CourseFormCTA from '@/components/courseformcta';

const CoursesPage: React.FC = () => {
  return (
    <div>
      <CourseHeader />
      <CoursePage />
      <Stats />
      {/* <CourseTestimonials /> */}
      <CourseFormCTA />
      {/* Rest of your page content */}
    </div>
  );
};

export default CoursesPage;
