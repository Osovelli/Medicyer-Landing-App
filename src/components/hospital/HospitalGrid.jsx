import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { HospitalCard } from "./HospitalCard"

const HOSPITALS_DATA = [
  {
    id: 1,
    name: "MedGate Pharmacy & Stores",
    address: "Detailed Address goes here.",
    imageUrl: "/lab image 1.jpg",
  },
  {
    id: 2,
    name: "MedGate Pharmacy & Stores",
    address: "Detailed Address goes here.",
    imageUrl: "/lab image 2.jpg",
  },
  {
    id: 3,
    name: "MedGate Pharmacy & Stores",
    address: "Detailed Address goes here.",
    imageUrl: "/lab image 3.jpg",
  },
  {
    id: 4,
    name: "MedGate Pharmacy & Stores",
    address: "Detailed Address goes here.",
    imageUrl: "/lab image 1.jpg",
  },
  {
    id: 5,
    name: "MedGate Pharmacy & Stores",
    address: "Detailed Address goes here.",
    imageUrl: "/lab image 2.jpg",
  },
  {
    id: 6,
    name: "MedGate Pharmacy & Stores",
    address: "Detailed Address goes here.",
    imageUrl: "/lab image 3.jpg",
  },
  /* {
    id: 7,
    name: "MedGate Pharmacy & Stores",
    address: "Detailed Address goes here.",
    imageUrl: "/lab image 1.jpg",
  },
  {
    id: 8,
    name: "MedGate Pharmacy & Stores",
    address: "Detailed Address goes here.",
    imageUrl: "/lab image 2.jpg",
  }, */
]

export function HospitalGrid({ selectedFilters = [] }) {
  const filteredHospitals = useMemo(() => {
    return HOSPITALS_DATA
  }, [selectedFilters])

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHospitals.map((hospital) => (
          <HospitalCard
            key={hospital.id}
            imageUrl={hospital.imageUrl}
            name={hospital.name}
            address={hospital.address}
            onSelect={() => console.log(`Selected ${hospital.name}`)}
          />
        ))}
      </div>
    </div>
  )
}
