import {FaGooglePlay} from 'react-icons/fa'
import { StyledHeader, Image, HeaderContent, BgLogo, StyledH1} from './styles/Header.styled'
import { Button } from './styles/BasicUI/Button.styled'
export function Header() {
  return (
    <StyledHeader>
        <BgLogo src={process.env.PUBLIC_URL + '/assets/logo_light.svg'}/>
          <HeaderContent>
            <StyledH1>Make yourself <span>future</span> fit</StyledH1>
            <p>
            Specially made courses and well qualified teachers to cater all your doubts
            </p>
            <Button>
              Get the App
              <FaGooglePlay/>
            </Button>
          </HeaderContent>
          <Image src={process.env.PUBLIC_URL + '/assets/mockup.png'} alt='mockup' />
    </StyledHeader>
  )
}
