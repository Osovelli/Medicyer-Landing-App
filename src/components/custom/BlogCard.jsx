export function BlogCard({ image, title, author, authorImage, postedDaysAgo }) {
  return (
    <div className="flex flex-col min-w-67 lg:w-[358px] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Blog Image */}
      <div className="relative w-full lg:w-full h-56 rounded-b-xl overflow-hidden bg-gray-200">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Card Content */}
      <div className="flex flex-col p-6 gap-8">
        {/* Blog Title */}
        <h3 className="text-base text-left font-semibold text-[#252B61] line-clamp-2">{title}</h3>

        {/* Author Info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-orange-500 overflow-hidden shrink-0">
            <img src={authorImage || "/placeholder.svg"} alt={author} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-start font-semibold text-[#252B61]">{author}</p>
            <p className="text-xs font-normal text-[#575757]">Posted: {postedDaysAgo} days ago</p>
          </div>
        </div>
      </div>
    </div>
  )
}
