import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import styles from "./Blogs.module.css";
import Header from "../../components/Header/Header";
import staticBlogs from "../../data/staticBlogs";

const Blogs = () => {
  const [blogsList] = useState(staticBlogs);
   const [articles, setArticles] = useState([]);

  useEffect(()=> {
    async function fetchBlogs(params) {
      const blogRequest = await fetch('https://api.greenschoolguwahati.com/v1/blog/readAll')
      const blogs = await blogRequest.json()
      if (blogs?.success) {
        setArticles(blogs?.data)
      }
      console.log(blogs)
    }
    fetchBlogs()
  }, [])

  return (
    <>
      <Header title={"Blogs"} />
      {articles.length > 0 ? (
        <>
          <div className={styles.blogs}>
            {articles.map((blog) => (
              <BlogCard
                key={blog.id}
                author={blog.author}
                readTime={blog.read_time}
                id={blog.id}
                image={blog.cover_image}
                title={blog.title}
                content={blog.content}
                postedOn={blog.created_at}
              />
            ))}
          </div>
        </>
      ) : (
        <p className={styles.error_message}>
          No blogs found! Check Back later!
        </p>
      )}
    </>
  );
};

export default Blogs;
