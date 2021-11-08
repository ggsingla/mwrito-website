import styled from 'styled-components';

export const StyledUserFields = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 40%;
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;
export const FormContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5em;
  margin: 5em 0;
  color: ${({ theme }) => theme.colors.light};
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
