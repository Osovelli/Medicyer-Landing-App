import { useState } from "react"
import { DoctorCard } from "./custom/DoctorCard"
import { DoctorCTA } from "./custom/DoctorCTA"
import { Link } from "react-router-dom"

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

  const handleBook = (doctorName) => {
    console.log(`Booking appointment with ${doctorName}`)
  }

  return (
    <section className="w-full py-16 md:py-24 px-2 md:px-8 bg-gray-50">
      <div className="max-w-9xl mx-auto">
        {/* Header */}
        <div className="flex items-center md:justify-between mb-8 md:mb-12">
          <h2 className="text-lg md:text-4xl text-left font-bold text-gray-900">Browse Doctors & Therapist</h2>
          <Link
            to={'/doctors'}
            className="text-xs md:text-base font-semibold text-gray-900 hover:text-blue-900 transition-colors"
          >
            SEE ALL PROVIDERS
          </Link>
        </div>

        {/* Mobile: horizontal scroll with snap so each card fills the container.
            md+: switch to grid layout */}
        <div className="overflow-x-auto scrollbar-hide md:block">
          <div className="flex md:grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 snap-x snap-mandatory md:snap-none">
            {doctorsData.map((doctor) => (
              <div key={doctor.id} className="min-w-full md:min-w-0 md:w-full shrink-0 snap-center">
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
