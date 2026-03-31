import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ServiceCard } from "./custom/ServiceCard"

const servicesData = [
  {
    id: 1,
    title: "Complete blood count (CBC)",
    subtitle: "Jasiri Med Laboratory",
    imageUrl: "/service image 1.jpg",
    gradient: "linear-gradient(135deg, rgba(37, 43, 97, 1) 0%, rgba(37, 43, 97, 0.1) 100%)",
  },
  {
    id: 2,
    title: "Real-time Medication",
    subtitle: "Pharmacies",
    imageUrl: "/service image 4.png",
    gradient: "linear-gradient(135deg, rgba(189, 140, 191, 1) 0%, rgba(189, 140, 191, 0.1) 100%)",
  },
  {
    id: 3,
    title: "Real-time Medication",
    subtitle: "Pharmacies",
    imageUrl: "/service image 3.jpg",
    gradient: "linear-gradient(135deg, rgba(163, 218, 194, 1) 0%, rgba(163, 218, 194, 0.1) 100%)",
  },
  {
    id: 4,
    title: "Real-time Medication",
    subtitle: "Pharmacies",
    imageUrl: "/service image 4.png",
    gradient: "linear-gradient(135deg, rgba(240, 216, 105, 1) 0%, rgba(240, 216, 105, 0.1) 100%)",
  },
  {
    id: 5,
    title: "Real-time Medication",
    subtitle: "Pharmacies",
    imageUrl: "/service image 3.jpg",
    gradient: "linear-gradient(135deg, rgba(163, 218, 194, 1) 0%, rgba(163, 218, 194, 0.1) 100%)",
  },
  {
    id: 6,
    title: "Complete blood count (CBC)",
    subtitle: "Jasiri Med Laboratory",
    imageUrl: "/service image 1.jpg",
    gradient: "linear-gradient(135deg, rgba(37, 43, 97, 1) 0%, rgba(37, 43, 97, 0.1) 100%)",
  },
  {
    id: 7,
    title: "Real-time Medication",
    subtitle: "Pharmacies",
    imageUrl: "/service image 4.png",
    gradient: "linear-gradient(135deg, rgba(240, 216, 105, 1) 0%, rgba(240, 216, 105, 0.1) 100%)",
  },
]

export function ServicesSection() {
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
    <section className="w-full py-16 md:py-5 px-4 md:px-4">
      <div className="sm:ml-28 mx-auto rounded-tl-3xl">
        {/* Header with Navigation Buttons */}
        <div className="flex items-center justify-end gap-3 mb-6">
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

        {/* Carousel Container */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide"
        >
          <div className="flex gap-4 md:gap-6 pb-4 w-max md:w-auto">
            {servicesData.map((service) => (
              <div key={service.id} className="shrink-0 w-60 md:w-65">
                <ServiceCard
                  imageUrl={service.imageUrl}
                  gradient={service.gradient}
                  title={service.title}
                  subtitle={service.subtitle}
                  className="w-[150px] h-64 md:h-82"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
