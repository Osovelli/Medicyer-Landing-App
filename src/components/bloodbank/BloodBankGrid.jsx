import { useMemo } from "react"
//import { DoctorCard } from "./DoctorCard"
import { useNavigate } from "react-router-dom"
import { CuratedCard } from "./CuratedCard";

export const BLOODBANK_DATA = [
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

export function BloodbanksGrid({
  selectedProximity,
  selectedRating,
  sortBy,
}) {
  const navigate = useNavigate()

  const filteredBloodBank = useMemo(() => {
    let bloodBanks = [...BLOODBANK_DATA]

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
      bloodBanks = bloodBanks.filter((bank) => {
        const proximityValue = parseInt(bank.proximity, 10)
        return proximityValue >= min && proximityValue <= max
      })
    }

    if (selectedRating.length > 0) {
      bloodBanks = bloodBanks.filter((bank) =>
        selectedRating.some((rating) => bank.rating >= rating)
      )
    }

    if (sortBy === "rating-high") {
      bloodBanks.sort((a, b) => b.rating - a.rating)
    } else if (sortBy === "rating-low") {
      bloodBanks.sort((a, b) => a.rating - b.rating)
    } else if (sortBy === "name-asc") {
      bloodBanks.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy === "name-desc") {
      bloodBanks.sort((a, b) => b.name.localeCompare(a.name))
    }

    return bloodBanks
  }, [selectedAvailability, selectedSpecialties, selectedProximity, selectedRating, sortBy])

  return (
    <div className="space-y-8 my-4">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBloodBank.map((bank) => (
          <CuratedCard
              className={"md:w-[350px] w-full"}
              key={bank.id}
              logo={bank.logo}
              bgColor={bank.bgColor}
              verified={bank.verified}
              rating={bank.rating}
              name={bank.name}
              location={bank.location}
            />
        ))}
      </div>
    </div>
  )
}
