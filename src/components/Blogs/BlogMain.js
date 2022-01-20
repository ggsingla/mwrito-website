import { Container } from "../styles/BasicUI/Container.styled";
import {
  BlogHeader,
  BreadCrumb,
  Text,
  Heading,
  PostDetails,
  Content,
  Image,
} from "../styles/Blogs/BlogPageHeader.styled";
import blog from "./Blogdata";
import styled from "styled-components";
import "../../Pages/styles/footer-pages.css"
const BlogMain = () => {
  const myStyle={
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "1200px",
    maxWidth: "100%",
    padding: "0 2em",
    flexDirection: "column",
  };
  let Blogdata=blog[0].Description.split("\n");

  return (
    <div style={myStyle}>
      <BlogHeader>
        
        <BreadCrumb>
          <li>Home</li>
          <li>Blogs</li>
          <li>Editor's Pick</li>
        </BreadCrumb>
        
        <Content>
          <article style = {{padding: "0px"}}>

            <h1>{blog[0].Title}</h1>
            <img src="https://source.unsplash.com/kLfkVa_4aXM" style={{
              objectFit: "cover",
              height: "500px"
            }}>
              
            </img>
            <PostDetails>
              <p>
                January 20, 2022 <span>by MWRITO</span>
              </p>
            </PostDetails>
            <blogContent>
                { Blogdata.map((item,index)=>{
                  return(
                    index%2!==0?<p key={index}>{item}</p>:<h3 key={index}>{item}</h3>
                  )
                })}
  
            </blogContent>
          </article>
         
        </Content>
      </BlogHeader>
    </div>
  );
};

export default BlogMain;


const blogContent = styled.p`
  line-height: 1.5;
  background: #fff;
`