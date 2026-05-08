import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { Link } from "react-router-dom"
import { Heart2Icon } from "../custom/Icons"
import { CustomButton } from "../custom/CustomButton"

export function DrugCard({ id, name, description, imageUrl, onAddToCart, onWishlist, className }) {
  return (
    <Link
    to={`/pharmacy/drugs/${id}`}
    className={`flex flex-col gap-4 cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow ${className}`}
    >
      {/* Drug Image */}
      <div className="w-full bg-linear-to-br from-blue-100 to-blue-50">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 px-4 pb-4 text-start">
        <h3 className="font-normal text-lg text-sky">{name}</h3>
        <p className="text-xs text-normal text-[#495B69] line-clamp-2">{description}</p>

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            onClick={() => onAddToCart?.(id)}
            variant="default"
            size="sm"
            className="flex-1 bg-[#1a1a4d] hover:bg-[#0f0f2e] text-white rounded-lg h-9"
          >
            Add to Cart
          </Button>
          <Button onClick={() => onWishlist?.(id)} variant="outline" className="border border-[#252B61] p-2">
            <Heart2Icon className="text-yellow-300" />
          </Button>
        </div>
      </div>
    </Link>
  )
}
