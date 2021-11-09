import styled from 'styled-components';
import {IoClose} from 'react-icons/io5'
export const StyledCourseCard = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(27, 96, 106, 0.5);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
  padding:1em;
  max-width: 400px;
  min-width: 300px;
  height: 350px;
  flex: 1;
  border-radius: 10px;
  justify-content: space-between;
  gap: 3em;
  h3 {
    font-weight: normal;
  }
`;
export const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .difficuly {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  .nums {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1ch;
    h3 {
      font-weight: 600;
    }
    .separator {
      width: 1px;
      height: 30px;
      background-color: ${({ theme }) => theme.colors.light};
    }
  }
`;
export const PaymentDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 1ch;
  h2 {
    color: ${({ theme }) => theme.colors.select};
    font-weight: bold;
  }
  h3 {
    text-decoration-line: line-through;
    color: #a09f9f;
  }
`;
export const Buy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  gap: 2ch;
  .tag {
    background: #368f8b;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.dark};
    padding: 0.5ch 1ch;
    font-size: smaller;
    font-weight: bold;
  }
`;
export const Cross = styled(IoClose)`
  position: absolute;
  color: white;
  top: 1em;
  right: 2em;
  font-size: 2rem;
`;
