import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/FAQSection"
import { BlogSection } from "@/components/BlogSection"
import { MedicalCheckupsCTA } from "@/components/doctors/MedicalCheckupsCTA"
import { CuratedLabs } from "@/components/lab/CuratedLabs"
import { LabServicesSection } from "@/components/lab/LabServiceSection"
import { LabsFilterSidebar } from "@/components/lab/LabFilterSidebar"
import { LabsGrid } from "@/components/lab/LabsGrid"
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FeaturedHospitals } from "@/components/hospital/FeaturedHospital"
import { PharmacyGrid } from "@/components/pharmacy/PharmacyGrid"
import { HospitalGrid } from "@/components/hospital/HospitalGrid"
import { BloodBankFilterSidebar } from "@/components/bloodbank/BloodBankFilterSidebar"
import { FeaturedBloodBanks } from "@/components/bloodbank/FeaturedBloodBanks"
import { BloodbanksGrid } from "@/components/bloodbank/BloodBankGrid"

export default function BlogPage() {
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
                                    <DropdownMenuItem>Donors</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => navigate('/referral')}>
                                        Referral
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>Blog</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/blood-bank">Blood Bank</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="">List</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        {/* <BreadcrumbItem>
                            <BreadcrumbLink href="/doctors/cardiologist">Cardiologist</BreadcrumbLink>
                        </BreadcrumbItem> */}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </div>

      {/* Main Content */}
      <main className="mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-0">

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
