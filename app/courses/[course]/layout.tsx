import CourseHeader from '@/components/courseheader'
import CoursePage from '@/components/coursecontent';
import CourseTestimonials from '@/components/coursetestimonial'


export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <>
      <CourseHeader />
      <div>
      {children}
      </div>
    </>
    );
  }