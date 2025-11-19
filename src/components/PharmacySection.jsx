import { PharmacyCard } from "./custom/PharmacyCard"
import { PharmacyCTA } from "./custom/PharmacyCTA"

const pharmacyData = [
  {
    id: 1,
    title: "MedGate Pharmacy & Stores",
    imageUrl: "/lab image 1.jpg",
    category: "Pharmacy"
  },
  {
    id: 2,
    title: "MedGate Pharmacy & Stores",
    imageUrl: "/lab image 2.jpg",
    category: "Pharmacy"
  },
  {
    id: 3,
    title: "MedGate Pharmacy & Stores",
    imageUrl: "/lab image 3.jpg",
    category: "Pharmacy"
  },
  {
    id: 4,
    title: "Ampicilyn 450 MG",
    imageUrl: "/lab image 1.jpg",
    category: "Pharmacy"
  },
]

export function PharmacySection() {
  return (
    <section className="w-full py-16 md:py-24 px-2 md:px-8 bg-gray-50">
      <div className="max-w-9xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-lg md:text-4xl text-left font-bold leading-6 text-gray-900 max-w-44 sm:max-w-2xl">Pharmacies, Labs & Hospitals near you</h2>
          <a
            href="/pharmacy"
            className="text-xs md:text-base font-semibold uppercase text-gray-900 hover:text-blue-900 transition-colors"
          >
            EXPLORE
          </a>
        </div>

        {/* Mobile: horizontal scroll with snap so each card fills the container.
            md+: switch to grid layout */}
        <div className="overflow-x-auto scrollbar-hide md:block">
          <div className="flex md:grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 snap-x snap-mandatory md:snap-none">
            {pharmacyData.map((doctor) => (
              <div key={doctor.id} className="min-w-full md:min-w-0 md:w-full shrink-0 snap-center">
                <PharmacyCard
                  imageUrl={doctor.imageUrl}
                  title={doctor.title}
                  category={doctor.category}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <PharmacyCTA />
    </section>
  )
}
