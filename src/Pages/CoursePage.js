import {CoursePageHeader} from '../components/Courses/CoursePageHeader';
import { TrendingCourses } from '../components/Courses/TrendingCourses';
import { AllCourses } from '../components/styles/Courses/AllCourses';
const CoursePage = () => {
  return (
    <>
    <CoursePageHeader/>
      <AllCourses />
    </>
  );
};

export default CoursePage;
