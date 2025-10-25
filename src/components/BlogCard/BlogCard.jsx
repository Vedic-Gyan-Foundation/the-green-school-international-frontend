// import React from "react";
import Button from "../Button/Button";
// import styles from "./BlogCard.module.css";
import { baseURL } from "../../api/axiosInstance";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ id, image, title }) => {
  const navigate = useNavigate();
  const imgSrc =
    image && (image.startsWith("/") || image.startsWith("http"))
      ? image
      : baseURL + image;
  return (
    <div className="w-[350px] shadow-lg rounded-md flex flex-col">
      <img
        src={imgSrc}
        className="w-full rounded-t-md"
        alt={`blog-img-${id}`}
      />
      <div className="flex flex-col py-3 px-4 gap-4 flex-grow">
        <h3 className="text-lg font-bold leading-snug">{title}</h3>
        <Button clickHandler={() => navigate(`/blogdetails/${id}`)}>
          View Details
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
