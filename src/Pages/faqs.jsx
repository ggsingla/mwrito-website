import { Link } from 'react-router-dom'
import { StyledSinglePageBG } from '../components/styles/BasicUI/background.styled'
import './styles/footer-pages.css'
export const FAQs = () => {
  return (
    <>
    <StyledSinglePageBG/>
      <article>
        <h1>Frequently Asked Questions</h1>
        <ol type="i">
          <li>
            <div className='ques'>
              Mwrito’s courses are accessible for which classes?
            </div>
            <div className='ans'>
              Students across classes 6 to 10 can join in and gain from Mwrito
              Courses.
            </div>
          </li>

          <li>
            <div className='ques'>
              Is Mwrito’s courses planned to the school prospectus/educational
              program?
            </div>
            <div className='ans'>
              Indeed, We have numerous courses accessible for students to choose
              from to suit their review plan according to the school schedule.
            </div>
          </li>
          <li>
            <div className='ques'>Do you give example notes ?</div>
            <div className='ans'>
              Indeed, notes will be provided in each courses.
            </div>
          </li>
          <li>
            <div className='ques'>
              What sort of content is instructed in these courses?
            </div>
            <div className='ans'>
              From basic to advance of a particular subject , everything will be
              covered in details.
            </div>
          </li>
          <li>
            <div className='ques'>
              Where would I be able to observe the courses presented by Mwrito?
            </div>
            <div className='ans'>
              Click <Link className= "link" to = "/courses">here</Link> to view the courses offered by Mwrito.
            </div>
          </li>
          <li>
            <div className='ques'>
              What is the procedure for refund of a purchased course?</div>
            <div className='ans'>
            For refund initiation process contact us at aoyt@mwrito.com within 1 week of purchasing any plan
            </div>
          </li>
        </ol>
      </article>
    </>
  )
}
