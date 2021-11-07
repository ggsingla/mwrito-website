import { StyledBlogCardArray } from "../styles/Blogs/LatestBlogs.styled";
import { BlogCard } from "./BlogCard";
import db from "./firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";

// async function getData() {
//   const blog = collection(db, "Blogs");
//   const blogdata = await getDocs(blog);
//   return blogdata;
//}
export const BlogCards = () => {
  
  // // const [blogdata, setBlogdata] = useState([]);
  // const fetchData = async () => {
  //   const data = await getData();
  //   const d=[];
  //   data.forEach(element => {d.push(element.data())});
  //   setBlogdata(d);

  // }
  // useEffect(() => {
  //   fetchData().catch(err => console.log(err));
  // })
  
  return (
    <StyledBlogCardArray>
      {/* {blogdata.map(blog => (
        <BlogCard title={blog.Title} content={blog.Content} imageLink={blog.ImageUrl} />
      ))} */}
      <BlogCard></BlogCard>
    </StyledBlogCardArray>
  );
};
