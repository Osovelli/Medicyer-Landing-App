import { useState, useMemo } from "react";
import {
  Phone,
  MessageCircle,
  Navigation,
  Share2,
  Search,
  ChevronRight,
  LucideBird,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
    Breadcrumb, 
    BreadcrumbEllipsis, 
    BreadcrumbItem, 
    BreadcrumbLink, 
    BreadcrumbList, 
    BreadcrumbSeparator 
} from "@/components/ui/breadcrumb"


import { TestCard } from "@/components/lab/TestCard";
import { CategoryFilter } from "@/components/lab/CategoryFilter";
import { ScheduleCard } from "@/components/lab/ScheduleCard";
import { ReviewSection } from "@/components/lab/ReviewSection";
import { Header } from "@/components/Header";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/lab/BookingModal";
import { ScheduleSelector } from "@/components/custom/ScheduleSelector";
import { useNavigate } from "react-router-dom";
import { SaveModal } from "@/components/lab/SaveTestModal";
import { ItemAddedModal } from "@/components/lab/ItemAddedModal";
import { ClinicCard } from "@/components/hospital/ClinicCard";

// ─── Sample data ──────────────────────────────────────────────
const CATEGORIES = [
  { id: "Routine Tests", label: "Routine Blood Tests" },
  { id: "Specialized Tests", label: "Specialized Tests" },
  { id: "Electrolyte & Minerals", label: "Electrolyte & Minerals" },
  { id: "Culture & Allergies", label: "Culture & Allergies" },
  { id: "Pain Tolerance & Anti-inflammatory", label: "Pain Tolerance & Anti-inflammatory" },
  { id: "Cardiovascular", label: "Cardiovascular" },
  { id: "diabetes", label: "Diabetes" },
  { id: "vitamins", label: "Vitamins & Supplements" },
];

/* const TESTS = [
  { id: 1, title: "Liver Function Tests (LFT)", price: 5000, originalPrice: 5000, points: 15, serviceType: "Home service", category: "Routine Tests" },
  { id: 2, title: "Liver Function Tests (LFT)", price: 5000, originalPrice: null, points: 15, serviceType: "Home service", category: "Routine Tests" },
  { id: 3, title: "Liver Function Tests (LFT)", price: 5000, originalPrice: 5000, points: 15, serviceType: "Home service", category: "Routine Tests" },
  { id: 4, title: "Liver Function Tests (LFT)", price: 5000, originalPrice: null, points: 15, serviceType: "Home service", category: "Routine Tests" },
  { id: 5, title: "Liver Function Tests (LFT)", price: 5000, originalPrice: 5000, points: 15, serviceType: "Home service", category: "Routine Tests" },
  { id: 6, title: "Liver Function Tests (LFT)", price: 5000, originalPrice: null, points: 15, serviceType: "Home service", category: "Routine Tests" },
  { id: 7, title: "Liver Function Tests (LFT)", price: 5000, originalPrice: 5000, points: 15, serviceType: "Home service", category: "Specialized Tests" },
  { id: 8, title: "Liver Function Tests (LFT)", price: 5000, originalPrice: null, points: 15, serviceType: "Home service", category: "Specialized Tests" },
  { id: 9, title: "Liver Function Tests (LFT)", price: 5000, originalPrice: 5000, points: 15, serviceType: "Home service", category: "Electrolyte & Minerals" },
  { id: 10, title: "Liver Function Tests (LFT)", price: 5000, originalPrice: null, points: 15, serviceType: "Home service", category: "Culture & Allergies" },
  { id: 11, title: "Liver Function Tests (LFT)", price: 5000, originalPrice: 5000, points: 15, serviceType: "Home service", category: "Routine Tests" },
  { id: 12, title: "Liver Function Tests (LFT)", price: 5000, originalPrice: null, points: 15, serviceType: "Home service", category: "Routine Tests" },
]; */

const CLINICS = [
  { id: 1, title: "Family Health Clinic", slots: 12, category: "General Medicine" },
  { id: 2, title: "Dental Care Clinic", slots: 8, category: "Dental" },
  { id: 3, title: "Pediatric Clinic", slots: 5, category: "Pediatrics" },
  { id: 4, title: "Cardiology Clinic", slots: 10, category: "Cardiology" },
  { id: 5, title: "Dermatology Clinic", slots: 7, category: "Dermatology" },
  { id: 6, title: "Orthopedic Clinic", slots: 9, category: "Orthopedics" },

];

const SCHEDULE = [
  { day: "Mon", open: "8:00am", close: "9:00pm" },
  { day: "Tue", open: "8:00am", close: "9:00pm" },
  { day: "Wed", open: "8:00am", close: "9:00pm" },
  { day: "Thu", open: "8:00am", close: "9:00pm" },
  { day: "Fri", open: "8:00am", close: "9:00pm" },
  { day: "Sat", open: "9:00am", close: "5:00pm" },
  { day: "Sun", closed: true },
];

  const timeSlots = [
    "09:30 AM", "10:30 AM", "11:30 AM",
    "01:30 PM", "03:00 PM", "03:30 PM",
    "07:00 PM", "09:30 PM",
  ];
  
  const selectedDay = "Mon";
  const selectedTime = "10:30 AM";
  const bookedSlots = ["10:30 AM", "03:30 PM"];

const REVIEW_DATA = {
  averageRating: 4.2,
  totalReviews: 241,
  distribution: { 5: 120, 4: 60, 3: 30, 2: 18, 1: 13 },
};

const ACTIONS = [
  { id: "call", icon: Phone, label: "Call", color: "text-blue-600 dark:text-blue-400" },
  { id: "chat", icon: MessageCircle, label: "Chat", color: "text-green-600 dark:text-green-400" },
  { id: "direction", icon: Navigation, label: "Direction", color: "text-orange-500 dark:text-orange-400" },
  { id: "share", icon: Share2, label: "Share", color: "text-violet-600 dark:text-violet-400" },
];


export default function HospitalDetailPage() {
  const [activeCategory, setActiveCategory] = useState("Routine Tests");
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [saveModalOpen, setSaveModalOpen] = useState(false);
  const [itemAddedModalOpen, setItemAddedModalOpen] = useState(false);
  const [savedTests, setSavedTests] = useState([])

  const navigate = useNavigate()

  function handleBook(test) {
    setSelectedTest(test);
    setBookingOpen(true);
  }

  // Function to handle saving a test
  const handleSave = (test) => {
    setSavedTests((prev) => [...prev, test]);
    setItemAddedModalOpen(true);
  };

  const handleSeeFile = () => {
    setItemAddedModalOpen(false);
    setSaveModalOpen(true);
  };

  /* const filteredTests = useMemo(
    () => TESTS.filter((t) => t.category === activeCategory),
    [activeCategory]
  ); */

  /* const filteredClinics = useMemo(
    () => CLINICS.filter((c) => c.category == activeCategory), // Ensure this reflects your data structure
    [activeCategory]
  ); */

  const filteredClinics = useMemo(() => {
    return CLINICS;
  }, [activeCategory, selectedProximity, selectedRating]);

  function handleAction(id) {
    // wire up your action handlers here
    console.log("Action:", id);
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
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
                                    <DropdownMenuItem onClick={() => navigate('/donor')}>
                                      Donor
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/labs">Labs</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/labs/details">Details</BreadcrumbLink>
                        </BreadcrumbItem>
                        {/* <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/doctors/cardiologist">Cardiologist</BreadcrumbLink>
                        </BreadcrumbItem> */}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">

        {/*Two-column grid*/}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 xl:gap-8 ">

          {/*LEFT COLUMN*/}
          <div className="min-w-0">

            {/* Category filter pills */}
            {/* <CategoryFilter
              categories={CATEGORIES}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              className="mb-6"
            /> */}

            {/* Test cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredClinics.map((clinic) => (
              <ClinicCard
                key={clinic.id}
                title={clinic.title}
                slots={clinic.slots} // Make sure your data provides this
                onBook={() => handleBook({
                  title: clinic.title,
                  // Additional properties as needed
                  ...clinic
                })}
                onSave={() => handleSave(clinic)} // Adjust as per your data structure
              />
            ))}
          </div>
          {/* <MedicalCheckupsCTA /> */}
          <div>
              <img src="/medical banner.png" alt="Medical Checkup CTA" className="w-full rounded-2xl my-12" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredClinics.map((clinic) => (
              <ClinicCard
                key={clinic.id}
                title={clinic.title}
                slots={clinic.slots} // Make sure your data provides this
                onBook={() => handleBook({
                  title: clinic.title,
                  // Additional properties as needed
                })}
                onSave={() => handleSave(clinic)} // Adjust as per your data structure
              />
            ))}
          </div>

            {filteredClinics.length === 0 && (
              <div className="text-center py-16 text-slate-400 dark:text-slate-500 text-sm">
                No clinics available in this category.
              </div>
            )}
          </div>

          {/* ═══ RIGHT COLUMN (Sidebar) ═══ */}
          <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start -order-1 lg:order-1">

            {/* About */}
            <Card className="border-slate-100 dark:border-slate-700 shadow-none">
              <CardHeader className="pb-2 px-5 pt-5">
                <CardTitle className="text-base font-bold text-slate-900 dark:text-slate-100">
                  About
                </CardTitle>
              </CardHeader>
              <CardContent className="px-5 pb-5">
                <p
                  className={cn(
                    "text-sm text-slate-500 dark:text-slate-400 leading-relaxed",
                    !aboutExpanded && "line-clamp-4"
                  )}
                >
                  Consectetur dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <button
                  onClick={() => setAboutExpanded(!aboutExpanded)}
                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-2 hover:underline"
                >
                  {aboutExpanded ? "See less" : "See more"}
                </button>
              </CardContent>
            </Card>

            {/* Action buttons */}
            <Card className="border-slate-100 dark:border-slate-700 shadow-none">
              <CardContent className="px-5 py-5">
                <div className="flex items-center justify-around">
                  {ACTIONS.map(({ id, icon: Icon, label, color }) => (
                    <button
                      key={id}
                      onClick={() => handleAction(id)}
                      className="flex flex-col items-center gap-1.5 group"
                    >
                      <div
                        className={cn(
                          "w-11 h-11 rounded-full flex items-center justify-center",
                          "bg-slate-100 dark:bg-slate-700",
                          "group-hover:bg-slate-200 dark:group-hover:bg-slate-600",
                          "transition-colors duration-200"
                        )}
                      >
                        <Icon className={cn("w-5 h-5", color)} />
                      </div>
                      <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400">
                        {label}
                      </span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Schedule */}
            {/* <ScheduleCard schedule={SCHEDULE} /> */}
            <ScheduleSelector
              timeSlots={timeSlots}
              bookedSlots={bookedSlots}
              totalSlots={12}
              selectedDay={selectedDay}
              selectedTime={selectedTime}
              onDayChange={setSelectedDay}
              onTimeChange={setSelectedTime}
            />

            {/* Reviews */}
            <ReviewSection
              averageRating={REVIEW_DATA.averageRating}
              totalReviews={REVIEW_DATA.totalReviews}
              distribution={REVIEW_DATA.distribution}
              onSeeReview={() => navigate("/hospital/reviews/all")}
            />
          </aside>
        </div>
        <BookingModal
            open={bookingOpen}
            onOpenChange={setBookingOpen}
            test={selectedTest}
            lab={{
                name: "Jasiri Med Laboratory",
                address: "No 26, 62 Road, off 6th Ave. Gwarimpa – Abuja, NG",
                rating: "3.5",
                reviewCount: "503",
            }}
            onComplete={(dest) => {
                // dest = "bookings" | "home"
                // navigate accordingly
            }}
        />

        {/* Item Added Modal */}
        <ItemAddedModal
            open={itemAddedModalOpen}
            onOpenChange={setItemAddedModalOpen}
            onSeeFile={handleSeeFile}
        />
            
            {/* Save Modal */}
            <SaveModal
              open={saveModalOpen}
              onOpenChange={setSaveModalOpen}
              savedTests={savedTests}
            />
      </div>
      {/* Blog Section */}
      <div className="">
        <BlogSection />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
