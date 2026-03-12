import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/FAQSection"
import { BlogSection } from "@/components/BlogSection"
import { MedicalCheckupsCTA } from "@/components/doctors/MedicalCheckupsCTA"
import { FeaturedLabs } from "@/components/lab/FeaturedLabs"
import { CuratedLabs } from "@/components/lab/CuratedLabs"
import { LabServicesSection } from "@/components/lab/LabServiceSection"
import { LabsFilterSidebar } from "@/components/lab/LabFilterSidebar"
import { LabsGrid } from "@/components/lab/LabsGrid"
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function LabsPage() {
  const [proximityRange, setProximityRange] = useState({ min: 2, max: 75 })
  const [selectedProximity, setSelectedProximity] = useState([0, 50])
  const [selectedRating, setSelectedRating] = useState([])

  return (
    <div className="min-h-screen">
      <Header isLoggedIn={true} userName="Tobi Dev" />
      {/* Breadcrumb */}
      <div className="bg-white mx-auto px-4 py-4 border-b border-gray-200">
          <div className="mx-auto px-4 py-4 text-left">
              {/* breadcrumb text */}
              <Breadcrumb className="text-xs text-gray-600">
                  <BreadcrumbList className={"gap-1"}>
                      <BreadcrumbItem>
                          <BreadcrumbLink href="/">Home</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                          <DropdownMenu>
                              <DropdownMenuTrigger className="flex items-center gap-1">
                                  <BreadcrumbEllipsis className="size-4" />
                                  <span className="sr-only">Toggle menu</span>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="start">
                                  <DropdownMenuItem>Pharmacy</DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => navigate('/hospitals')}>
                                      Hospital
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>Donor</DropdownMenuItem>
                              </DropdownMenuContent>
                          </DropdownMenu>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                          <BreadcrumbLink href="/doctors">Labs</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                          <BreadcrumbLink href="/doctors/onsite">List</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      {/* <BreadcrumbItem>
                          <BreadcrumbLink href="/doctors/cardiologist">Cardiologist</BreadcrumbLink>
                      </BreadcrumbItem> */}
                  </BreadcrumbList>
              </Breadcrumb>
          </div>
      </div>

      {/* Hero Banner */}
      <section className="relative bg-gray-900 h-80 text-white py-16 m-6 rounded-2xl">
        <img src="/blood sampling.jpg" alt="sampling" className="absolute inset-0 object-cover w-full h-full opacity-60 rounded-lg" />
      </section>

      {/* Main Content */}
      <main className="mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-0">
        
        <div className="col-span-1 p-2">
          {/* Sidebar */}
          <LabsFilterSidebar
            onProximityChange={setProximityRange}
            selectedProximity={selectedProximity}
            onRatingChange={setSelectedRating}
            proximityRange={proximityRange}
            selectedRating={selectedRating}
          />
        </div>
        {/* Featured Labs with Filter Sidebar */}
        <div className="col-span-3 sm:col-span-2 lg:col-span-3">
          <div className="flex flex-col">
            {/* Featured Labs Content */}
            <div className="">
              <FeaturedLabs proximityRange={proximityRange} selectedRating={selectedRating} />
            </div>
            {/* Curated Labs */}

            {/* <div className="">
              <CuratedLabs />
            </div> */}
            <div className="mt-15">
              {/* Header */}
              <div className="flex items-baseline justify-between mb-5 px-0.5">
                <h2 className=" text-[28px] md:text-[32px] font-semibold text-slate-800 dark:text-slate-200">
                  Curated for you
                </h2>
                <a
                  href="#"
                  className="text-[13px] font-semibold tracking-[1.8px] uppercase text-slate-800 dark:text-slate-300 hover:opacity-70 transition-opacity"
                >
                  Explore
                </a>
              </div>
              <LabsGrid
                selectedProximity={selectedProximity}
                selectedRating={selectedRating}
              />

              {/* Medical Checkups CTA */}
              <div className="py-12">
                <div>
                  <img src="/medical banner.png" alt="Medical Checkup CTA" className="w-full rounded-2xl my-12" />
                </div>
              </div>

              <LabsGrid
                  selectedProximity={selectedProximity}
                  selectedRating={selectedRating}
              />
            </div>
                        
            {/* Lab Services */}
            {/* <div className="py-12">
              <LabServicesSection />
            </div> */}
          </div>
        </div>
      </main>
      {/* FAQ Section */}
      <div className="">
        <FAQSection />
      </div>

      {/* Blog Section */}
      <div className="">
        <BlogSection />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}





{/* Hero Banner */}
{/* <section className="relative bg-gray-900 h-80 text-white py-16 m-6 rounded-2xl">
  <img src="/blood sampling.jpg" alt="sampling" className="absolute inset-0 object-cover w-full h-full opacity-60 rounded-lg" />
</section> */}