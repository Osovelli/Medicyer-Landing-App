export function ServiceCard({ imageUrl, gradient, title, subtitle, className }) {
  return (
    <div
      className={`relative w-full h-80 rounded-3xl overflow-hidden flex flex-col justify-start p-6 md:p-4 md:px-6 ${className}`}
      style={{
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: gradient,
        }}
      />

      <div className="relative z-10">
        <p className="text-white text-left text-sm md:text-lg font-normal opacity-90">{subtitle}</p>
        <h3 className="text-white text-left text-2xl md:text-3xl font-semibold mt-3 leading-tight">{title}</h3>
      </div>
    </div>
  )
}
