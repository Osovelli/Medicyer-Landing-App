import { useRef } from "react";
import { PharmacyCard } from "./custom/PharmacyCard"
import { PharmacyCTA } from "./custom/PharmacyCTA"
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  return (
    <section className="w-full py-16 md:py-18 px-6 md:px-8 bg-gray-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-lg md:text-4xl text-left font-semibold leading-6 text-sky max-w-44 md:max-w-md lg:max-w-2xl">Pharmacies, Labs & Hospitals near you</h2>
          <a
            href="/pharmacy"
            className="text-xs md:text-base font-semibold uppercase text-sky hover:text-blue-900 transition-colors"
          >
            EXPLORE
          </a>
        </div>

        {/* Mobile: horizontal scroll with snap so each card fills the container.
            md+: switch to grid layout */}
        {/* Navigation Buttons */}
        <div className="hidden md:flex -mr-28 items-center justify-end gap-3 mb-2">
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
        <div ref={scrollContainerRef} className="overflow-x-auto  md:-mr-30 scrollbar-hide md:block">
          <div className="flex gap-4 md:gap-6 snap-x snap-mandatory md:snap-none">
            {pharmacyData.map((doctor) => (
              <div key={doctor.id} className="w-45 md:min-w-0 md:w-[380px] shrink-0 snap-center">
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
