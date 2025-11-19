import { useMemo } from "react"
import { DoctorCard } from "./DoctorCard"
import { useNavigate } from "react-router-dom"

export const DOCTORS_DATA = [
  {
    id: 1,
    name: "Dr. Sharafadeen M.",
    specialty: "Cardio",
    rating: 3.5,
    location: "Abuja, NG",
    imageUrl: "/doctor 1.jpg",
    availability: "today",
    specialtyId: "cardiologist",
    proximity: "5km",
  },
  {
    id: 2,
    name: "Dr. Sharafadeen M.",
    specialty: "Orthopedic Surgeon",
    rating: 3.5,
    location: "Abuja, NG",
    imageUrl: "/doctor 2.jpg",
    availability: "tomorrow",
    specialtyId: "orthopedic",
    proximity: "10km",
  },
  {
    id: 3,
    name: "Dr. Sharafadeen M.",
    specialty: "Cardio",
    rating: 3.5,
    location: "Abuja, NG",
    imageUrl: "/doctor 3.jpg",
    availability: "this-week",
    specialtyId: "cardiologist",
    proximity: "5km",
  },
  {
    id: 4,
    name: "Dr. Sharafadeen M.",
    specialty: "Cardio",
    rating: 3.5,
    location: "Abuja, NG",
    imageUrl: "/doctor 4.jpg",
    availability: "today",
    specialtyId: "cardiologist",
    proximity: "25km",
  },
  {
    id: 5,
    name: "Dr. Sharafadeen M.",
    specialty: "Cardio",
    rating: 4.0,
    location: "Abuja, NG",
    imageUrl: "/doctor 3.jpg",
    availability: "tomorrow",
    specialtyId: "cardiologist",
    proximity: "10km",
  },
  {
    id: 6,
    name: "Dr. Sharafadeen M.",
    specialty: "Orthopedic Surgeon",
    rating: 4.5,
    location: "Abuja, NG",
    imageUrl: "/doctor 1.jpg",
    availability: "today",
    specialtyId: "orthopedic",
    proximity: "5km",
  },
  {
    id: 7,
    name: "Dr. Sharafadeen M.",
    specialty: "Cardio",
    rating: 3.8,
    location: "Abuja, NG",
    imageUrl: "/doctor 4.jpg",
    availability: "this-week",
    specialtyId: "cardiologist",
    proximity: "10km",
  },
  {
    id: 8,
    name: "Dr. Sharafadeen M.",
    specialty: "Cardio",
    rating: 4.2,
    location: "Abuja, NG",
    imageUrl: "/doctor 3.jpg",
    availability: "today",
    specialtyId: "cardiologist",
    proximity: "25km",
  },
  {
    id: 9,
    name: "Dr. Sharafadeen M.",
    specialty: "Cardio",
    rating: 3.9,
    location: "Abuja, NG",
    imageUrl: "/doctor 2.jpg",
    availability: "tomorrow",
    specialtyId: "cardiologist",
    proximity: "5km",
  },
  {
    id: 10,
    name: "Dr. Sharafadeen M.",
    specialty: "Cardio",
    rating: 3.5,
    location: "Abuja, NG",
    imageUrl: "/doctor 1.jpg",
    availability: "today",
    specialtyId: "cardiologist",
    proximity: "5km",
  },
  {
    id: 11,
    name: "Dr. Sharafadeen M.",
    specialty: "Cardio",
    rating: 3.5,
    location: "Abuja, NG",
    imageUrl: "/doctor 2.jpg",
    availability: "tomorrow",
    specialtyId: "cardiologist",
    proximity: "10km",
  },
  {
    id: 12,
    name: "Dr. Sharafadeen M.",
    specialty: "Orthopedic Surgeon",
    rating: 3.5,
    location: "Abuja, NG",
    imageUrl: "/doctor 3.jpg",
    availability: "this-week",
    specialtyId: "orthopedic",
    proximity: "5km",
  },
]

export function DoctorsGrid({
  selectedAvailability,
  selectedSpecialties,
  selectedProximity,
  selectedRating,
  sortBy,
}) {
  const navigate = useNavigate()

  const filteredDoctors = useMemo(() => {
    let doctors = [...DOCTORS_DATA]

    if (selectedAvailability.length > 0) {
      doctors = doctors.filter((doc) =>
        selectedAvailability.includes(doc.availability)
      )
    }

    if (selectedSpecialties.length > 0) {
      doctors = doctors.filter((doc) =>
        selectedSpecialties.includes(doc.specialtyId)
      )
    }

    if (selectedProximity.length === 2) {
      const [min, max] = selectedProximity
      doctors = doctors.filter((doc) => {
        const proximityValue = parseInt(doc.proximity, 10)
        return proximityValue >= min && proximityValue <= max
      })
    }

    if (selectedRating.length > 0) {
      doctors = doctors.filter((doc) =>
        selectedRating.some((rating) => doc.rating >= rating)
      )
    }

    if (sortBy === "rating-high") {
      doctors.sort((a, b) => b.rating - a.rating)
    } else if (sortBy === "rating-low") {
      doctors.sort((a, b) => a.rating - b.rating)
    } else if (sortBy === "name-asc") {
      doctors.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy === "name-desc") {
      doctors.sort((a, b) => b.name.localeCompare(a.name))
    }

    return doctors
  }, [selectedAvailability, selectedSpecialties, selectedProximity, selectedRating, sortBy])

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            imageUrl={doctor.imageUrl}
            specialty={doctor.specialty}
            name={doctor.name}
            rating={doctor.rating}
            location={doctor.location}
            onBook={() => navigate(`/doctors/${doctor.id}`)}
          />
        ))}
      </div>
    </div>
  )
}
