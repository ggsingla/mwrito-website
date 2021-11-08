
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ButtonSecondary } from '../styles/BasicUI/Button.styled';
import { Container } from '../styles/BasicUI/Container.styled';
import {
  BlogHeader,
  BreadCrumb,
  Text,
  Heading,
  Content,
  Image,
} from '../styles/Blogs/BlogPageHeader.styled';

import { CourseDetails } from '../styles/Courses/CoursePageHeader.styled';

export const CoursePageHeader = () => {
  return (
    <Container>
      <BlogHeader>
        <BreadCrumb>
          <li>Home</li>
          <li>Courses</li>
          <li>Top Selling</li>
        </BreadCrumb>
        <CourseContent />
      </BlogHeader>
    </Container>
  );
};

export const CourseContent = () => {

  return (
    <>
      <Content>
        <Text>
          <Heading>Full syllabus + JEE foundation course </Heading>
          <CourseDetails>
            <p>Class 8</p>
            <img
              src={
                process.env.PUBLIC_URL +
                '/assets/Difficulty Selector/Difficulty Bar E.svg'
              }
            />
          </CourseDetails>
          <ul>
            <li>
              Why code is the key to building whatever you can imagine with
              WordPress
            </li>
            <li>
              The ability to write JavaScript to add on-the-fly interactivity to
              a WordPress site
            </li>
            <li>
              The skills, knowledge and vocabulary to work professionally as a
              WordPress developer
            </li>
            <li>
              The ability to write PHP to manipulate the data of a WordPress
              site
            </li>
          </ul>
          <Link to ='/download'>
            <ButtonSecondary>
              Register Now <FaAngleRight />
            </ButtonSecondary>
          </Link>
        </Text>
        <Image src='https://source.unsplash.com/random' alt='courseImage' />
      </Content>
    </>
  );
};
