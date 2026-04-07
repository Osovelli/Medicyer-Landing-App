import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Header } from "@/components/Header"
import { BlogSection } from "@/components/BlogSection"
import { Footer } from "@/components/Footer"
import { DrugCard } from "@/components/drugs/DrugCard"
import { PrescriptionUpload } from "@/components/pharmacy/PrescriptionUpload"
import { PharmacyAbout } from "@/components/pharmacy/PharmacyAbout"
import { Link, useNavigate } from "react-router-dom"

// Sample data
const pharmacyData = {
  logoUrl: "/h-medix.png",
  name: "HMedix Pharmacy",
  location: "Abuja, Nigeria",
  isVerified: true,
  rating: 4.5,
  verifiedCount: "Verified",
  purchasesCount: "34K",
  fullAddress: "No 26, 62 Road, off 6th Ave. Gwarimpa - Abuja, NG",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
}

const categories = [
  "Infectious Disease",
  "Ophthalmic",
  "Oncology",
  "Product type",
  "Product type",
  "Product type",
  "Product type",
]

const drugs = [
  {
    id: "1",
    name: "Ampicilyn 450 MG",
    description: "Measures the levels of substances in your blood...",
    imageUrl: "/meds.png",
  },
  {
    id: "2",
    name: "Ampicilyn 450 MG",
    description: "Measures the levels of substances in your blood...",
    imageUrl: "/meds.png",
  },
  {
    id: "3",
    name: "Ampicilyn 450 MG",
    description: "Measures the levels of substances in your blood...",
    imageUrl: "/meds.png",
  },
  {
    id: "4",
    name: "Ampicilyn 450 MG",
    description: "Measures the levels of substances in your blood...",
    imageUrl: "/meds.png",
  },
  {
    id: "5",
    name: "Ampicilyn 450 MG",
    description: "Measures the levels of substances in your blood...",
    imageUrl: "/meds.png",
  },
  {
    id: "6",
    name: "Ampicilyn 450 MG",
    description: "Measures the levels of substances in your blood...",
    imageUrl: "/meds.png",
  },
  {
    id: "7",
    name: "Ampicilyn 450 MG",
    description: "Measures the levels of substances in your blood...",
    imageUrl: "/meds.png",
  },
  {
    id: "8",
    name: "Ampicilyn 450 MG",
    description: "Measures the levels of substances in your blood...",
    imageUrl: "/meds.png",
  },
  {
    id: "9",
    name: "Ampicilyn 450 MG",
    description: "Measures the levels of substances in your blood...",
    imageUrl: "/meds.png",
  },
  {
    id: "10",
    name: "Ampicilyn 450 MG",
    description: "Measures the levels of substances in your blood...",
    imageUrl: "/meds.png",
  },
  {
    id: "11",
    name: "Ampicilyn 450 MG",
    description: "Measures the levels of substances in your blood...",
    imageUrl: "/meds.png",
  },
]

export default function PharmacyProfilePage() {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState("Ophthalmic")

  return (
   <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
    <Header />
    <div className="w-full max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className=" px-4 py-4 ">
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
    <main className="">
      {/* Top section with 2-column layout */}
      <div className="grid rounded-md bg-white grid-cols-1 lg:grid-cols-2 gap-8 px-6 py-8">
        {/* Left column - Pharmacy About */}
        <div className="lg:col-span-1">
          <PharmacyAbout {...pharmacyData} />
        </div>

        {/* Right column - Prescription Upload */}
        <div className="lg:col-span-1">
          <PrescriptionUpload />
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200" />

      {/* Drugs section */}
      <div className="px-6 py-8 max-w-9xl mx-auto">
        <h2 className="text-2xl font-bold text-sky mb-6 text-left">Category</h2>

        {/* Category tabs */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-3">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`rounded-full whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-[#1a1a4d] text-white hover:bg-[#0f0f2e]"
                  : "bg-[#F3F3FF] text-gray-700 hover:bg-gray-50"
              }`}
            >
              {category}
            </Button>
          ))}
          <Button
            variant="outline"
            className="rounded-full whitespace-nowrap border border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
          >
            More
          </Button>
        </div>

        {/* Drug Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {drugs.map((drug) => (
            <DrugCard key={drug.id} {...drug} />
          ))}
        </div>

        {/* Promotional Banner */}
        <div>
            <img src="/medical banner.png" alt="Medical Checkup CTA" className="w-full rounded-2xl my-12" />
        </div>

        {/* More drugs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {drugs.slice(0, 8).map((drug) => (
            <DrugCard key={`${drug.id}-2`} {...drug} />
          ))}
        </div>
      </div>
    </main>
    </div> 
    <BlogSection />
    <Footer />
   </div> 
  )
}
