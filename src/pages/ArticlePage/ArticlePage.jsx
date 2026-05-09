import { useEffect, useState } from "react";
import "./BlogPage.css";
import { useParams, Link } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";
import staticBlogs from "../../data/staticBlogs";
import SEO from "../../components/SEO/SEO";
import { articleSchema } from "../../utils/seoSchemas";

const BlogPage = () => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    let mounted = true;
    async function fetchBlog() {
      try {
        const blogRequest = await fetch(
          `https://api.greenschoolguwahati.com/v1/blog/readOne/${id}`
        );
        const blog = await blogRequest.json();
        if (!mounted) return;
        if (blog?.success) setArticle(blog?.data || {});
      } catch (e) {
        console.error(e);
      } finally {
        // Fallback to local static if API failed
        const local = staticBlogs.find((b) => String(b.id) === String(id));
        if (local && mounted) {
          setArticle((prev) =>
            Object.keys(prev).length === 0
              ? {
                  title: local.title,
                  content: local.content
                    ? `<p>${local.content
                        .replace(/\n\n/g, "</p><p>")
                        .replace(/\n/g, "<br/>")}</p>`
                    : "",
                  cover_image: local.banner,
                  author: "The Green School",
                  read_time: "5 min",
                  created_at: new Date().toISOString(),
                }
              : prev
          );
        }
        if (mounted) setLoading(false);
      }
    }
    fetchBlog();
    return () => {
      mounted = false;
    };
  }, [id]);

  // Strip HTML for description
  const articleDescription = article?.content
    ? article.content
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 160)
    : undefined;

  return (
    <div className="min-h-screen bg-white">
      {article?.title && (
        <SEO
          title={article.title}
          description={articleDescription}
          image={article.cover_image}
          path={`/article/${id}`}
          type="article"
          jsonLd={articleSchema({
            title: article.title,
            description: articleDescription,
            image: article.cover_image,
            datePublished: article.created_at,
            author: article.author,
            path: `/article/${id}`,
          })}
        />
      )}
      <article className="w-full mx-auto bg-white">
        {/* Cover */}
        <div className="relative w-full h-[420px] md:h-[360px] sm:h-[280px] overflow-hidden bg-brand-950">
          {article?.cover_image ? (
            <>
              <img
                src={article.cover_image}
                alt="Blog cover"
                className="w-full h-full object-cover transform-gpu scale-100 transition-transform duration-[2000ms] ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/65 via-brand-900/20 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900" />
          )}

          {/* Back link */}
          <Link
            to="/blogs"
            className="absolute top-6 left-6 z-10 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-sm font-semibold hover:bg-white/25 transition-colors"
          >
            <HiArrowLongLeft /> Back to blogs
          </Link>

          <div className="absolute bottom-8 left-0 right-0 max-w-[820px] mx-auto px-6 z-[1]">
            <h1 className="text-white font-display font-extrabold text-3xl md:text-4xl leading-tight tracking-tight text-balance">
              {article?.title}
            </h1>
            <div className="mt-4 flex items-center flex-wrap gap-2 text-sm text-white/85">
              {article?.author && (
                <>
                  <span className="font-semibold">{article.author}</span>
                  <span className="text-white/40">•</span>
                </>
              )}
              {article?.created_at && (
                <span>
                  {new Date(article.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              )}
              {article?.read_time && (
                <>
                  <span className="text-white/40">•</span>
                  <span>{article.read_time} read</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-[820px] mx-auto px-6 md:px-8 sm:px-5 py-12 md:py-10 sm:py-8">
          {loading && !article?.content ? (
            <p className="text-ink-400 text-center py-12">Loading article…</p>
          ) : (
            <div
              className="article-body"
              dangerouslySetInnerHTML={{
                __html: article?.content || "<p>No content available.</p>",
              }}
            />
          )}
        </div>
      </article>
    </div>
  );
};

export default BlogPage;
