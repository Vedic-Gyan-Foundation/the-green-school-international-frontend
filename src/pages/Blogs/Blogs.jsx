import { useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import styles from "./Blogs.module.css";
import Header from "../../components/Header/Header";
import staticBlogs from "../../data/staticBlogs";

const Blogs = () => {
  const [blogsList] = useState(staticBlogs);

  return (
    <>
      <Header title={"Blogs"} />
      {blogsList.length > 0 ? (
        <>
          <div className={styles.blogs}>
            {blogsList.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                image={blog.banner}
                title={blog.title}
                content={blog.content}
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
