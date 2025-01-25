import React from 'react'
import Button from '../Button/Button'
import styles from './BlogCard.module.css'
import { baseURL } from '../../api/axiosInstance'
import { useNavigate } from 'react-router-dom'

const BlogCard = ({id,image,title,content}) => {
  const navigate = useNavigate()
  return (
    <div className={styles.blog_card}>
        <img src={baseURL+image} className='w-[300px]' alt="" />
        <div className={styles.blog_desc}>
            <h3>{title}</h3>
            <p>Blog desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe distinctio nihil esse!</p>
            <Button clickHandler={()=> navigate(`/blogdetails/${id}`)} />
        </div>
    </div>
  )
}

export default BlogCard