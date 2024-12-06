import React from 'react';

const blogs = [
  {
    title: 'The Beauty of Flower Arrangements',
    description:
      'Learn how to arrange flowers to bring a touch of nature to your home. Discover creative ways to mix colors and styles for stunning bouquets.',
    date: 'December 5, 2024',
  },
  {
    title: 'How to Care for Your Indoor Plants',
    description:
      'Proper care is essential for keeping your indoor plants thriving. In this blog, we discuss tips on watering, lighting, and maintaining healthy flowers indoors.',
    date: 'November 30, 2024',
  },
  {
    title: 'Seasonal Flowers You Should Try',
    description:
      'From spring tulips to winter pansies, seasonal flowers add variety to your home. Check out our picks for flowers that bloom beautifully throughout the year.',
    date: 'November 25, 2024',
  },
];

const BlogPage = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-[#46A358] text-center mb-10">
          Latest Blogs on Flowers
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer relative">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-[#46A358] mb-2">{blog.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{blog.date}</p>
                <p className="text-gray-700 mb-4">{blog.description}</p>
                <button className="text-[#46A358] font-semibold hover:underline absolute bottom-3 pt-3">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
