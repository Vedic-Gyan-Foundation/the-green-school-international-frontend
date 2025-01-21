import React,{useState,useEffect} from 'react'
import styles from "./Gallery.module.css"
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ModalImage from "react-modal-image";
import axiosInstance from '../../api/axiosInstance'
import { baseURL } from '../../api/axiosInstance'


const Gallery = () => {
  const [galleryList,setGalleryList] = useState([]) 
  useEffect(()=> {
    axiosInstance.get(`galleries/list?category=galleries`,{
      headers: {
      'Content-Type': 'application/json',
}
}).then(response=> {
  console.log(response)
  setGalleryList(response.data.data)
})
  },[])
  return (
    <>
      
        <Header title='Gallery'/>
        <div className={styles.gallery_images}>
            <h2>Gallery Images</h2>
            {galleryList ? <div className={styles.gallery_images_container}>
              {galleryList.map(item=> (
                   <ModalImage
                      small={baseURL+item.image}
                      large={baseURL+item.image}
                      className={styles.gallery_image}
                      loading='lazy'
                      />
                  ))}
           
            
            </div>: 
            <p>No Images :-(</p>
            }
            
        
        </div>
       
    </>
  )
}

export default Gallery