import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FAQSection } from "@/components/FAQSection";
import { BlogSection } from "@/components/BlogSection";
import DonorFilterSidebar from "@/components/donor/DonorFilterSidebar";
import DonorGrid from "@/components/donor/DonorGrid";
import { CategoryFilter } from "@/components/lab/CategoryFilter";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { History } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { WavesIcon } from "@/components/custom/Icons";
import DonationHistoryModal from "@/components/donor/DonationHistoryModal";
import { useNavigate } from "react-router-dom";

export default function DonorPage() {
  const [selectedBloodType, setSelectedBloodType] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [activeCategory, setActiveCategory] = useState("location");
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const navigate = useNavigate();

  const categories = [
    { id: "location", label: "Location: Proximity" },
    { id: "bloodType", label: "Blood Type: Default" },
    { id: "rating", label: "Rating: Default" }
  ];

  const handleBloodTypeChange = (type) => {
    setSelectedBloodType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleStatusChange = (status) => {
    setSelectedStatus((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header isLoggedIn={true} userName="Tobi Dev" />
      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <div className=" px-4 py-4 border-b border-gray-200">
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
                                    <DropdownMenuItem onClick={() => navigate('/pharmacy')}>
                                      Pharmacy
                                      </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => navigate('/hospitals')}>
                                        Hospital
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => navigate('/blood-bank')}>
                                      Blood Bank
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/donors">Donors</BreadcrumbLink>
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
        <div className="mx-auto px-6 py-8">
          <div className="relative bg-linear-to-r from-gray-800 to-gray-900 h-40 rounded-2xl overflow-hidden">
              <img src="/blood sampling.jpg" alt="Donor Hero" className="absolute inset-0 w-full h-full object-cover opacity-80" />
          </div>
        </div>

        {/* Main Content */}
        <main className="mx-auto px-6 pb-16">

          <div className="flex gap-8  flex-col sm:flex-row">
            {/* Sidebar */}
            <aside className="w-full sm:w-50 xl:w-64 shrink-0">
              <DonorFilterSidebar 
                onBloodTypeChange={handleBloodTypeChange}
                selectedBloodType={selectedBloodType}
                onStatusChange={handleStatusChange}
                selectedStatus={selectedStatus}
              />
            </aside>

            {/* main section */}
            <div className="flex-1">
              {/* Category Filters */}
              <div className="mb-6">
              <CategoryFilter
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
              />
              </div>

              {/* Title and Donation History */}
              <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Donors</h1>
              <button 
              className="flex items-center border p-2 rounded-2xl gap-2 text-sky font-normal text-sm"
              onClick={() => setIsHistoryModalOpen(true)}
              >
                  <WavesIcon size={18} />
                  Donation History
              </button>
              </div>

              <div className="flex flex-col gap-8">

              <DonorGrid 
                selectedBloodType={selectedBloodType}
                selectedStatus={selectedStatus}
              />
              {/* Medical Checkups CTA */}
              <div className="relative rounded-2xl">
                  <div>
                      <img src="/medical banner.png" alt="Medical Checkup CTA" className="w-full rounded-2xl" />
                  </div>
              </div>

              <DonorGrid 
                selectedBloodType={selectedBloodType}
                selectedStatus={selectedStatus}
              />
              </div>

            </div>
          </div>
        </main>


        {/* Blog Section */}
        <div className="">
          <BlogSection />
        </div>

        {/* FAQ Section */}
        <div className="">
          <FAQSection />
        </div>
      </div>
      
      {/* Footer */}
      <Footer />

      {/* Donation History Modal */}
      <DonationHistoryModal 
        isOpen={isHistoryModalOpen} 
        onClose={() => setIsHistoryModalOpen(false)}
      />
    </div>
  );
}
