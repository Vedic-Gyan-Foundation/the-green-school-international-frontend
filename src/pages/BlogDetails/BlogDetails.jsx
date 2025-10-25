import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Using static blogs only; no API calls
import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import styles from "./BlogDetails.module.css";
// import Navbar from "../../components/Navbar/Navbar";
import Loader from "../../components/Loader/Loader";
import staticBlogs from "../../data/staticBlogs";

const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const local = staticBlogs.find((b) => String(b.id) === String(id));
    if (local) setBlog(local);
  }, [id]);

  const renderContent = (content) => {
    if (!content) return null;

    return content.split("\n\n").reduce((elements, block, blockIndex) => {
      const lines = block
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);

      if (lines.length === 0) {
        return elements;
      }

      const [firstLine, ...restLines] = lines;
      const isHeading =
        firstLine.split(" ").length <= 12 && !/[.!?]/.test(firstLine);

      if (isHeading) {
        elements.push(
          <h3
            key={`heading-${blockIndex}`}
            className={styles.blog_heading}
          >
            {firstLine}
          </h3>
        );
      } else {
        restLines.unshift(firstLine);
      }

      restLines.forEach((line, lineIndex) => {
        if (line) {
          elements.push(
            <p
              key={`paragraph-${blockIndex}-${lineIndex}`}
              className={styles.blog_paragraph}
            >
              {line}
            </p>
          );
        }
      });

      return elements;
    }, []);
  };

  // console.log(baseURL + blog.banner);
  return (
    <>
      {Object.keys(blog).length > 0 ? (
        <>
          <Header title={"Blogs"} />
          <div className={styles.blog_section}>
            <h2 className={styles.blog_title}>{blog.title}</h2>
            {blog.banner && (
              <img src={blog.banner} alt="" className={styles.blog_image} />
            )}
            <div className={styles.blog_content}>
              {renderContent(blog.content)}
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default BlogDetails;
