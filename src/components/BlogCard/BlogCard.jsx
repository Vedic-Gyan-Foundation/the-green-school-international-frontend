// import React from "react";
import Button from "../Button/Button";
// import styles from "./BlogCard.module.css";
import { baseURL } from "../../api/axiosInstance";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ id, image, title, author, readTime, postedOn }) => {
  const navigate = useNavigate();
  const imgSrc =
    image && (image.startsWith("/") || image.startsWith("http"))
      ? image
      : baseURL + image;
  return (
    <div className="w-[350px] bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={imgSrc}
        className="w-full h-48 object-cover"
        alt={`blog-img-${id}`}
      />

      <div className="flex flex-col py-4 px-5 gap-4 flex-grow">
        <h3 className="text-xl font-semibold leading-snug text-gray-900">
          {title}
        </h3>

        {/* Metadata Section */}
        <div className="flex flex-col text-sm text-gray-500 gap-[2px]">
          <div className="flex items-center gap-1">
            <span className="font-medium text-gray-700">{author}</span>
            <span>•</span>
            <span>
              {new Date(postedOn).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
          <p className="italic text-gray-500">{readTime} read</p>
        </div>

        <Button
          className="mt-2"
          clickHandler={() => navigate(`/article/${id}`)}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
