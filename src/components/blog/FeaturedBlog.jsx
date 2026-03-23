import React from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedBlog({
  id,
  title,
  description,
  image,
  date,
  category,
}) {
  return (
    <Link to={`/blog/${id}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden h-64 lg:h-auto">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center text-left">
          {category && (
            <p className="text-sm font-medium text-gray-600 mb-3">{category}</p>
          )}
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 line-clamp-3">
            {title}
          </h2>
          <p className="text-gray-700 mb-6 line-clamp-4 leading-relaxed">
            {description}
          </p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
    </Link>
  );
}
