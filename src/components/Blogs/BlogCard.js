import { FaAngleRight } from "react-icons/fa";
import { StyledBlogCard } from "../styles/Blogs/LatestBlogs.styled";
import db from "./firebase";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

async function getData() {
  const blog = collection(db, 'Blogs');
  const blogSnapShot = await getDocs(blog);
  const blogList = blogSnapShot.docs.map(
    doc => doc.data());
  console.log(blogList);
}
export const BlogCard = () => {
  getData();
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
