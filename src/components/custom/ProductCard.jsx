export function ProductCard({ image, name, description }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="w-full h-48 bg-gray-200 overflow-hidden rounded-lg">
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 text-left">
        <h3 className="font-semibold text-lg text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  )
}
