import { useMemo } from "react"
import { PharmacyCard } from "./PharmacyCard"
import { Button } from "@/components/ui/button"

const PHARMACIES_DATA = [
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
  {
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
  },
]

export function PharmacyGrid({ selectedFilters = [] }) {
  const filteredPharmacies = useMemo(() => {
    return PHARMACIES_DATA
  }, [selectedFilters])

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredPharmacies.map((pharmacy) => (
          <PharmacyCard
            key={pharmacy.id}
            imageUrl={pharmacy.imageUrl}
            name={pharmacy.name}
            address={pharmacy.address}
            onSelect={() => console.log(`Selected ${pharmacy.name}`)}
          />
        ))}
      </div>
    </div>
  )
}
