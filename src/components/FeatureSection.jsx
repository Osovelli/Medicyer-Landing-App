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
    <section className="w-full py-16 md:py-24 px-2 md:px-8 bg-gray-50">
      <div className="max-w-9xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-lg md:text-4xl text-left font-bold text-gray-900">Featured Products</h2>
          <a
            href="#"
            className="text-xs md:text-base font-semibold text-gray-900 hover:text-blue-900 transition-colors"
          >
            SEE ALL PROVIDERS
          </a>
        </div>

        {/* Mobile: horizontal scroll with snap so each card fills the container.
            md+: switch to grid layout */}
        <div className="overflow-x-auto scrollbar-hide md:block">
          <div className="flex md:grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 snap-x snap-mandatory md:snap-none">
            {featuresData.map((doctor) => (
              <div key={doctor.id} className="min-w-full md:min-w-0 md:w-full shrink-0 snap-center">
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
