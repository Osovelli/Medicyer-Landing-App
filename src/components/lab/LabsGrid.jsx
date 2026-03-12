import { useMemo } from "react"
//import { DoctorCard } from "./DoctorCard"
import { useNavigate } from "react-router-dom"
import { CuratedCard } from "./CuratedCards"

export const LABS_DATA = [
  {
    id: 1,
    logo: '/jaziri logo dark.png',
    logoText: "Jasiri",
    bgColor: "bg-[#1C2A3D]",
    verified: true,
    rating: "4.5",
    name: "Tech Laboratory",
    location: "Abuja, Nigeria",
    proximity: "10km"
  },
  {
    id: 2,
    logo: '/jaziri logo green.png',
    logoText: "Jasiri",
    bgColor: "bg-[#0D4A2B]",
    verified: true,
    rating: "4.5",
    name: "Med Laboratory",
    location: "Lagos, Nigeria",
    proximity: "50km"
  },
  {
    id: 3,
    logo: 'jaziri logo dark.png',
    logoText: "Jasiri",
    bgColor: "bg-[#1C2A3D]",
    verified: false,
    rating: "4.2",
    name: "Women's Labs & Tech",
    location: "Abuja, Nigeria",
    proximity: "12km"
  },
  {
    id: 4,
    logo: '/jaziri logo green.png',
    logoText: "Jasiri",
    bgColor: "bg-[#2A1D3D]",
    verified: true,
    rating: "4.8",
    name: "Jasiri Diagnostics",
    location: "Port Harcourt, NG",
    proximity: "65km"
  },
];

/* export const DOCTORS_DATA = [
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
] */

export function LabsGrid({
  selectedProximity,
  selectedRating,
  sortBy,
}) {
  const navigate = useNavigate()

  const filteredLabs = useMemo(() => {
    let labs = [...LABS_DATA]

    /* if (selectedAvailability.length > 0) {
      labs = labs.filter((lab) =>
        selectedAvailability.includes(lab.availability)
      )
    } */

    /* if (selectedSpecialties.length > 0) {
      doctors = doctors.filter((doc) =>
        selectedSpecialties.includes(doc.specialtyId)
      )
    } */

    if (selectedProximity.length === 2) {
      const [min, max] = selectedProximity
      labs = labs.filter((lab) => {
        const proximityValue = parseInt(lab.proximity, 10)
        return proximityValue >= min && proximityValue <= max
      })
    }

    if (selectedRating.length > 0) {
      labs = labs.filter((lab) =>
        selectedRating.some((rating) => lab.rating >= rating)
      )
    }

    if (sortBy === "rating-high") {
      labs.sort((a, b) => b.rating - a.rating)
    } else if (sortBy === "rating-low") {
      doctors.sort((a, b) => a.rating - b.rating)
    } else if (sortBy === "name-asc") {
      doctors.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy === "name-desc") {
      doctors.sort((a, b) => b.name.localeCompare(a.name))
    }

    return labs
  }, [selectedAvailability, selectedSpecialties, selectedProximity, selectedRating, sortBy])

  return (
    <div className="space-y-8 my-4">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLabs.map((lab) => (
          <CuratedCard
              className={"md:w-[350px] w-full"}
              key={lab.id}
              logo={lab.logo}
              bgColor={lab.bgColor}
              verified={lab.verified}
              rating={lab.rating}
              name={lab.name}
              location={lab.location}
            />
        ))}
      </div>
    </div>
  )
}
