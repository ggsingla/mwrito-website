import styled from "styled-components";

export const StyledFeature = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0;
  flex-direction: ${({ layout }) => layout || "row"};
  gap : 40px;
  
  & > div {
    flex: 1;
  }
  h2{
    font-size: 2.2rem;
    color: #F9A826;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
export const StyledFeatureContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
