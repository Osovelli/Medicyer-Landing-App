import { MapPin, Phone, MessageCircle, ChevronLeft, Share2, StarIcon, Hospital, HeartHandshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChatNotificationIcon, HeartIcon, MedicalReportIcon } from "../custom/Icons"

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
          <h1 className="text-lg font-normal text-sky">{name}</h1>
          <p className="text-sm text-[#495B69]">{location}</p>
        </div>
        <div className="flex gap-3">
          <Button className="rounded-full w-12 h-12 border-0 bg-purple-100 hover:bg-purple-200">
            <ChatNotificationIcon className="w-10 h-10" />
          </Button>
          {/* <Button variant="outline" size="icon-sm" className="rounded-full border-0 bg-green-100 hover:bg-green-200">
            <Phone className="size-5 text-green-600" />
          </Button> */}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 my-4">
        <div className="px-3 py-2 rounded-lg bg-yellow-50 border border-yellow-100">
            <div className="flex items-start gap-2 mb-1">
                <StarIcon className="size-5" fill="#F0D869" color="#F0D869" />
                <div className="flex flex-col gap-0 text-start">
                    <span className="font-semibold text-lg text-sky leading-3">{rating}</span>
                    <span className="text-lg text-sky">Rating</span>
                </div>           
            </div>
                   
        </div>
        <div className="px-3 py-2 rounded-lg bg-[#BD8CBF26] border-purple-100">
            <div className="flex items-start gap-2">
                <MedicalReportIcon className="size-5 text-purple-600" />
                <div className="flex flex-col gap-0 text-start">
                    <span className="font-semibold text-lg text-sky leading-3">{verifiedCount}</span>
                    <span className="text-lg text-sky">Pharmacy</span>
                </div>           
            </div>
        </div>
        <div className="px-3 py-3 rounded-lg bg-teal-50 border border-[#A3DAC226]">
            <div className="flex items-start gap-2">
                <HeartIcon className="size-5 text-emerald-300" />
                <div className="flex flex-col gap-0 text-start">
                    <span className="font-semibold text-lg text-sky leading-3">{purchasesCount}</span>
                    <span className="text-lg text-sky">Purchases</span>
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
