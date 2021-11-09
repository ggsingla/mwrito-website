
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
import data from '../../courseData'
let tsCourse = data[0]

export const CoursePageHeader = () => {
  return (
    <Container>
      <BlogHeader>
        <BreadCrumb>
          <li>Home</li>
          <li>Courses</li>
          <li>Top Selling</li>
        </BreadCrumb>
        <CourseContent
          title={tsCourse.title}
          features1={tsCourse.features1}
          features2={tsCourse.features2}
          features3={tsCourse.features3}
          features4={tsCourse.features4}
          image={tsCourse.image}
          grade={tsCourse.grade}
          difficulty={tsCourse.difficulty}
        />
      </BlogHeader>
    </Container>
  );
};

export const CourseContent = (props) => {

  return (
    <>
      <Content>
        <Text>
          <Heading>{props.title}</Heading>
          <CourseDetails>
            <p>Class {props.grade}</p>
            <img
              src={
                process.env.PUBLIC_URL +
                `/assets/Difficulty Selector/Difficulty Bar ${props.difficulty}.svg`
              }
            />
          </CourseDetails>
          <ul>
            <li>
              {props.features1}
            </li>
            <li>
              {props.features2}
            </li>
            <li>
            {props.features3}
            </li>
            <li>
            {props.features4}
            </li>
          </ul>
          <Link to ='/download'>
            <ButtonSecondary>
              Register Now <FaAngleRight />
            </ButtonSecondary>
          </Link>
        </Text>
        <Image src={props.image} alt='courseImage' />
      </Content>
    </>
  );
};
