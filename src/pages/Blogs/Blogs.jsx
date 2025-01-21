import React, {useState,useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import BlogCard from '../../components/BlogCard/BlogCard'
import styles from './Blogs.module.css'
import Header from '../../components/Header/Header'
import axiosInstance from '../../api/axiosInstance'
import Loader from '../../components/Loader/Loader'


const Blogs = () => {
  const [blogsList , setBlogsList] = useState([])

  useEffect(()=> {
      axiosInstance.get(`blogs/list`,{
        headers: {
        'Content-Type': 'application/json',
        }
      }).then(response=> {
        console.log(response)
        if(response.data.http_status_code==200) setBlogsList(response.data.data)
        else setBlogsList
      })

  },[])

  return (
    <>
     
        <Header title={'Blogs'}/>
    {blogsList.length>0 ?
      <>
        
        <div className={styles.blogs}>
          {blogsList.map(blog=> (
            <BlogCard key={blog.id} id={blog.id} image={blog.banner} title={blog.title} content={blog.content}/>
          ))}
        </div>
        
      </> :
      <p className={styles.error_message}>No blogs found! Check Back later!</p> 
  }
      
    </>
  )
}

export default Blogs