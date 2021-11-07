import styled from 'styled-components';

export const BlogHeader = styled.section`
  margin-block: 7em 4em;
  display: flex;
  flex-direction: column;
`;

export const BreadCrumb = styled.ul`
  li:first-child {
    list-style: none;
  }
  display: flex;
  align-items: center;
  vertical-align: middle;
  gap: 2ch;
  list-style: inside
    url(${process.env.PUBLIC_URL + '/assets/icons/CaretRight.svg'});
  li:last-child {
    font-weight: 600;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2em;
`;
export const Image = styled.img`
  width: 50%;
  height: 400px;
  background-repeat: no-repeat;
  object-fit: cover;
`;
export const Text = styled.div`
  flex: 1;
  height: 400px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  a,
  a:active,
  a:visited {
    color: #368f8b;
    text-decoration: none;
    vertical-align: 0;
    font-weight: bolder;
    display: flex;
    align-items: center;
    gap: 1ch;
  }
`;

export const Heading = styled.h1`
  display: block;
  font-size: 3.5rem;
`;
export const PostDetails = styled.div`
    margin-bottom: 2em;
    p{
        font-weight:700;


    }
    span{
        font-weight: normal;
        color:rgba(255, 255, 255, 0.5); ;
    }
`;
