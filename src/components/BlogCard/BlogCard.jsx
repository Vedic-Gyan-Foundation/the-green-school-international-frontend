import { motion } from "framer-motion";
import { HiArrowLongRight } from "react-icons/hi2";
import { baseURL } from "../../api/axiosInstance";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ id, image, title, author, readTime, postedOn }) => {
  const navigate = useNavigate();
  const imgSrc =
    image && (image.startsWith("/") || image.startsWith("http"))
      ? image
      : baseURL + image;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group w-full sm:w-[340px] bg-white rounded-3xl overflow-hidden ring-1 ring-brand-50 shadow-soft hover:shadow-elevated transition-all duration-500"
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={imgSrc}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          alt={title || "Blog post"}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-transparent to-transparent opacity-70" />
        {readTime && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-brand-700 text-xs font-semibold tracking-wide">
            {readTime}
          </span>
        )}
      </div>

      <div className="flex flex-col py-5 px-5 gap-3">
        <h3 className="font-display text-lg sm:text-xl font-semibold leading-snug text-brand-900 line-clamp-3 group-hover:text-brand-700 transition-colors">
          {title}
        </h3>

        <div className="flex flex-col text-sm text-ink-500 gap-0.5">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-medium text-ink-700">{author}</span>
            {postedOn && (
              <>
                <span className="text-ink-300">•</span>
                <span>
                  {new Date(postedOn).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate(`/article/${id}`)}
          className="mt-1 inline-flex items-center gap-1.5 self-start text-brand-700 font-semibold text-sm group/btn"
        >
          Read article
          <HiArrowLongRight className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </motion.article>
  );
};

export default BlogCard;
