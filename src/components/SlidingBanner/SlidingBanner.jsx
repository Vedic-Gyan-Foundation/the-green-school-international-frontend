import React,{useState,useEffect} from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import styles from './SlidingBanner.module.css'
import homebannerstdimg from "../../../public/assets/home/banner_student.png"
import { register } from 'swiper/element/bundle';
import axiosInstance from '../../api/axiosInstance'
import { baseURL } from '../../api/axiosInstance';
// register Swiper custom elements
register();


const SlidingBanner = () => {
  const [bannerList,setBannerList] = useState([]) 
  useEffect(()=> {
    axiosInstance.get(`galleries/list?category=home_banner`,{
      headers: {
      'Content-Type': 'application/json',
    }
    }).then(response=> {
      console.log(response)
      setBannerList(response.data.data)
    })
  },[]);

  return (
    <div className={styles.home_banner}>
    <swiper-container  loop="true" pagination="true" scrollbar="true" autoplay='true' navigation>
          <swiper-slide>
                <img src={'/assets/slider_banner_1_desktop.jpg'}  className={styles.banner_img_desktop} alt="" loading='lazy'/>
                <img src={'/assets/slider_banner_1_mobile.jpg'} className={styles.banner_img_mobile} alt="" loading='lazy'/>
          </swiper-slide>
          <swiper-slide>
                <img src={'/assets/slider_banner_2_desktop.jpg'}  className={styles.banner_img_desktop} alt="" loading='lazy'/>
                <img src={'/assets/slider_banner_2_mobile.jpg'} className={styles.banner_img_mobile} alt="" loading='lazy'/>
          </swiper-slide>
         
          
    </swiper-container>
    </div>
   
  )
}

export default SlidingBanner