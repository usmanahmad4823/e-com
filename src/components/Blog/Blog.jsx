import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const location = useLocation();

  const blogs = [
    {
      id: 1,
      title: "Top 5 Gadgets You Must Have in 2025",
      shortDesc:
        "Technology is evolving faster than ever. Here’s our list of the top 5 gadgets that can make your life smarter and more convenient this year.",
      fullDesc:
        "Technology is evolving faster than ever. Here’s our list of the top 5 gadgets that can make your life smarter and more convenient this year. \n\n1. Smart Glasses – A blend of AR and real life. \n2. AI-powered Assistants – Control your entire home seamlessly. \n3. Foldable Smartphones – Flexibility and innovation combined. \n4. Wearable Health Devices – Monitor your health in real time. \n5. Ultra-Fast Chargers – Charge your phone in just minutes. \n\nThese gadgets aren’t just cool—they’re designed to make your life easier.",
      image:
        " https://www.sammobile.com/wp-content/uploads/2021/09/Galaxy-S21-Ultra-review-31-scaled.jpg",
      author: "Shakoor Butt",
      date: "Aug 25, 2025",
    },
    {
      id: 2,
      title: "How to Choose the Right Smartphone",
      shortDesc:
        "Buying a smartphone can be confusing with so many options available. Here are some tips to help you choose the right one for your needs.",
      fullDesc:
        "Buying a smartphone can be confusing with so many options available. Here’s how to pick the right one:\n\n• Identify your needs (camera, gaming, productivity). \n• Compare specs (RAM, storage, battery life). \n• Consider your budget. \n• Look for after-sales service and warranty. \n• Don’t just go for brand—focus on value. \n\nBy evaluating these factors, you can find a phone that fits both your lifestyle and budget.",
      image:
        "https://www.cnet.com/a/img/resize/3327a432adbf436fc90d41c053d99cae9e503dbe/hub/2023/07/05/ffb5dc55-6884-4bb7-b9e1-6c14fe3d841c/samsungs.jpg?auto=webp&fit=crop&height=900&width=1200",
      author: "Shafaqt Cheema",
      date: "Aug 20, 2025",
    },
    {
      id: 3,
      title: "Future of Electronics in Pakistan",
      shortDesc:
        "From AI-powered devices to affordable smart gadgets, the future of electronics in Pakistan looks exciting. Here’s what you can expect.",
      fullDesc:
        "From AI-powered devices to affordable smart gadgets, the future of electronics in Pakistan looks bright.\n\n• Local manufacturing is increasing, making devices cheaper.\n• E-commerce platforms are providing easy access.\n• Government incentives will boost technology adoption.\n• Smart homes and IoT devices are becoming common.\n\nPakistan is on track to become a competitive electronics hub in South Asia.",
      image:
        "https://www.techjuice.pk/wp-content/uploads/2022/09/Apple14-x-Samsung-22.jpg",
      author: "Mushtaq Chudhary",
      date: "Aug 18, 2025",
    },
  ];

  // If user clicked "Read More" → show single blog details
  if (id) {
    const blog = blogs.find((b) => b.id === parseInt(id));
    if (!blog) {
      return (
        <div className="max-w-[800px] mx-auto py-8 px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Blog Not Found</h2>
          <Link to="/blog" className="text-blue-600 underline">
            Back to Blog
          </Link>
        </div>
      );
    }

    return (
      <div className="max-w-[800px] mx-auto py-8 px-6">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-80 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <div className="flex items-center justify-between text-gray-500 text-sm mb-6">
          <span>✍️ {blog.author}</span>
          <span>{blog.date}</span>
        </div>
        <p className="text-gray-700 leading-7 whitespace-pre-line">
          {blog.fullDesc}
        </p>

        <div className="mt-8">
          <Link
            to="/blog"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Default → Show all blog posts
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r bg-black text-white py-8 m-5 rounded-lg px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Blog</h1>
        <p className="max-w-2xl mx-auto text-xs">
          Stay updated with the latest news, reviews, and tips in the world of
          electronics and technology.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="max-w-[1200px] mx-auto py-16 px-6 grid md:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 text-sm leading-6 mb-4">
                {blog.shortDesc}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>✍️ {blog.author}</span>
                <span>{blog.date}</span>
              </div>
              <Link
                to={`/blog/${blog.id}`}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;
