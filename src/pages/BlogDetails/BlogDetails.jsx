import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import { baseURL } from "../../api/axiosInstance";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./BlogDetails.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Loader from "../../components/Loader/Loader";

const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axiosInstance
      .get(`blogs/get/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setBlog(response.data.data);
      });
  }, [id]);

  // console.log(baseURL + blog.banner);
  return (
    <>
      {Object.keys(blog).length > 0 ? (
        <>
          <Header title={"Blogs"} />
          <div className={styles.blog_section}>
            <h2>{blog.title}</h2>
            <img src={baseURL + blog.banner} alt="" className="" />
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
