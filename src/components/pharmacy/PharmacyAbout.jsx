import { MapPin, Phone, MessageCircle, ChevronLeft, Share2, StarIcon, Hospital, HeartHandshake } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PharmacyAbout({
  logoUrl,
  name,
  location,
  isVerified,
  rating,
  verifiedCount,
  purchasesCount,
  fullAddress,
  about,
  onBack,
  onShare,
}) {
  return (
    <div className="flex flex-col gap-6">
      {/* Header with back and share buttons */}
      <div className="flex items-start justify-between">
        <Button onClick={onBack} variant="ghost" size="icon-sm" className="rounded-full">
          <ChevronLeft className="size-5" />
        </Button>
        <Button onClick={onShare} variant="ghost" size="icon-sm" className="rounded-full">
          <Share2 className="size-5" />
        </Button>
      </div>

      {/* Pharmacy Header */}
      <div className="bg-gray-50 p-2 space-y-3 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="relative w-18 h-18 rounded-lg overflow-hidden bg-gray-100 shrink-0">
          <img src={logoUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div className="flex-1 text-start">
          {isVerified && (
            <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium mb-2">
              Verified
            </span>
          )}
          <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="icon-sm" className="rounded-full border-0 bg-purple-100 hover:bg-purple-200">
            <MessageCircle className="size-5 text-purple-600" />
          </Button>
          <Button variant="outline" size="icon-sm" className="rounded-full border-0 bg-green-100 hover:bg-green-200">
            <Phone className="size-5 text-green-600" />
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="px-3 py-3 rounded-lg bg-yellow-50 border border-yellow-100">
            <div className="flex items-center gap-2 mb-1">
                {/* <span className="text-xs text-gray-600">⭐</span> */}
                <StarIcon className="size-5" fill="#F0D869" color="#F0D869" />
                <div className="flex flex-col gap-0 text-start">
                    <span className="font-semibold text-gray-900">{rating}</span>
                    <span className="text-xs text-gray-600">Rating</span>
                </div>           
            </div>
                   
        </div>
        <div className="px-3 py-3 rounded-lg bg-purple-50 border border-purple-100">
            <div className="flex items-center gap-2 mb-1">
                <Hospital className="size-5 text-[#BD8CBF]" />
                <div className="flex flex-col gap-0 text-start">
                    <span className="font-semibold text-gray-900">{verifiedCount}</span>
                    <span className="text-xs text-gray-600">Verified Pharmacy</span>
                </div>           
            </div>
        </div>
        <div className="px-3 py-3 rounded-lg bg-teal-50 border border-teal-100">
            <div className="flex items-center gap-2 mb-1">
                <HeartHandshake className="size-5 text-emerald-300" />
                <div className="flex flex-col gap-0 text-start">
                    <span className="font-semibold text-gray-900">{purchasesCount}</span>
                    <span className="text-xs text-gray-600">Purchases</span>
                </div>           
            </div>
        </div>
      </div>

      {/* Address */}
      <div className="flex gap-3 items-start bg-white p-4">
        <MapPin className="size-5 text-gray-400 mt-1 shrink-0" />
        <p className="text-sm text-gray-600">{fullAddress}</p>
      </div>
      </div>

      {/* About section */}
      <div className="text-start">
        <h3 className="text-lg font-bold text-gray-900 mb-3">About</h3>
        <div className="px-4 py-3 rounded-lg bg-gray-50 border border-gray-100">
          <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
            {about}
            <button className="ml-1 text-purple-600 hover:text-purple-700 font-medium">Read more</button>
          </p>
        </div>
      </div>
    </div>
  )
}
