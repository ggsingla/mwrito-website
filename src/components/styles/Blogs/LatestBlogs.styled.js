import styled from "styled-components";

export const StyledLatestBlogs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5em;
`
export const StyledBlogCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(2em, 5vw, 5em);
  position: relative;
  img{
      width: 300px;
      object-fit: cover;
  }
  .content{
    &>* + *{
      margin-top: 1em;
        }
      width: 70%;
      h2{
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      p{
          opacity: 60%;
          font-weight: 400;
          overflow: hidden;
          text-overflow: ellipsis;
          height: 10ch;
      }
  }
  a, a:active, a:visited{
    color:#368F8B;
    text-decoration: none;
    vertical-align: 0;
    font-weight: bolder;
    display: flex;
    align-items: center;
    gap: 1ch;
  }
`
export const StyledBlogCardArray = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5em;
  &>div::after{
    content: '';
    width: 90%;
    height: 1px;
    background-color: #ffffff5a;
    position: absolute;
    bottom: -2em;
    left: 50%;
    transform: translate(-50%, 0);
  }
  &div:last-child::after{
      background-color: transparent;
  }
  img{
      height: 200px;
  }
`
