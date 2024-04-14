import { getAllBlogPosts, getAllTopics } from "../../Lib/Data";
import { serialize } from "next-mdx-remote/serialize";
import remarkHeadingId from 'remark-heading-id'; // Added import statement
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Head from "next/head";
import BlogInner from "../../Components/BlogInner";
import { getHeadings } from "../../Lib/GetHeadings";

export const getStaticPaths = () => {
 const allBlogs = getAllBlogPosts();
 return {
    paths: allBlogs.map((blog) => ({
      params: {
        id: String(blog.data.Title.split(" ").join("-").toLowerCase()),
      },
    })),
    fallback: false,
 };
};

export const getStaticProps = async (context) => {
 const params = context.params;
 const allBlogs = getAllBlogPosts();
 const allTopics = getAllTopics();

 const page = allBlogs.find(
    (blog) =>
      String(blog.data.Title.split(" ").join("-").toLowerCase()) === params.id
 );

 const { data, content } = page;
 const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: { remarkPlugins: [remarkHeadingId] },
 });

 const headings = await getHeadings(content);

 return {
    props: {
      data: data,
      content: mdxSource,
      id: params.id,
      headings: headings,
      topics: allTopics,
    },
 };
};

function id({ data, content, id, headings, topics }) {
 return (
    <>
      <div className="min-h-screen relative bg-white dark:bg-gray-900">
        <Navbar topics={topics} />
        <div className="py-24 max-w-3xl mx-auto md:mx-auto lg:mx-auto xl:mx-auto">
          <BlogInner data={data} content={content} headings={headings} />
        </div>
        <Footer />
      </div>
    </>
 );
}

export default id;