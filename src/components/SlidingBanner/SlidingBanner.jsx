import React, { useState, useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import axiosInstance, { baseURL } from "../../api/axiosInstance";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// register Swiper custom elements
register();

const bannerListStatic = [
  {
    desktopImg: "/assets/banners/slider_banner_1_desktop.jpg",
  },
  {
    desktopImg: "/assets/banners/slider_banner_s.png",
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
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axiosInstance.get(
          `galleries/list?category=home_banner`
        );
        if (
          response.data &&
          response.data.data &&
          response.data.data.length > 0
        ) {
          const mappedBanners = response.data.data.map((item) => ({
            desktopImg: item.image
              ? `${baseURL}${item.image}`
              : item.url || item.desktopImg,
          }));
          setBannerList(mappedBanners);
        }
      } catch (error) {
        console.error("Error fetching banner data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  const banners = bannerList.length > 0 ? bannerList : bannerListStatic;

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden group">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-800"></div>
        </div>
      )}

      <swiper-container
        ref={swiperRef}
        loop="true"
        pagination="true"
        autoplay-delay="5000"
        autoplay-disable-on-interaction="false"
        class="w-full h-full"
        effect="fade"
        style={{
          "--swiper-pagination-color": "#ffffff",
          "--swiper-pagination-bullet-inactive-color": "#ffffff",
          "--swiper-pagination-bullet-inactive-opacity": "0.4",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bottom": "30px",
        }}
      >
        {banners.map((banner, index) => (
          <swiper-slide
            key={index}
            class="relative w-full h-full flex justify-center items-center overflow-hidden bg-black"
          >
            <img
              src={banner.desktopImg}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </swiper-slide>
        ))}
      </swiper-container>

      {/* Custom Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-green-800/80 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center border border-white/20"
        onClick={() => swiperRef.current?.swiper?.slidePrev()}
        aria-label="Previous Slide"
      >
        <IoIosArrowBack size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-green-800/80 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center border border-white/20"
        onClick={() => swiperRef.current?.swiper?.slideNext()}
        aria-label="Next Slide"
      >
        <IoIosArrowForward size={24} />
      </button>
    </div>
  );
};

export default SlidingBanner;
