import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Gallery.module.css";
import Header from "../../components/Header/Header";
import videoLinks from "./videoLinks.json";
import { FaPlay } from "react-icons/fa";
import { HiXMark, HiOutlinePhoto, HiOutlineFilm } from "react-icons/hi2";
import { HiOutlineDownload } from "react-icons/hi";

const Gallery = () => {
  const baseApi = "https://api.greenschoolguwahati.com";
  const [galleryList, setGalleryList] = useState([]);
  const [activeImage, setActiveImage] = useState(null);
  const [activeTab, setActiveTab] = useState("images");

  useEffect(() => {
    fetch(`${baseApi}/v1/gallery/readAll?page=1&limit=200`)
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setGalleryList(result.data);
        }
      })
      .catch((err) => console.error("Failed to fetch gallery", err));
  }, []);

  useEffect(() => {
    if (!activeImage) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveImage(null);
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
    if (!url) return "";
    let videoId = "";
    if (url.includes("youtu.be")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    } else if (url.includes("youtube.com/watch")) {
      const urlParams = new URLSearchParams(new URL(url).search);
      videoId = urlParams.get("v");
    }
    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
  };

  return (
    <>
      <Header title="Gallery" className="gallery" />

      <div className={styles.gallery_images}>
        <div className={styles.gallery_header}>
          <span className="section-eyebrow">Moments captured</span>
          <h2>
            Stories from <span className="gradient-text">The Green School</span>
            .
          </h2>
          <p>
            A glimpse of campus life — from awards and assemblies to learning,
            sport and celebration.
          </p>
        </div>

        <div className={styles.tabs_container}>
          <button
            className={`${styles.tab_button} ${
              activeTab === "images" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("images")}
          >
            <HiOutlinePhoto size={18} /> Images
          </button>
          <button
            className={`${styles.tab_button} ${
              activeTab === "videos" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("videos")}
          >
            <HiOutlineFilm size={18} /> Videos
          </button>
        </div>

        {activeTab === "images" && (
          <>
            {galleryList && galleryList.length > 0 ? (
              <div className={styles.gallery_images_container}>
                {galleryList.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: (item.id % 6) * 0.05 }}
                    whileHover={{ y: -6 }}
                    className={styles.gallery_item}
                    onClick={() =>
                      setActiveImage({
                        src: item.image,
                        caption: { title: item.caption, subCaption: item.sub_caption },
                      })
                    }
                  >
                    <div className={styles.gallery_image_wrap}>
                      <img
                        src={item.image}
                        alt={item.caption}
                        loading="lazy"
                        className={styles.gallery_image}
                      />
                      <div className={styles.gallery_hover}>
                        <span>View image</span>
                      </div>
                    </div>
                    <div className={styles.gallery_caption}>
                      <p className={styles.gallery_caption_title}>
                        {item.caption}
                      </p>
                      {item.sub_caption && (
                        <span className={styles.gallery_caption_subtitle}>
                          {item.sub_caption}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className={styles.empty_state}>Loading images…</p>
            )}
          </>
        )}

        {activeTab === "videos" && (
          <div className={styles.gallery_images_container}>
            {videoLinks
              .filter(
                (video) =>
                  video?.url?.trim()?.length &&
                  video?.title?.trim()?.length &&
                  video?.isVisible !== false,
              )
              .map((video, index) => (
                <motion.a
                  key={index}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
                  whileHover={{ y: -6 }}
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
                      <FaPlay size={18} />
                    </div>
                  </div>
                  <div
                    className={`${styles.gallery_caption} ${styles.video_caption}`}
                  >
                    <p className={styles.gallery_caption_title}>
                      {video.title}
                    </p>
                    <span className={styles.gallery_caption_subtitle}>
                      ▶ Watch on YouTube
                    </span>
                  </div>
                </motion.a>
              ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className={styles.lightbox_overlay}
            onClick={() => setActiveImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className={styles.lightbox_content}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                className={styles.lightbox_close}
                onClick={() => setActiveImage(null)}
                aria-label="Close image preview"
              >
                <HiXMark size={22} />
              </button>
              <button
                className={styles.lightbox_download}
                onClick={() => downloadImage(activeImage)}
                aria-label="Download image"
              >
                <HiOutlineDownload size={20} />
              </button>
              <img
                src={activeImage.src}
                alt={activeImage.caption.title}
                className={styles.lightbox_image}
              />
              <div className={styles.lightbox_caption}>
                <h4>{activeImage.caption.title}</h4>
                {activeImage.caption.subCaption && (
                  <p>{activeImage.caption.subCaption}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
