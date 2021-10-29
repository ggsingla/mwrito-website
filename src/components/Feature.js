import { StyledFeature } from './styles/Features.styled'

export default function Feature({ item: { id, title, body, image } }) {
  return (
    <StyledFeature layout={id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={process.env.PUBLIC_URL + `/assets/images/${image}`} alt='' />
      </div>
    </StyledFeature>
  )
}
