import { FaAngleRight } from "react-icons/fa";
import { StyledBlogCard } from "../styles/Blogs/LatestBlogs.styled";

export const BlogCard = (props) => {
  let {title,content,imageLink}=props;
  return (
    <StyledBlogCard>
      <img src={imageLink} alt="Blog Image" alt = "Blog Image" />
      <div className="content">
        <h2>{title}</h2>
        <p>
         {content}
        </p>
        <a href="/">
          More Details <FaAngleRight />
        </a>
      </div>
    </StyledBlogCard>
  );

};
