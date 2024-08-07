// components/CourseHeader.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CourseHeader: React.FC = () => {
  return (
    <div className="relative h-64 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/course/back.jpeg')` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">Courses</h1>
        <div className="flex items-center mt-2 space-x-2 text-lg">
          <Link href="/" className="text-white hover:text-orange">Home</Link>
          <span>&gt;</span>
          <span className="text-orange">Courses</span>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
