import { LatestBlogs } from "../components/Blogs/LatestBlogs"
import BlogPageHeader from "../components/Blogs/BlogPageHeader"
import Background from "../components/background"

const BlogsPage = () => {
    return (
        <>
        <Background/>
          <BlogPageHeader/>
        <LatestBlogs/>
        </>
    )
}

export default BlogsPage
