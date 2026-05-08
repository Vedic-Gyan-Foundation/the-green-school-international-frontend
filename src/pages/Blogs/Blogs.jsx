import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import styles from "./Blogs.module.css";
import Header from "../../components/Header/Header";
import staticBlogs from "../../data/staticBlogs";
import Loader from "../../components/Loader/Loader";

const Blogs = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function fetchBlogs() {
      try {
        const blogRequest = await fetch(
          "https://api.greenschoolguwahati.com/v1/blog/readAll"
        );
        const blogs = await blogRequest.json();
        if (!mounted) return;
        if (blogs?.success) setArticles(blogs?.data || []);
      } catch (e) {
        console.error(e);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    fetchBlogs();
    return () => {
      mounted = false;
    };
  }, []);

  // Fallback to static blogs if API returns nothing
  const list = articles.length > 0 ? articles : staticBlogs;

  return (
    <>
      <Header title={"Blogs"} />
      <div className={styles.blogs_container}>
        <div className={styles.blogs_header}>
          <span className="section-eyebrow">From the journal</span>
          <h2>
            Stories &amp; insights from{" "}
            <span className="gradient-text">our community</span>.
          </h2>
          <p>
            Reflections, milestones and learning notes — straight from The
            Green School International.
          </p>
        </div>

        {loading ? (
          <Loader />
        ) : list.length > 0 ? (
          <div className={styles.blogs}>
            {list.map((blog) => (
              <BlogCard
                key={blog.id}
                author={blog.author || "The Green School"}
                readTime={blog.read_time || blog.readTime || "5 min"}
                id={blog.id}
                image={blog.cover_image || blog.banner}
                title={blog.title}
                content={blog.content}
                postedOn={blog.created_at || blog.postedOn}
              />
            ))}
          </div>
        ) : (
          <p className={styles.error_message}>
            No blogs found! Check back later.
          </p>
        )}
      </div>
    </>
  );
};

export default Blogs;
