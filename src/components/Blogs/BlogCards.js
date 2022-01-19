import { StyledBlogCardArray } from "../styles/Blogs/LatestBlogs.styled";
import { BlogCard } from "./BlogCard";
import blog from "./Blogdata";
import React, { useEffect, useState } from "react";


export const BlogCards = () => {
  
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    setBlogData(blog);
  });
  return (
    <StyledBlogCardArray>
      {console.log(blogData)}
      {/* {blogdata.map(blog => (
        <BlogCard title={blog.Title} content={blog.Content} imageLink={blog.ImageUrl} />
      ))} */}
      <BlogCard></BlogCard>
    </StyledBlogCardArray>
  );
};
