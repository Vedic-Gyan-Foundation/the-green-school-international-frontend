import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";
import Header from "../../components/Header/Header";
import styles from "./BlogDetails.module.css";
import Loader from "../../components/Loader/Loader";
import staticBlogs from "../../data/staticBlogs";
import SEO from "../../components/SEO/SEO";
import { articleSchema } from "../../utils/seoSchemas";

const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const local = staticBlogs.find((b) => String(b.id) === String(id));
    if (local) setBlog(local);
  }, [id]);

  const renderContent = (content) => {
    if (!content) return null;

    const elements = [];
    let paragraphBuffer = [];
    let listItems = [];
    let listType = null;
    let elementKey = 0;
    let pendingListBreak = false;

    const flushParagraph = () => {
      if (paragraphBuffer.length === 0) return;
      const paragraphText = paragraphBuffer.join(" ");
      const isHeading =
        paragraphBuffer.length === 1 &&
        paragraphBuffer[0].split(" ").length <= 12 &&
        !/[.!?]/.test(paragraphBuffer[0]);

      if (isHeading) {
        elements.push(
          <h3 key={`heading-${elementKey}`} className={styles.blog_heading}>
            {paragraphBuffer[0]}
          </h3>
        );
      } else {
        elements.push(
          <p
            key={`paragraph-${elementKey}`}
            className={styles.blog_paragraph}
          >
            {paragraphText}
          </p>
        );
      }
      elementKey += 1;
      paragraphBuffer = [];
    };

    const flushList = () => {
      if (listItems.length === 0) return;
      const ListTag = listType === "ol" ? "ol" : "ul";
      const currentKey = elementKey;
      elements.push(
        <ListTag
          key={`list-${currentKey}`}
          className={`${styles.blog_list} ${
            listType === "ol" ? styles.blog_ordered : styles.blog_unordered
          }`}
        >
          {listItems.map((item, index) => {
            const { heading, body } = item;
            return (
              <li
                key={`list-${currentKey}-item-${index}`}
                className={styles.blog_list_item}
              >
                <span className={styles.blog_list_heading}>{heading}</span>
                {body && (
                  <>
                    {" "}
                    <span className={styles.blog_list_body}>{body}</span>
                  </>
                )}
              </li>
            );
          })}
        </ListTag>
      );
      elementKey += 1;
      listItems = [];
      listType = null;
      pendingListBreak = false;
    };

    const lines = content.replace(/\r\n/g, "\n").split("\n");

    lines.forEach((rawLine) => {
      let line = rawLine.trim();
      if (!line) {
        flushParagraph();
        if (listType) pendingListBreak = true;
        else flushList();
        return;
      }
      line = line.replace(/^:\s*/, "");

      const numberedMatch = line.match(/^\d+\.\s+(.*)$/);
      const bulletMatch = line.match(/^[-*]\s+(.*)$/);

      if (numberedMatch || bulletMatch) {
        flushParagraph();
        const nextType = numberedMatch ? "ol" : "ul";
        if (listType && listType !== nextType) flushList();
        if (!listType) listType = nextType;
        else if (pendingListBreak) pendingListBreak = false;
        const itemText = (numberedMatch
          ? numberedMatch[1]
          : bulletMatch[1]
        ).trim();
        listItems.push({ heading: itemText, body: "" });
        pendingListBreak = false;
      } else if (listType) {
        if (pendingListBreak) {
          flushList();
          pendingListBreak = false;
          paragraphBuffer.push(line);
          return;
        }
        const lastIndex = listItems.length - 1;
        if (lastIndex >= 0) {
          const currentItem = listItems[lastIndex];
          const updatedBody = `${currentItem.body} ${line}`.trim();
          currentItem.body = updatedBody;
        } else {
          paragraphBuffer.push(line);
        }
      } else {
        paragraphBuffer.push(line);
      }
    });

    flushParagraph();
    flushList();
    return elements;
  };

  // Quick text-derived description: first sentence (or 160-char excerpt)
  const blogDescription = blog?.content
    ? blog.content
        .replace(/\s+/g, " ")
        .split(/[.!?]/)[0]
        .trim()
        .slice(0, 160)
    : undefined;

  return (
    <>
      {Object.keys(blog).length > 0 ? (
        <>
          <SEO
            title={blog.title}
            description={blogDescription}
            image={blog.banner}
            path={`/blogdetails/${id}`}
            type="article"
            jsonLd={articleSchema({
              title: blog.title,
              description: blogDescription,
              image: blog.banner,
              datePublished: blog.created_at || new Date().toISOString(),
              path: `/blogdetails/${id}`,
            })}
          />
          <Header title={"Blogs"} />
          <article className={styles.blog_section}>
            <Link to="/blogs" className={styles.back_link}>
              <HiArrowLongLeft /> Back to all stories
            </Link>
            <h2 className={styles.blog_title}>{blog.title}</h2>
            <div className={styles.meta_row}>
              {blog.author && <span>{blog.author}</span>}
              {blog.author && <span className={styles.dot}>•</span>}
              <span>The Green School International</span>
            </div>
            {blog.banner && (
              <div className={styles.blog_image_wrap}>
                <img
                  src={blog.banner}
                  alt={blog.title || "Blog cover"}
                  className={styles.blog_image}
                />
              </div>
            )}
            <div className={styles.blog_content}>
              {renderContent(blog.content)}
            </div>
          </article>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default BlogDetails;
