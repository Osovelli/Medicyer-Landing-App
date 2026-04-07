import { ArrowLeft, Heart, HeartCrackIcon } from 'lucide-react'
import { HeartIcon, MedicalReportIcon, StarIcon } from '../custom/Icons'

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
    <div className="space-y-6 px-6 xl:p-2 bg-white">
        {/* Back Button */}
        <div className='w-full text-left'>
        <button
            onClick={onBack}
            className="p-2 border  hover:bg-gray-100 rounded-lg transition w-fit"
        >
            <ArrowLeft className="w-6 h-6 text-[#121297]" />
        </button>
        </div>
        <div className='flex flex-col md:flex-row gap-4 text-start border-0'>
            <div className='relative space-y-3 '>
                {/* Doctor Image */}
                <div className="relative w-45 xl:w-72 h-full rounded-t-3xl rounded-r-3xl overflow-hidden bg-gray-200">
                    <img
                        src={imageUrl || "/placeholder.svg"}
                        alt={name}
                        fill
                        className="absolute inset-0 object-cover w-full h-full"
                        sizes="100vw"
                    />
                </div>
            </div>
            <div className='space-y-2 '>
                {/* Doctor Info Header */}
                <div className=''>
                    <h1 className="text-3xl font-semibold text-sky mb-1">
                    {name} {credentials && <span>({credentials})</span>}
                    </h1>
                    <p className="text-sky font-normal text-xl">{specialty}</p>
                    <p className="text-xs font-normal text-sky">{location}</p>
                </div>

                {/* Stats Badges */}
                <div className="flex gap-4 flex-wrap">
                    {/* Rating Badge */}
                    <div className="flex items-center justify-center w-[89px] h-[54px] gap-2 bg-[#F0D86926] rounded-lg">
                        <StarIcon className="w-5 h-5" />
                        <div>
                            <div className="font-semibold text-sm text-[#1a1a4d]">{rating}</div>
                            <div className="text-xs text-gray-600">Rating</div>
                        </div>
                    </div>

                    {/* Patients Badge */}
                    <div className="flex items-center gap-2 justify-center w-[89px] h-[54px] bg-[#A3DAC226] rounded-lg">
                    <HeartIcon className="w-5 h-5" />
                    <div>
                        <div className="font-semibold text-sm text-[#1a1a4d]">{(patients || 0).toLocaleString()}K</div>
                        <div className="text-xs text-gray-600">Patients</div>
                    </div>
                    </div>

                    {/* Experience Badge */}
                    <div className="flex items-center gap-2 justify-center w-[94px] h-[54px]  bg-[#BD8CBF26] rounded-lg">
                    <MedicalReportIcon className="w-5 h-5" />
                    <div>
                        <div className="font-semibold text-sm text-[#1a1a4d]">{experience} yrs.</div>
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
          <p className="text-gray-600 text-sm leading-relaxed max-w-md">
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
