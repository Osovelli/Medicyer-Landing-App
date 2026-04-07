export function PharmacyCard({
  imageUrl,
  name,
  address,
  category,
  onSelect,
}) {
  return (
    <div 
      onClick={onSelect}
      className="group relative overflow-hidden rounded-3xl cursor-pointer transition-transform hover:scale-105"
    >
      <div className="relative h-64 xl:h-full w-full bg-gray-200">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#1a1a4d]/80"></div>
        
        {/* Text content positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5 text-left text-white">
          <p className="text-sm font-normal opacity-80 mb-1">{category || 'Pharmacy'}</p>
          <h3 className="font-semibold text-lg mb-1">{name}</h3>
          <hr />
          <p className="text-xs opacity-75 line-clamp-2">{address || ''}</p>
        </div>
      </div>
    </div>
  )
}
