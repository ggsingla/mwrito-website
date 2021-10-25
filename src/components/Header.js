import {FaGooglePlay} from 'react-icons/fa'
import { StyledHeader, Image } from './styles/Header.styled'
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled'

export function Header() {
  return (
    <StyledHeader>
        <Flex>
          <div>
            <h1>Make yourself <span>future</span> fit</h1>
            <p>
            Specially made courses and well qualified teachers to cater all your doubts
            </p>
            <Button>
              Get the App
              <FaGooglePlay/>
            </Button>
          </div>
          <Image src='./assets/mockup.svg' alt='mockup' />
        </Flex>
    </StyledHeader>
  )
}
