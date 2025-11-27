import React, { useState, useEffect } from "react";
import styles from "./Gallery.module.css";
import Header from "../../components/Header/Header";
import axiosInstance from "../../api/axiosInstance";
import { baseURL } from "../../api/axiosInstance";
import captions from "./galleryCaptions.json";

const Gallery = () => {
  const baseApi = "https://api.greenschoolguwahati.com"; // https://api.greenschoolguwahati.com/
  const [galleryList, setGalleryList] = useState([]);
  const [activeImage, setActiveImage] = useState(null);
  const defaultCaption = {
    title: "Green School Moments",
    subtitle: "Life at The Green School International",
  };
  useEffect(() => {
    axiosInstance
      .get(`${baseApi}/api/get-images`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data.imgPath);
        setGalleryList([...response.data.imgPath]);
      });
  }, []);

  useEffect(() => {
    if (!activeImage) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeImage]);

  console.log(galleryList);
  return (
    <>
      <Header title="Gallery" className="gallery" />{" "}
      <div className={styles.gallery_images}>
        <h2>Gallery Images</h2>
        {galleryList ? (
          <div className={styles.gallery_images_container}>
            {galleryList.map((item, index) => {
              const caption = captions[index] || defaultCaption;
              const imgSrc = item.image ? baseURL + item.image : baseApi + item;
              return (
                <div className={styles.gallery_item} key={index}>
                  <img
                    src={imgSrc}
                    alt={caption.title}
                    loading="lazy"
                    className={styles.gallery_image}
                    onClick={() =>
                      setActiveImage({ src: imgSrc, caption: caption })
                    }
                  />
                  <div className={styles.gallery_caption}>
                    <p className={styles.gallery_caption_title}>
                      {caption.title}
                    </p>
                    <span className={styles.gallery_caption_subtitle}>
                      {caption.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>No Images :-(</p>
        )}
      </div>
      {activeImage && (
        <div
          className={styles.lightbox_overlay}
          onClick={() => setActiveImage(null)}
        >
          <div
            className={styles.lightbox_content}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.lightbox_close}
              onClick={() => setActiveImage(null)}
              aria-label="Close image preview"
            >
              &times;
            </button>
            <a
              className={styles.lightbox_download}
              href={activeImage.src}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
            <img
              src={activeImage.src}
              alt={activeImage.caption.title}
              className={styles.lightbox_image}
            />
            <div className={styles.lightbox_caption}>
              <h4>{activeImage.caption.title}</h4>
              <p>{activeImage.caption.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
