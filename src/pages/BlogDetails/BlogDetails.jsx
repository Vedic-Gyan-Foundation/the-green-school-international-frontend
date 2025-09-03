import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Using static blogs only; no API calls
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./BlogDetails.module.css";
import Navbar from "../../components/Navbar/Navbar";
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

  // console.log(baseURL + blog.banner);
  return (
    <>
      {Object.keys(blog).length > 0 ? (
        <>
          <Header title={"Blogs"} />
          <div className={styles.blog_section}>
            <h2>{blog.title}</h2>
            <img src={blog.banner} alt="" className="" />
            <p>{blog.content}</p>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default BlogDetails;
