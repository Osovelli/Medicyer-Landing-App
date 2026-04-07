import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DoctorsFilterSidebar } from "@/components/doctors/DoctorsFilterSidebar"
import { DoctorsSearchHeader } from "@/components/doctors/DoctorsSearchHeader"
import { DoctorsGrid } from "@/components/doctors/DoctorsGrid"
import { MedicalCheckupsCTA } from "@/components/doctors/MedicalCheckupsCTA"
import { BlogSection } from "@/components/BlogSection"
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Navigate, useNavigate } from "react-router-dom"

export default function DoctorsPage() {
  const [selectedAvailability, setSelectedAvailability] = useState([])
  const [selectedSpecialties, setSelectedSpecialties] = useState([])
  const [selectedProximity, setSelectedProximity] = useState([0, 50])
  const [selectedRating, setSelectedRating] = useState([])
  const [sortBy, setSortBy] = useState("")
  const [location, setLocation] = useState("")
  const navigate = useNavigate()
  

  const doctorCount = 9


return (
    <div className="min-h-screen w-full bg-[#FAFAFA]">
        <div className="w-full max-w-7xl mx-auto">
        <Header isLoggedIn={true} userName="Tobi Dev" />

         {/* Breadcrumb */}
            <div className="py-4 ">
                <div className=" px-8 py-4 text-left">
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
                                        <DropdownMenuItem onClick={() => navigate('/lab')}>
                                            Lab
                                        </DropdownMenuItem>
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

        <main className="bg-[#FAFAFA] px-4 border-b border-gray-200">

            {/* Hero/Header Search Section */}
            <div className="bg-gray-100 h-48 md:h-64 mb-8 mx-6 rounded-2xl"></div>

            {/* Main Content */}
            <div className="px-4 py-8">
                {/* Search Header */}
                <DoctorsSearchHeader onLocationChange={setLocation} onSortChange={setSortBy} doctorCount={doctorCount} onSpecialtyChange={setSelectedSpecialties} />

                {/* Filters and Grid */}
                <div className="grid grid-cols-1 gap-2 md:grid-cols-4 ">
                    {/* Sidebar */}
                    <DoctorsFilterSidebar
                        onAvailabilityChange={setSelectedAvailability}
                        onSpecialtyChange={setSelectedSpecialties}
                        onProximityChange={setSelectedProximity}
                        onRatingChange={setSelectedRating}
                        selectedAvailability={selectedAvailability}
                        selectedSpecialties={selectedSpecialties}
                        selectedProximity={selectedProximity}
                        selectedRating={selectedRating}
                    />

                    {/* Grid Content */}
                    <div className="md:col-span-3">
                        <DoctorsGrid
                            selectedAvailability={selectedAvailability}
                            selectedSpecialties={selectedSpecialties}
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
                            <DoctorsGrid
                                selectedAvailability={selectedAvailability}
                                selectedSpecialties={selectedSpecialties}
                                selectedProximity={selectedProximity}
                                selectedRating={selectedRating}
                                sortBy={sortBy}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Section */}
            <div className="bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <BlogSection />
                </div>
            </div>
        </main>
        </div>
        <Footer />
    </div>
)
}
