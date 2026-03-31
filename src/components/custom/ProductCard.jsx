export function ProductCard({ image, name, description }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="w-full h-48 bg-gray-200 overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 text-left">
        <h3 className="font-normal text-xl text-sky mb-2">{name}</h3>
        <p className="text-[#495B69] text-sm font-normal max-w-48 leading-4 line-clamp-2">{description}</p>
      </div>
    </div>
  )
}
