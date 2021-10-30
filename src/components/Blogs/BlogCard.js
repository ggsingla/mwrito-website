import { FaAngleRight } from "react-icons/fa";
import { StyledBlogCard } from "../styles/Blogs/LatestBlogs.styled";

export const BlogCard = () => {
  return (
    <StyledBlogCard>
      <img src="https://source.unsplash.com/random" alt="Blog Image" />
      <div className="content">
        <h2>How to Smart Work While Studying ?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh amet ac,
          id magna lorem feugiat laoreet. Amet, eros, fusce fames ullamcorper
          convallis. Malesuada pretium semper leo vel nunc. Arcu, fusce eget
          tortor lobortis feugiat ornare elit morbi. Morbi urna.
        </p>
        <a href="/">More Details <FaAngleRight/></a>
      </div>
    </StyledBlogCard>
  );
};
