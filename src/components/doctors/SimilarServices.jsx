import { DoctorCard } from "./DoctorCard"

const featuresData = [
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
]

export function SimilarServices() {
  return (
    <section className="w-full py-16 md:py-24 px-2 md:px-8 bg-gray-50">
      <div className="max-w-9xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-lg md:text-4xl text-left font-bold text-gray-900">Similar Services</h2>
          <a
            href="#"
            className="text-xs md:text-base font-semibold text-gray-900 hover:text-blue-900 transition-colors"
          >
            See More
          </a>
        </div>

        {/* Mobile: horizontal scroll with snap so each card fills the container.
            md+: switch to grid layout */}
        <div className="overflow-x-auto scrollbar-hide md:block">
          <div className="flex md:grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 snap-x snap-mandatory md:snap-none">
            {featuresData.map((doctor) => (
              <div key={doctor.id} className="min-w-full md:min-w-0 md:w-full snap-center">
                <DoctorCard
                    key={doctor.id}
                    imageUrl={doctor.imageUrl}
                    specialty={doctor.specialty}
                    name={doctor.name}
                    rating={doctor.rating}
                    location={doctor.location}
                    onBook={() => navigate(`/doctors/${doctor.id}`)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <MedicalCheckupsCTA /> */}
        <div>
            <img src="/checkup banner.png" alt="Medical Checkup CTA" className="w-full rounded-2xl my-12" />
        </div>
    </section>
  )
}
