import Background from '../components/background';
import {CoursePageHeader} from '../components/Courses/CoursePageHeader';
import { TrendingCourses } from '../components/Courses/TrendingCourses';
import { AllCourses } from '../components/styles/Courses/AllCourses';
const CoursePage = () => {
  return (
    <>
     <Background/>
    <CoursePageHeader/>
      <AllCourses />
    </>
  );
};

export default CoursePage;
