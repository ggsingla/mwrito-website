import styled from 'styled-components';

export const StyledContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap:2em;
  width: 40%;
  h3 {
    display: flex;
    align-items: center;
    gap: 2ch;
    font-weight: normal;
    font-size: clamp(1rem, 4vw, 1.5rem);
  }
  .fa{
    font-size-adjust: ex-height 0.5;
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 90%;
  }
`;
