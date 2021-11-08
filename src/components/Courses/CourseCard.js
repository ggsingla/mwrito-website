import {
  Buy,
  Cross,
  PaymentDetails,
  Price,
  Stats,
  StyledCourseCard,
} from '../styles/Courses/CourseCard.styled';
import { FaAngleRight } from 'react-icons/fa';
import Modal from 'react-modal';
import { CourseContent } from './CoursePageHeader';
import { ButtonSecondary } from '../styles/BasicUI/Button.styled';
import { useState } from 'react';
import './Modal.css';
Modal.setAppElement('#root');

export const CourseCard = ({
  item: {
    title,
    difficulty,
    videos,
    hours,
    features1,
    features2,
    features3,
    features4,
    image,
    orgPrice,
    disPrice,
    grade,
  },
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <StyledCourseCard>
      <h3>{title}</h3>
      <Stats>
        <div className='difficulty'>
          <img
            src={
              process.env.PUBLIC_URL +
              `/assets/Difficulty Selector/Difficulty Bar ${difficulty}.svg`
            }
            alt=''
          />
          <p>{
            difficulty==='E' ? 'Easy'
            : difficulty === 'M'? 'Medium'
            : 'Hard'
            }</p>
        </div>
        <div className='nums'>
          <div className='videos'>
            <h3>{videos}</h3>
            <p>Videos</p>
          </div>
          <div className='separator'></div>
          <div className='time'>
            <h3>{hours}</h3>
            <p>Hours</p>
          </div>
        </div>
      </Stats>
      <PaymentDetails>
        <Price>
          <h3>&#8377;{orgPrice}</h3>
          <h2>&#8377;{disPrice}</h2>
        </Price>
        <Buy>
          <div className='tag'>Class {grade}</div>
          <ButtonSecondary onClick={() => setModalIsOpen(true)}>
            More Details <FaAngleRight />
          </ButtonSecondary>
        </Buy>
      </PaymentDetails>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(10px)',
          },
          content: {
            background: 'rgba(5, 23, 33, 0.9)',
            backdropFilter: 'blur(30px)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            height: 'max-content',
            maxHeight: '100vh',
            margin: 'auto',
            padding: '5em 2em',
            width: 'clamp(350px , 95vw, 1200px)',
            WebkitOverflowScrolling: 'auto',
            overflow: 'scroll',
            overflowX: 'hidden',
            position: 'relative',
          },
        }}>
        <Cross onClick={() => setModalIsOpen(false)} />
        <CourseContent
          title={title}
          features1={features1}
          features2={features2}
          features3={features3}
          features4={features4}
          image={image}
          grade={grade}
          difficulty={difficulty}
        />
      </Modal>
    </StyledCourseCard>
  );
};
