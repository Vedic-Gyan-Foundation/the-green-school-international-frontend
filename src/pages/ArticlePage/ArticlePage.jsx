import React, { useEffect, useState } from "react";
import "./BlogPage.css"; // Import the CSS file
import { useParams } from "react-router-dom";

const BlogPage = () => {
  // Sample blog data - replace with your actual data
  const blogData = {
    title: "The Future of Web Development: Trends to Watch in 2025",
    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop",
    author: "John Developer",
    date: "November 25, 2025",
    readTime: "8 min read",
    content: `
      <p>Web development is constantly evolving, and staying ahead of the curve is essential for developers who want to remain competitive. In this article, we'll explore the most significant trends shaping the future of web development.</p>
      
      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is revolutionizing how we write code. AI-powered assistants can now help developers write more efficient code, catch bugs before they become problems, and even suggest optimal architecture patterns.</p>
      
      <h3>Key Benefits:</h3>
      <ul>
        <li>Faster development cycles</li>
        <li>Reduced bug count</li>
        <li>Better code quality</li>
        <li>Automated testing and debugging</li>
      </ul>
      
      <h2>2. Progressive Web Applications (PWAs)</h2>
      <p>PWAs continue to bridge the gap between web and native applications. They offer offline functionality, push notifications, and app-like experiences without requiring users to download anything from an app store.</p>
      
      <blockquote>
        "Progressive Web Apps represent the future of cross-platform development, offering the best of both web and mobile worlds."
      </blockquote>
      
      <h2>3. WebAssembly Adoption</h2>
      <p>WebAssembly (Wasm) is gaining traction as developers seek better performance for web applications. It allows code written in languages like C++, Rust, and Go to run in browsers at near-native speed.</p>
      
      <h3>Use Cases:</h3>
      <ol>
        <li>High-performance gaming applications</li>
        <li>Video and image editing tools</li>
        <li>Scientific simulations</li>
        <li>Cryptocurrency mining</li>
      </ol>
      
      <h2>4. Serverless Architecture</h2>
      <p>Serverless computing is transforming backend development. Developers can focus on writing code while cloud providers handle infrastructure management, scaling, and maintenance.</p>
      
      <p>The advantages include reduced operational costs, automatic scaling, and faster time to market. Major cloud providers like AWS, Azure, and Google Cloud all offer robust serverless solutions.</p>
      
      <h2>5. Enhanced Cybersecurity Measures</h2>
      <p>As cyber threats become more sophisticated, web security is more critical than ever. Modern web development emphasizes security-first approaches with features like:</p>
      
      <ul>
        <li>Zero-trust architecture</li>
        <li>End-to-end encryption</li>
        <li>Multi-factor authentication</li>
        <li>Regular security audits</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The future of web development is exciting and full of opportunities. By embracing these trends and continuously learning, developers can create faster, more secure, and more engaging web experiences. The key is to stay curious, experiment with new technologies, and always prioritize user experience.</p>
      
      <p>What trends are you most excited about? Share your thoughts and let's continue the conversation about the future of web development.</p>
    `,
  };

  const [article, setArticle] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchBlog() {
      const blogRequest = await fetch(
        `https://api.greenschoolguwahati.com/v1/blog/readOne/${id}`
      );
      const blog = await blogRequest.json();
      if (blog?.success) {
        setArticle(blog?.data);
      }
      console.log(blog);
    }
    fetchBlog();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <article className="w-full mx-auto bg-white">
        {/* Cover Image Section */}
        <div className="relative w-full h-[400px] md:h-[350px] sm:h-[280px] overflow-hidden bg-gray-900">
          <img
            src={article?.cover_image}
            alt="Blog cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        {/* Article Content */}
        <div className="max-w-[800px] mx-auto px-6 md:px-8 sm:px-5 py-12 md:py-10 sm:py-8">
          {/* Title Section */}
          <header className="mb-12 md:mb-8 sm:mb-8 pb-6 border-b border-gray-200">
            <h1 className="text-[42px] md:text-[36px] sm:text-[28px] font-bold leading-tight text-gray-900 mb-5 sm:mb-4 tracking-tight">
              {article?.title}
            </h1>
            <div className="flex items-center flex-wrap gap-2 text-sm sm:text-[13px] text-gray-600">
              <span className="font-medium text-gray-900">
                {article?.author}
              </span>
              <span className="text-gray-300">•</span>
              <span>
                {" "}
                {new Date(article?.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <span className="text-gray-300">•</span>
              <span>{article?.read_time} read</span>
            </div>
          </header>

          {/* Blog Content - CSS file handles HTML from dangerouslySetInnerHTML */}
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: article?.content }}
          />
        </div>
      </article>
    </div>
  );
};

export default BlogPage;
