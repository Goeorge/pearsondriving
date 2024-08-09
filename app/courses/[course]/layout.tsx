import CourseHeader from '@/components/courseheader'
import CoursePage from '@/components/coursecontent';
import CourseTestimonials from '@/components/coursetestimonial'
import Stats from '@/components/stats';
import CourseFormCTA from '@/components/courseformcta';

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <>
      <CourseHeader />
        {children}
      <Stats />
      <CourseFormCTA />   
    </>
    );
  }