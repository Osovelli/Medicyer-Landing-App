import { ServiceCard } from "./custom/ServiceCard"

const servicesData = [
  {
    id: 1,
    title: "Complete blood count",
    subtitle: "Jasiri Med Laboratory",
    imageUrl: "/service image 1.jpg",
    gradient: "linear-gradient(135deg, rgba(35, 25, 75, 0.5) 0%, rgba(72, 52, 212, 0.3) 100%)",
  },
  {
    id: 2,
    title: "Real-time Medication",
    subtitle: "Pharmacies",
    imageUrl: "/service image 4.png",
    gradient: "linear-gradient(135deg, rgba(180, 100, 180, 0.5) 0%, rgba(200, 120, 200, 0.3) 100%)",
  },
  {
    id: 3,
    title: "Real-time Medication",
    subtitle: "Pharmacies",
    imageUrl: "/service image 3.jpg",
    gradient: "linear-gradient(135deg, rgba(100, 180, 160, 0.5) 0%, rgba(120, 200, 180, 0.3) 100%)",
  },
  {
    id: 4,
    title: "Real-time Medication",
    subtitle: "Pharmacies",
    imageUrl: "/service image 4.png",
    gradient: "linear-gradient(135deg, rgba(180, 160, 80, 0.5) 0%, rgba(220, 180, 100, 0.3) 100%)",
  },
  {
    id: 5,
    title: "Real-time Medication",
    subtitle: "Pharmacies",
    imageUrl: "/service image 4.png",
    gradient: "linear-gradient(135deg, rgba(180, 160, 80, 0.5) 0%, rgba(220, 180, 100, 0.3) 100%)",
  },
]

export function ServicesSection() {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-2">
      <div className="mx-auto">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 md:gap-6 pb-4 w-max md:w-auto">
            {servicesData.map((service) => (
              <div key={service.id} className="shrink-0 w-72 md:w-80">
                <ServiceCard
                  imageUrl={service.imageUrl}
                  gradient={service.gradient}
                  title={service.title}
                  subtitle={service.subtitle}
                  className="w-full h-64 md:h-72"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
