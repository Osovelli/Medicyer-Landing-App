export function PharmacyCard({ imageUrl, category, title}) {
return (
    <div className="relative flex flex-col rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
        {/* Image area (relative so we can overlay) */}
        <div className="w-full h-48 md:h-56 shrink-0 relative">
            <img
                src={imageUrl || "/placeholder.svg"}
                alt={title}
                className="w-full h-full object-cover block"
            />

            {/* slight blue hue overlay */}
            <div className="absolute inset-0 bg-blue-600 opacity-20 pointer-events-none" />

            {/* content on top of the image */}
            <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end items-start z-10">
                <p className="text-xs md:text-sm text-white font-normal">{category}</p>
                <h3 className="text-sm md:text-lg font-semibold text-white mt-1">{title}</h3>
            </div>
        </div>
    </div>
)
}
