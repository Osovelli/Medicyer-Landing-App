import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Minus, Plus, StarIcon } from "lucide-react"
import { Heart2Icon } from "../custom/Icons"
import { CustomButton } from "../custom/CustomButton"

export function DrugDetailsInfo({
  name,
  description,
  loyaltyPoints,
  price,
  rating,
  about,
  onAddToCart,
  onWishlist,
}) {
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleQuantityChange = (delta) => {
    setQuantity(Math.max(1, quantity + delta))
  }

  return (
    <div className="flex flex-col justify-evenly gap-6 bg-white shadow-sm sm:h-142 rounded-lg p-4 text-left">
        <h1 className="text-3xl font-normal tracking-wide sm:max-w-md text-sky">{name}</h1>
      {/* Header with title and rating */}
      <div className="flex items-start justify-between gap-4">
        {/* <div className="flex-1">
          <p className="text-gray-600 text-sm">{description}</p>
        </div> */}

        {/* Loyalty points */} 
        <div className="text-emerald-600 font-normal text-sm">+{loyaltyPoints} points</div>

        {/* Rating */}
        <div className="flex items-center gap-1  px-3 py-1 rounded-full whitespace-nowrap">
          <StarIcon fill='#F0D869' stroke="#F0D869" className={'w-6 h-6'} />
          <span className="font-semibold text-gray-900">{rating}</span>
        </div>
      </div>

      {/* Price section */}
      <div className="flex items-center justify-between">
        <div className="text-2xl font-normal text-sky">₦ {price.toLocaleString()}</div>

        {/* Quantity selector */}
        <div className="flex items-center gap-3 rounded-lg px-2 py-1">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="flex items-center rounded-4xl bg-gray-100 justify-center w-8 h-8 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Minus className="w-4 h-4 text-red-500" />
          </button>
          <span className="font-semibold text-gray-900 px-2">{quantity}</span>
          <button
            onClick={() => handleQuantityChange(1)}
            className="flex items-center rounded-4xl bg-gray-100 justify-center w-8 h-8 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Plus className="w-4 h-4 text-green-500" />
          </button>
        </div>
      </div>

      {/* About section */}
      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-normal text-sky">About</h2>
        <p className="text-sky text-sm leading-relaxed sm:max-w-md p-6 bg-gray-50">
          {about}
          <button className="text-purple-600 hover:text-purple-700 font-medium ml-1 cursor-pointer">Read more</button>
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 pt-4">
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`flex items-center justify-center w-12 h-12 rounded-lg border border-sky transition-colors ${
            isWishlisted ? "bg-red-50 border-red-200" : "border-gray-200 hover:bg-gray-50"
          }`}
        >
          <Heart2Icon className={`w-5 h-5 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
        </button>
        <CustomButton
          
          onClick={() => onAddToCart(quantity)}
          className="flex-1 hover:bg-blue-900 text-white rounded-lg h-12 font-semibold"
        >
          Add to Cart
        </CustomButton>
      </div>
    </div>
  )
}
