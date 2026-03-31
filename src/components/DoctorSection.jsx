import { useRef, useState } from "react"
import { DoctorCard } from "./custom/DoctorCard"
import { DoctorCTA } from "./custom/DoctorCTA"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"

const doctorsData = [
  {
    id: 1,
    name: "Dr. Sharafadeen M.",
    specialty: "Orthopedic Surgeon",
    imageUrl: "/doctor 1.jpg",
    rating: "3.5",
    location: "Abuja, NG.",
  },
  {
    id: 2,
    name: "Dr. Sharafadeen M.",
    specialty: "Orthopedic Surgeon",
    imageUrl: "/doctor 2.jpg",
    rating: "3.5",
    location: "Abuja, NG.",
  },
  {
    id: 3,
    name: "Dr. Sharafadeen M.",
    specialty: "Cardio",
    imageUrl: "/doctor 3.jpg",
    rating: "3.5",
    location: "Abuja, NG.",
  },
  {
    id: 4,
    name: "Dr. Sharafadeen M.",
    specialty: "Cardio",
    imageUrl: "/doctor 4.jpg",
    rating: "3.5",
    location: "Abuja, NG.",
  },
]

export function DoctorsSection() {
  const [expandedCardId, setExpandedCardId] = useState(null)
  const scrollContainerRef = useRef(null);
  
    const scroll = (direction) => {
      if (scrollContainerRef.current) {
        const scrollAmount = 320; // Approximate card width + gap
        scrollContainerRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      }
    };

  const handleBook = (doctorName) => {
    console.log(`Booking appointment with ${doctorName}`)
  }

  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-lg max-w-[150px] md:max-w-full  md:text-4xl text-left font-semibold text-sky">Browse Doctors & Therapist</h2>
          <Link
            to={'/doctors'}
            className="text-xs md:text-xl font-normal text-sky hover:text-blue-900 transition-colors"
          >
            SEE ALL PROVIDERS
          </Link>
        </div>
        {/* Navigation Buttons */}
        <div className="flex md:hidden items-center justify-end gap-3 mb-2">
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll carousel left"
            className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll carousel right"
            className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>
        </div>

        {/* Mobile: horizontal scroll with snap so each card fills the container.
            md+: switch to grid layout */}
        <div 
        ref={scrollContainerRef} 
        className="overflow-x-auto space-x-4 py-6 scrollbar-hide md:block"
        >
          <div className="flex xl:grid grid-cols-1 xl:grid-cols-4 gap-4 md:gap-6 snap-x snap-mandatory md:snap-none">
            {doctorsData.map((doctor) => (
              <div key={doctor.id} className="md:w-full h-full min-h-74 min-w-[230px] md:min-w-[250px] shrink snap-center">
                <DoctorCard
                  imageUrl={doctor.imageUrl}
                  specialty={doctor.specialty}
                  name={doctor.name}
                  rating={doctor.rating}
                  location={doctor.location}
                  onBook={() => handleBook(doctor.name)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <DoctorCTA />
    </section>
  )
}
