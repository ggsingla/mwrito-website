import styled from "styled-components";

export const StyledFeature = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0;
  flex-direction: ${({ layout }) => layout || "row"};
  gap : 2em;
  
  & > div {
    flex: 1;
  }
  h2{
    font-size: clamp(2rem, 4vw, 2.2rem);
    color: #F9A826;
  }
  p{
    font-size: clamp(0.9rem, 2vw, 1.15rem);
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    img {
      max-width: 80%;
    }
  }
`;
export const StyledFeatureContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
