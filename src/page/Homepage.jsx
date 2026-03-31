import { ServicesSection } from "@/components/ServiceSection"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { DoctorsSection } from "@/components/DoctorSection"
import { FeatureSection } from "@/components/FeatureSection"
import { PharmacySection } from "@/components/PharmacySection"
import { TrendingProductsSection } from "@/components/TrendingProductsSection"
import { BenefitsSection } from "@/components/BenefitSection"
import { FAQSection } from "@/components/FAQSection"
import { BlogSection } from "@/components/BlogSection"
import { Footer } from "@/components/Footer"

export default function Homepage() {
  // Toggle this to see logged in vs logged out state
  const isLoggedIn = true
  const userName = "Tobi Dev"

  return (
    <div className="min-h-screen">
      <Header isLoggedIn={isLoggedIn} userName={userName} />
      <main className="">
      <HeroSection />
      <ServicesSection />
      <DoctorsSection />
      <FeatureSection />
      <PharmacySection />
      <TrendingProductsSection />
      <BenefitsSection />
      <FAQSection />
      <BlogSection />
      <Footer />
      </main>
    </div>
  )
}
