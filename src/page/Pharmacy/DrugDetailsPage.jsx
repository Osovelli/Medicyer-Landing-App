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
import { DrugImageGallery } from "@/components/drugs/DrugImageGallery"
import { DrugDetailsInfo } from "@/components/drugs/DrugDetailsInfo"

// Sample drug data - in a real app, this would come from an API or database
const drugData = {
  id: "1",
  name: "Ampicilyn Lorem ipsum dolor sit 450 MGL",
  description: "Measures the levels of substances in your blood...",
  loyaltyPoints: 12,
  price: 45000,
  rating: 4.5,
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... ",
  mainImage: "/meds.png",
  thumbnails: [
    "/meds.png",
    "/meds.png",
    "/meds.png",
    "/meds.png",
  ],
}

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
]

export default function DrugDetailsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Ophthalmic")
  const handleAddToCart = (quantity) => {
    console.log(`Added ${quantity} of ${drugData.name} to cart`)
    // Handle add to cart logic here
  }

  const handleWishlist = () => {
    console.log(`Added ${drugData.name} to wishlist`)
    // Handle wishlist logic here
  }

  return (
   <div className="min-h-screen bg-[#FAFAFA]">
    <Header />
    {/* Breadcrumb */}
    <div className="max-w-7xl  mx-auto px-4 py-4 border-b border-gray-200">
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
    <main className=" max-w-7xl mx-auto">
      {/* Top section with 2-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 py-8 max-w-7xl mx-auto">
        {/* Left column - Image Gallery */}
        <div>
          <DrugImageGallery mainImage={drugData.mainImage} thumbnails={drugData.thumbnails} drugName={drugData.name} />
        </div>

        {/* Right column - Drug Details */}
        <div>
          <DrugDetailsInfo
            name={drugData.name}
            description={drugData.description}
            loyaltyPoints={drugData.loyaltyPoints}
            price={drugData.price}
            rating={drugData.rating}
            about={drugData.about}
            onAddToCart={handleAddToCart}
            onWishlist={handleWishlist}
          />
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200" />

      {/* Drugs section */}
      <div className="px-6 py-8 max-w-7xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-3xl font-semibold text-gray-900 text-left">Featured Product</h2>
          <h2 className="text-lg uppercase font-normal text-sky hover:text-sky-900 cursor-pointer">see all products</h2>
        </div>

        {/* Category tabs */}
        {/* <div className="flex gap-3 mb-8 overflow-x-auto pb-3">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`rounded-full whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-[#1a1a4d] text-white hover:bg-[#0f0f2e]"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-50"
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
        </div> */}

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
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {drugs.slice(0, 8).map((drug) => (
            <DrugCard key={`${drug.id}-2`} {...drug} />
          ))}
        </div> */}
      </div>
    </main>
    <BlogSection />
    <Footer />
   </div> 
  )
}
