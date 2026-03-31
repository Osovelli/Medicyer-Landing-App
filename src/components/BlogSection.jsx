import { BlogCard } from "./custom/BlogCard"

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      image: "/tablet.jpg",
      title: "Research shows a link between mental health & remote work - ask Deen",
      author: "Ralph Edwards",
      authorImage: "/orange-avatar.png",
      postedDaysAgo: 5,
    },
    {
      id: 2,
      image: "/tablet.jpg",
      title: "Research shows a link between mental health & remote work - ask Deen",
      author: "Ralph Edwards",
      authorImage: "/orange-avatar.png",
      postedDaysAgo: 5,
    },
    {
      id: 3,
      image: "/tablet.jpg",
      title: "Research shows a link between mental health & remote work - ask Deen",
      author: "Ralph Edwards",
      authorImage: "/orange-avatar.png",
      postedDaysAgo: 5,
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">Latest blog & news</h2>
          <p className="text-center text-gray-600 max-w-2xl font-normal text-base">
            Sed nec pharetra felis, in ultrices neque. Phasellus varius semper tellus, ac imperdiet erat commodo id.
            Aenean lobortis justo et velit ornare malesuada.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              title={post.title}
              author={post.author}
              authorImage={post.authorImage}
              postedDaysAgo={post.postedDaysAgo}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
