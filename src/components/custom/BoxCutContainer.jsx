export function BoxCutContainer({
  imageUrl = "/aea3d9f88604f3c10386fe4fff5c941e8292bb85.jpg",
  gradient = "linear-gradient(135deg, rgba(72, 52, 212, 0.4) 0%, rgba(72, 52, 212, 0.2) 100%)",
  className = "w-full h-96",
  text = null,
  textClassName = "text-white text-3xl md:text-4xl font-bold leading-tight",
  textPosition = "bottom-12 left-6 md:left-8",
}) {
  const style = {
    "--hero-image-url": imageUrl ? `url('${imageUrl}')` : `url('/healthcare-professional-woman-in-medical-coat.jpg')`,
    "--hero-gradient": gradient,
  }

  return (
    <div className={`relative flex items-center justify-center ${className}`} style={style}>
      <div className="outer">
        <div className="inner" />
      </div>
      {text && (
        <div className={`absolute ${textPosition} z-10 max-w-xs md:max-w-xs`}>
          <p className={textClassName}>{text}</p>
        </div>
      )}
    </div>
  )
}
