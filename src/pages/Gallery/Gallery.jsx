import React, { useState, useEffect } from "react";
import styles from "./Gallery.module.css";
import Header from "../../components/Header/Header";
import axiosInstance from "../../api/axiosInstance";
import { baseURL } from "../../api/axiosInstance";
import captions from "./galleryCaptions.json";
import videoLinks from "./videoLinks.json";
import { FaPlay } from "react-icons/fa";

const Gallery = () => {
  const baseApi = "https://api.greenschoolguwahati.com"; // https://api.greenschoolguwahati.com/
  const [galleryList, setGalleryList] = useState([]);
  const [activeImage, setActiveImage] = useState(null);
  const [activeTab, setActiveTab] = useState("images");

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
        // console.log(response.data.imgPath);
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

  const downloadImage = async (image) => {
    if (!image) return;
    try {
      const response = await fetch(image.src);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const extension = image.src.split(".").pop()?.split("?")[0] || "jpg";
      const safeTitle = image.caption.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      const filename = `${safeTitle || "gallery-image"}.${extension}`;
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Unable to download image", error);
    }
  };

  const getYouTubeThumbnail = (url) => {
    let videoId = "";
    if (url.includes("youtu.be")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    } else if (url.includes("youtube.com/watch")) {
      const urlParams = new URLSearchParams(new URL(url).search);
      videoId = urlParams.get("v");
    }
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  // console.log(galleryList);
  return (
    <>
      <Header title="Gallery" className="gallery" />{" "}
      <div className={styles.gallery_images}>
        <h2>Gallery</h2>

        <div className={styles.tabs_container}>
          <button
            className={`${styles.tab_button} ${
              activeTab === "images" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("images")}
          >
            Images
          </button>
          <button
            className={`${styles.tab_button} ${
              activeTab === "videos" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("videos")}
          >
            Videos
          </button>
        </div>

        {activeTab === "images" && (
          <>
            {galleryList ? (
              <div className={styles.gallery_images_container}>
                {galleryList.map((item, index) => {
                  const caption = captions[index] || defaultCaption;
                  const imgSrc = item.image
                    ? baseURL + item.image
                    : baseApi + item;
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
          </>
        )}

        {activeTab === "videos" && (
          <div className={styles.gallery_images_container}>
            {videoLinks.map((video, index) => (
              <a
                key={index}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.gallery_item} ${styles.video_item}`}
              >
                <div className={styles.video_thumbnail_container}>
                  <img
                    src={getYouTubeThumbnail(video.url)}
                    alt={video.title}
                    className={styles.video_thumbnail}
                    loading="lazy"
                  />
                  <div className={styles.play_icon}>
                    <FaPlay size={20} />
                  </div>
                </div>
                <div className={styles.gallery_caption}>
                  <p className={styles.gallery_caption_title}>{video.title}</p>
                  <span className={styles.gallery_caption_subtitle}>
                    Watch on YouTube
                  </span>
                </div>
              </a>
            ))}
          </div>
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
            <button
              className={styles.lightbox_download}
              onClick={() => downloadImage(activeImage)}
              aria-label="Download image"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M11 3h2v9h3.5L12 18.5 7.5 12H11z" />
                <path d="M5 14h2v5h10v-5h2v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
              </svg>
            </button>
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
