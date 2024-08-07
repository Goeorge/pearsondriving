// app/page.tsx
import React from 'react';
import CourseHeader from '@/components/courseheader'
import CourseCatalog from '@/components/coursecatalog';

const CoursesCatalog: React.FC = () => {
  return (
    <div>
      <CourseHeader />
      <CourseCatalog />
      {/* Rest of your page content */}
    </div>
  );
};

export default CoursesCatalog;
