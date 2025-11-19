import { ArrowLeft, Heart } from 'lucide-react'

export function DoctorAbout({
  imageUrl,
  name,
  credentials,
  specialty,
  location,
  rating,
  patients,
  experience,
  about,
  onBack,
}) {
  return (
    <div className="space-y-6">
        <div className='flex flex-col md:flex-row gap-2 p-2 text-start border-0 shadow-md '>
            {/* Back Button */}
            <div className='space-y-1'>
                <button
                    onClick={onBack}
                    className="p-2 hover:bg-gray-100 rounded-lg transition w-fit"
                >
                    <ArrowLeft className="w-6 h-6 text-[#1a1a4d]" />
                </button>

                {/* Doctor Image */}
                <div className="relative w-72 h-46 rounded-3xl overflow-hidden bg-gray-200">
                    <img
                        src={imageUrl || "/placeholder.svg"}
                        alt={name}
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                </div>
            </div>
            <div className='space-y-2'>
                {/* Doctor Info Header */}
                <div className='mt-8'>
                    <h1 className="text-3xl font-bold text-[#1a1a4d] mb-1">
                    {name} {credentials && <span>({credentials})</span>}
                    </h1>
                    <p className="text-gray-600 mb-2">{specialty}</p>
                    <p className="text-sm text-gray-600">{location}</p>
                </div>

                {/* Stats Badges */}
                <div className="flex gap-4 flex-wrap">
                    {/* Rating Badge */}
                    <div className="flex items-center gap-2 bg-yellow-50 px-2 py-3 rounded-lg">
                    <span className="text-2xl">⭐</span>
                    <div>
                        <div className="font-semibold text-[#1a1a4d]">{rating}</div>
                        <div className="text-xs text-gray-600">Rating</div>
                    </div>
                    </div>

                    {/* Patients Badge */}
                    <div className="flex items-center gap-2 bg-teal-50 px-2 py-3 rounded-lg">
                    <span className="text-2xl">💚</span>
                    <div>
                        <div className="font-semibold text-[#1a1a4d]">{(patients || 0).toLocaleString()}K</div>
                        <div className="text-xs text-gray-600">Patients</div>
                    </div>
                    </div>

                    {/* Experience Badge */}
                    <div className="flex items-center gap-2 bg-pink-50 px-2 py-3 rounded-lg">
                    <span className="text-2xl">💼</span>
                    <div>
                        <div className="font-semibold text-[#1a1a4d]">{experience} yrs.</div>
                        <div className="text-xs text-gray-600">Work Exp.</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    

      {/* About Section */}
      <div className="space-y-3 text-left">
        <h2 className="text-lg font-semibold text-gray-900">About</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            {about}
          </p>
          <button className="text-[#1a1a4d] text-sm font-semibold mt-2 hover:underline">
            Read more
          </button>
        </div>
      </div>
    </div>
  )
}
