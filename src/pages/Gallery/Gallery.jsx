import React, { useState, useEffect } from "react";
import styles from "./Gallery.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ModalImage from "react-modal-image";
import axiosInstance from "../../api/axiosInstance";
import { baseURL } from "../../api/axiosInstance";
import axios from "axios";

const Gallery = () => {
  const baseApi = "https://api.greenschoolguwahati.com"; // https://api.greenschoolguwahati.com/
  const [galleryList, setGalleryList] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(`galleries/list?category=galleries`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const jayimage = response.data.data
        axios.get(`${baseApi}/api/get-images`, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            console.log(response.data.imgPath);
            setGalleryList([ ...response.data.imgPath, ...jayimage,]);
          });
      });
  }, []);

  console.log(galleryList);
  return (
    <>
      <Header title="Gallery" />
      <div className={styles.gallery_images}>
        <h2>Gallery Images</h2>
        {galleryList ? (
          <div className={styles.gallery_images_container}>
            {galleryList.map((item, index) => (
              <ModalImage
                key={index}
                small={item.image ? baseURL + item.image : baseApi + item}
                large={item.image ? baseURL + item.image : baseApi + item}
                className={styles.gallery_image}
                loading="lazy"
              />
            ))}
          </div>
        ) : (
          <p>No Images :-(</p>
        )}
      </div>
    </>
  );
};

export default Gallery;
