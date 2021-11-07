import { FaAngleRight } from 'react-icons/fa';
import { Container } from '../styles/BasicUI/Container.styled';
import { BlogHeader, BreadCrumb, Text, Heading, PostDetails, Content, Image } from '../styles/Blogs/BlogPageHeader.styled';

const BlogPageHeader = () => {
  return (
    <Container>
      <BlogHeader>
        <BreadCrumb>
          <li>Home</li>
          <li>Blogs</li>
          <li>Editor's Pick</li>
        </BreadCrumb>
        <Content>
            <Text>
              <Heading>How to do smart work while studying? </Heading>
              <PostDetails>
                <p>October 30, 2021 <span>by Gautam Singla</span></p>
              </PostDetails>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh amet ac,
                id magna lorem feugiat laoreet. Amet, eros, fusce fames ullamcorper
                convallis. Malesuada pretium semper leo vel nunc. Arcu, fusce eget
                tortor lobortis feugiat ornare elit morbi. Morbi urna.
              </p>
              <a href="/">
                More Details <FaAngleRight />
              </a>
            </Text>
            <Image src = "https://source.unsplash.com/random"/>
        </Content>
      </BlogHeader>
    </Container>
  );
};

export default BlogPageHeader;
