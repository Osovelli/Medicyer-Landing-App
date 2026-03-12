export function LabServicesSection() {
  const services = [
    {
      id: 1,
      title: "Blood Testing",
      description: "Comprehensive blood tests and analysis",
      image: "/lab-service-1.jpg",
    },
    {
      id: 2,
      title: "Diagnostic Imaging",
      description: "X-rays, ultrasound and CT scans",
      image: "/lab-service-2.jpg",
    },
    {
      id: 3,
      title: "DNA Testing",
      description: "Genetic analysis and screening",
      image: "/lab-service-3.jpg",
    },
  ]

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Lab Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 bg-gray-100 rounded-3xl overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 rounded-full transition-colors">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
