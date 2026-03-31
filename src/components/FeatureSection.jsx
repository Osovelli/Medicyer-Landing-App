import { FeatureCard } from "./custom/FeatureCard"

const featuresData = [
  {
    id: 1,
    name: "Ampicilyn 450 MG",
    imageUrl: "/meds.png",
    description: "Measures the levels of substances in your blood..."
  },
  {
    id: 2,
    name: "Ampicilyn 450 MG",
    imageUrl: "/meds.png",
    description: "Measures the levels of substances in your blood..."
  },
  {
    id: 3,
    name: "Ampicilyn 450 MG",
    imageUrl: "/meds.png",
    description: "Measures the levels of substances in your blood..."
  },
  {
    id: 4,
    name: "Ampicilyn 450 MG",
    imageUrl: "/meds.png",
    description: "Measures the levels of substances in your blood..."
  },
]

export function FeatureSection() {
  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-lg md:text-4xl text-sky text-left font-semibold">Featured Products</h2>
          <a
            href="#"
            className="text-xs md:text-lg font-normal text-gray-900 hover:text-blue-900 transition-colors"
          >
            SEE ALL PROVIDERS
          </a>
        </div>

        {/* Mobile: horizontal scroll with snap so each card fills the container.
            md+: switch to grid layout */}
        <div className="overflow-x-auto scrollbar-hide md:block">
          <div className="flex xl:grid py-2 xl:grid-cols-4 xl:justify-items-center gap-4 md:gap-6 snap-x snap-mandatory md:snap-none">
            {featuresData.map((doctor) => (
              <div key={doctor.id} className="w-52 md:min-w-0 md:w-[278px] shrink-0 snap-center">
                <FeatureCard
                  imageUrl={doctor.imageUrl}
                  name={doctor.name}
                  description={doctor.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
