import Feature from '../components/Feature';
import content from '../content';
import { Container } from './styles/BasicUI/Container.styled';
export const Features = () => {
    return (
        <Container>
            {content.map((item, index) => (
          <Feature key={index} item={item} />
        ))}
        </Container>
    )
}
