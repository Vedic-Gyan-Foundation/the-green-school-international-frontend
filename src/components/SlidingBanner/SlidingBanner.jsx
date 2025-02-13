import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import styles from "./SlidingBanner.module.css";
import { register } from "swiper/element/bundle";
import axiosInstance from "../../api/axiosInstance";
import { baseURL } from "../../api/axiosInstance";
// register Swiper custom elements
register();

const bannerListStatic = [
  {
    desktopImg: "/assets/banners/slider_banner_1_desktop.jpg",
  },
  {
    desktopImg: "/assets/banners/slider_banner_2_desktop.jpg",
  },
  {
    desktopImg: "/assets/banners/slider_banner_cbse_1.jpg",
  },
  {
    desktopImg: "/assets/banners/slider_banner_cbse_2.jpg",
  },
];

const SlidingBanner = () => {
  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`galleries/list?category=home_banner`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setBannerList(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching banner data:", error);
      });
  }, []);

  return (
    <div className="relative overflow-hidden">
      <swiper-container
        loop="true"
        pagination="true"
        scrollbar="true"
        autoplay="true"
        navigation
        class="w-full"
      >
        {bannerListStatic?.map((banner, index) => (
          <swiper-slide
            key={index}
            class="flex justify-center items-center overflow-hidden"
          >
            {/* Enforced Height */}
            <img
              src={banner?.desktopImg}
              alt={`Banner ${index + 1}`}
              className="w-full h-[500px] md:h-[600px] object-fill"
              loading="lazy"
            />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default SlidingBanner;
