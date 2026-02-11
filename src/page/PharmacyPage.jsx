import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DoctorsSearchHeader } from "@/components/doctors/DoctorsSearchHeader"
import { BlogSection } from "@/components/BlogSection"
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { PharmacyFilterSidebar } from "@/components/pharmacy/PharmacyFilterSidebar"
import { PharmacyGrid } from "@/components/pharmacy/PharmacyGrid"
import { Menu } from "lucide-react"
import { FAQSection } from "@/components/FAQSection"
import { Link } from "react-router-dom"

export default function PharmacyPage() {
  /* const [selectedAvailability, setSelectedAvailability] = useState([])
  const [selectedSpecialties, setSelectedSpecialties] = useState([]) */
  const [selectedProximity, setSelectedProximity] = useState([0, 50])
  const [selectedRating, setSelectedRating] = useState([])
  const [sortBy, setSortBy] = useState("")
  const [location, setLocation] = useState("")

  const FEATURED_BRANDS = [
  { id: 1, name: "H-MEDIX", imgurl: '/h-medix.png' },
  { id: 2, name: "Jasiri", imgurl: '/jazri.png' },
  { id: 3, name: "SPAR", imgurl: '/spar.jpg' },
  { id: 4, name: "H-MEDIX", imgurl: '/h-medix.png' },
  { id: 5, name: "Jasiri", imgurl: '/jazri.png' },
  { id: 6, name: "SPAR", imgurl: '/spar.jpg' },
]
  

  const doctorCount = 9


return (
    <div className="min-h-screen flex flex-col">
        <Header isLoggedIn={true} userName="Tobi Dev" />

        <main className="grow">
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
                                        <DropdownMenuItem>lab</DropdownMenuItem>
                                        <DropdownMenuItem>Donor</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/doctors">Doctors</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/doctors/onsite">On-site</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/doctors/cardiologist">Cardiologist</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* Hero/Header Search Section */}
            <div className="bg-gray-100 h-48 md:h-64 mb-8 mx-8 rounded-2xl"></div>

            {/* Main Content */}
            <div className="max-w-9xl mx-auto px-4 md:px-8 py-8">

                {/* Filters and Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <PharmacyFilterSidebar
                        onProximityChange={setSelectedProximity}
                        onRatingChange={setSelectedRating}
                        selectedProximity={selectedProximity}
                        selectedRating={selectedRating}
                    />

                    {/* Grid Content */}
                    <div className="md:col-span-3 space-y-6">
                       {/*  header text*/}
                       <div className="flex items-center justify-between">
                        <h1 className="text-sky font-semibold text-2xl sm:text-4xl">Featured</h1>
                        <p className="uppercase text-sky font-normal text-sm">Explored</p>
                       </div>

                        {/* featured brands */}
                        <div className="flex items-center gap-4 overflow-x-auto  pb-4 scrollbar-hide">
                            {FEATURED_BRANDS.map((brand) => (
                            <Link
                                key={brand.id}
                                className="shrink-0 cursor-pointer w-54 md:w-52 h-32 md:h-44 rounded-2xl bg-gray-100 flex items-center justify-center font-bold text-gray-700 border border-gray-200 hover:shadow-md transition"
                                to={`/pharmacy/${brand.id}`}
                            >
                                <img 
                                src={brand.imgurl || ''} 
                                alt={brand.name} 
                                className="object-cover w-full h-full rounded-2xl"
                                />
                            </Link>
                            ))}
                        </div>

                        {/* Curated Section Header */}
                        <div className="border-b border-gray-200">
                            <div className="max-w-7xl mx-auto py-6">
                            <div className="flex items-center justify-between">
                                <h2 className="sm:text-4xl text-2xl tracking-tight font-semibold text-sky">Curated for you</h2>
                                <div className="flex items-center gap-4">
                                <span className="text-sm text-gray-600">123 listed</span>
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                                    <Menu className="w-5 h-5 text-gray-600" />
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>

                        {/* pharmacy grid display */}
                        <PharmacyGrid
                            selectedProximity={selectedProximity}
                            selectedRating={selectedRating}
                            sortBy={sortBy}
                        />

                        {/* Medical Checkups CTA */}
                        {/* <MedicalCheckupsCTA /> */}
                        <div>
                            <img src="/medical banner.png" alt="Medical Checkup CTA" className="w-full rounded-2xl my-12" />
                        </div>

                        {/* More Doctors Grid */}
                        <div className="mt-8">
                            <PharmacyGrid
                                selectedProximity={selectedProximity}
                                selectedRating={selectedRating}
                                sortBy={sortBy}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ section */}
            <div className="bg-gray-50 py-12">
                <div className="max-w-9xl mx-auto px-4 md:px-8">
                    <FAQSection />
                </div>

            </div>

            {/* Blog Section */}
            <div className="bg-gray-50 py-12">
                <div className="max-w-9xl mx-auto px-4 md:px-8">
                    <BlogSection />
                </div>
            </div>
        </main>

        <Footer />
    </div>
)
}
