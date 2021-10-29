import {FaGooglePlay} from 'react-icons/fa'
import { StyledHeader, Image, HeaderContent, BgLogo} from './styles/Header.styled'
import { Button } from './styles/Button.styled'
export function Header() {
  return (
    <StyledHeader>
        <BgLogo src={process.env.PUBLIC_URL + '/assets/logo_light.svg'}/>
          <HeaderContent>
            <h1>Make yourself <span>future</span> fit</h1>
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
