import { useState, useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import axiosInstance, { baseURL } from "../../api/axiosInstance";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

register();

const bannerListStatic = [
  { desktopImg: "/assets/banners/slider_banner_1_desktop.jpg" },
  { desktopImg: "/assets/banners/slider_banner_s.png" },
  { desktopImg: "/assets/banners/slider_banner_cbse_1.jpg" },
  { desktopImg: "/assets/banners/slider_banner_cbse_2.jpg" },
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
        if (response.data?.data?.length > 0) {
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
    <div className="relative w-full h-[260px] sm:h-[440px] md:h-[640px] overflow-hidden group bg-brand-950">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-50 via-white to-brand-100 z-10">
          <div className="relative">
            <div className="animate-spin rounded-full h-14 w-14 border-4 border-brand-100 border-t-brand-700"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-sun-500 animate-pulse" />
            </div>
          </div>
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
            <picture className="w-full h-full">
              {banner.mobileImg && (
                <source media="(max-width: 640px)" srcSet={banner.mobileImg} />
              )}
              <img
                src={banner.desktopImg}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover transform-gpu scale-100 transition-transform duration-[6000ms] ease-out hover:scale-105"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </picture>
            {/* Soft gradient overlay for legibility */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-brand-950/15" />
          </swiper-slide>
        ))}
      </swiper-container>

      {/* Custom Navigation */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-white/15 hover:bg-brand-700/90 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center border border-white/20 hover:scale-110"
        onClick={() => swiperRef.current?.swiper?.slidePrev()}
        aria-label="Previous Slide"
      >
        <IoIosArrowBack size={22} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-white/15 hover:bg-brand-700/90 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center border border-white/20 hover:scale-110"
        onClick={() => swiperRef.current?.swiper?.slideNext()}
        aria-label="Next Slide"
      >
        <IoIosArrowForward size={22} />
      </button>

      {/* Floating bottom curve transition */}
      <svg
        className="absolute bottom-0 left-0 w-full h-12 z-10 pointer-events-none"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,40 C240,80 480,0 720,30 C960,60 1200,20 1440,50 L1440,80 L0,80 Z"
          fill="#fbfdfb"
        />
      </svg>
    </div>
  );
};

export default SlidingBanner;
