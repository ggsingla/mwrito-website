import { StyledSinglePageBG } from '../components/styles/BasicUI/background.styled'
import './styles/footer-pages.css'
export const AboutUs = () => {
  return (
    <>
      <StyledSinglePageBG />
      <article>
        <h1>About Us</h1>
        <img src={process.env.PUBLIC_URL + "/assets/banner.png"} alt="banner" />
        <p>
          We at writo strive for the betterment of the overall intellect of a
          student by an innovative full fledged online platform under the title of
          mwrito, which will be an agglutination of both school and coaching
          amenity, to be bettersaid we will provide online lectures notes crash
          courses along with one to one doubt solving sessions for all genre.</p>
          <p>We will cover each and every aspect and classes and we will render our
          services altogether to the schools so as to benefit the major cult of
          children's because we have a believe that the supremacy of a country
          is governed by the intellect and persona of children that they
          acquire. In short we will prove to be an primas interpares in our
          respective field.</p><p>
             For scalability as told by us we will be acquiring
            schools so as to expand our reach further. We believe in the autocracy
            of knowledge and welfare and we aspire to make our successors FUTURE
            FIT so as to build a better community.
          </p>
      </article>
    </>
  )
}
