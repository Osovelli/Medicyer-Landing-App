import { useParams, Link } from "react-router-dom"
import { DoctorProfileDetails } from "@/components/doctors/DoctorProfileDetails"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BlogSection } from "@/components/BlogSection"

import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SimilarServices } from "@/components/doctors/SimilarServices"


// NOTE: In a real application, you would fetch this data from an API
// or a shared data module, not duplicate it.
const DOCTORS_DATA = [
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
    name: "Dr. Aisha Bello",
    specialty: "Orthopedic Surgeon",
    rating: 4.8,
    location: "Lagos, NG",
    imageUrl: "/doctor 2.jpg",
    availability: "tomorrow",
    specialtyId: "orthopedic",
    proximity: "10km",
  },
  // ... include the rest of your DOCTORS_DATA array here
  {
    id: 12,
    name: "Dr. Chidi Okoro",
    specialty: "Orthopedic Surgeon",
    rating: 3.5,
    location: "Abuja, NG",
    imageUrl: "/doctor 3.jpg",
    availability: "this-week",
    specialtyId: "orthopedic",
    proximity: "5km",
  },
]


export function DoctorProfilePage() {
  const { id } = useParams()
  const doctor = DOCTORS_DATA.find((doc) => doc.id === parseInt(id, 10))

  if (!doctor) {
    return <div>Doctor not found.</div>
  }

  const breadcrumbPaths = [
    { name: "Home", path: "/" },
    { name: "Doctors", path: "/doctors" },
    { name: doctor.name },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow bg-gray-50 px-0 md:px-14 lg:px-24">
        <div className=" mx-auto px-4 py-4  border-gray-200">
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
        <DoctorProfileDetails />
        <SimilarServices />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}