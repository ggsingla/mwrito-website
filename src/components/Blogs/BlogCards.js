import { StyledBlogCardArray } from "../styles/Blogs/LatestBlogs.styled"
import { BlogCard } from "./BlogCard"

export const BlogCards = () => {
    return (
        <StyledBlogCardArray>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </StyledBlogCardArray>
    )
}
