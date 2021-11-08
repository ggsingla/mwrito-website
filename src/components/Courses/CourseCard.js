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
import './Modal.css'
Modal.setAppElement('#root');

export const CourseCard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <StyledCourseCard>
      <h3>Full syllabus + JEE foundation course</h3>
      <Stats>
        <div className='difficulty'>
          <img
            src={
              process.env.PUBLIC_URL +
              '/assets/Difficulty Selector/Difficulty Bar E.svg'
            }
            alt=''
          />
          <p>Easy</p>
        </div>
        <div className='nums'>
          <div className='videos'>
            <h3>50</h3>
            <p>Videos</p>
          </div>
          <div className='separator'></div>
          <div className='time'>
            <h3>50</h3>
            <p>Hours</p>
          </div>
        </div>
      </Stats>
      <PaymentDetails>
        <Price>
          <h3>&#8377;6000</h3>
          <h2>&#8377;4999</h2>
        </Price>
        <Buy>
          <div className='tag'>Class 8</div>
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
        <Cross onClick={()=> setModalIsOpen(false)} />
        <CourseContent />
      </Modal>
    </StyledCourseCard>
  );
};
