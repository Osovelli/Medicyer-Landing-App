import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogCard({ id, title, image, date }) {
  return (
    <Link to={`/blog/${id}`}>
      <div className="group cursor-pointer h-full shadow-sm rounded-lg">
        {/* Image Container */}
        <div className="relative h-52 rounded-xl overflow-hidden mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4 text-left">
          <h3 className="text-base font-semibold text-sky line-clamp-3 mb-2 group-hover:text-blue-900 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
    </Link>
  );
}
