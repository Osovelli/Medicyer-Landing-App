import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, MapPin, Droplet, X, HeartPulse } from "lucide-react";

export default function DonationHistoryModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("past");

  const pastDonations = [
    {
      id: "#EB2456/2GX",
      name: "Sharafadeen Designer",
      type: "Blood Donor (O+)",
      date: "Fri, Dec 2024 - 10:30 PM",
      location: "Gwarinpa - Abuja, NG",
      status: "pending",
      avatar: "/donor avatar.png"
    },
    {
      id: "#EB2456/2GX",
      name: "Sharafadeen Designer",
      type: "Blood Donor (O+)",
      date: "Fri, Dec 2024 - 10:30 PM",
      location: "No 26, 62 Road, off 6th Ave, Gwarinpa - Abuja, NG",
      status: "accepted",
      avatar: "/donor avatar.png"
    },
    {
      id: "#EB2456/2GX",
      name: "Sharafadeen Designer",
      type: "Blood Donor (O+)",
      date: "Fri, Dec 2024 - 10:30 PM",
      location: "",
      status: "pending",
      avatar: "/donor avatar.png"
    }
  ];

  const upcomingDonations = [
    {
      id: "#EB2456/2GX",
      name: "Sharafadeen Designer",
      type: "Blood Donor (O+)",
      date: "Fri, Dec 2024 - 10:30 PM",
      location: "No 26, 62 Road, off 6th Ave, Gwarinpa - Abuja, NG",
      status: "completed",
      avatar: "/donor avatar.png"
    },
    {
      id: "#EB2456/2GX",
      name: "Sharafadeen Designer",
      type: "Blood Donor (O+)",
      date: "Fri, Dec 2024 - 10:30 PM",
      location: "No 26, 62 Road, off 6th Ave, Gwarinpa - Abuja, NG",
      status: "cancelled",
      avatar: "/donor avatar.png"
    },
    {
      id: "#EB2456/2GX",
      name: "Sharafadeen Designer",
      type: "Blood Donor (O+)",
      date: "Fri, Dec 2024 - 10:30 PM",
      location: "",
      status: "completed",
      avatar: "/donor avatar.png"
    }
  ];

  const donations = activeTab === "past" ? pastDonations : upcomingDonations;

  const renderActionButtons = (status) => {
    if (activeTab === "past") {
      switch (status) {
        case "pending":
          return (
            <div className="flex gap-3 justify-end">
              <button className="px-6 py-2 bg-purple-100 text-purple-700 rounded-full font-medium text-sm hover:bg-purple-200">
                Pending Request
              </button>
              <button className="px-6 py-2 border border-gray-900 text-gray-900 rounded-full font-medium text-sm hover:bg-gray-50">
                View
              </button>
            </div>
          );
        case "accepted":
          return (
            <div className="flex gap-3 justify-end"> 
              <button className="px-8 py-2 bg-emerald-200 text-emerald-700 rounded-full font-medium text-sm hover:bg-emerald-300">
                Accepted
              </button>
            </div>
          );
        default:
          return null;
      }
    } else {
      switch (status) {
        case "completed":
          return (
            <div className="flex gap-3 justify-end">
              <button className="px-6 py-2 bg-green-100 text-green-700 rounded-full font-medium text-sm hover:bg-green-200">
                Completed
              </button>
              <button className="px-6 py-2 border border-gray-900 text-gray-900 rounded-full font-medium text-sm hover:bg-gray-50">
                Add Review
              </button>
            </div>
          );
        case "cancelled":
          return (
            <div className="flex gap-3 justify-end">
              <button className="px-8 py-2 bg-gray-100 text-gray-900 rounded-full font-medium text-sm hover:bg-gray-200">
                Cancelled
              </button>
            </div>
          );
        default:
          return null;
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 gap-0">
        <DialogHeader className="px-6 pt-6 pb-0 border-b border-gray-200">
          <DialogTitle className="text-xl font-bold text-gray-900">Donation History (05)</DialogTitle>
        </DialogHeader>

        {/* Tabs */}
        <div className="flex items-center justify-between mt-2 border-b border-gray-200 px-6">
          <button
            onClick={() => setActiveTab("past")}
            className={`pb-4 font-medium flex-1 text-sm border-b-2 transition-colors ${
              activeTab === "past"
                ? "text-gray-900 border-gray-900"
                : "text-gray-400 border-transparent hover:text-gray-600"
            }`}
          >
            Past
          </button>
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`pb-4 ml-8 font-medium flex-1 text-sm border-b-2 transition-colors ${
              activeTab === "upcoming"
                ? "text-gray-900 border-gray-900"
                : "text-gray-400 border-transparent hover:text-gray-600"
            }`}
          >
            Upcoming
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-6 max-h-96 overflow-y-auto">
          {donations.map((donation, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-6 last:border-0">
              <p className="text-xs text-gray-600 font-medium mb-4">Booking ID : {donation.id}</p>

              <div className="flex items-start gap-4 mb-4">
                <img
                  src={donation.avatar}
                  alt={donation.name}
                  className="w-16 h-16 rounded-lg object-cover shrink-0"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-gray-900">{donation.name}</h3>
                  <div className="text-xs text-gray-600 space-y-2 mt-2">
                    <p className="flex items-center gap-2">
                      <HeartPulse size={14} className="shrink-0" /> {donation.type}
                    </p>
                    <p className="flex items-center gap-2">
                      <Calendar size={14} className="shrink-0" /> {donation.date}
                    </p>
                    {donation.location && (
                      <p className="flex items-start gap-2">
                        <MapPin size={14} className="shrink-0 mt-0.5" /> {donation.location}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                {renderActionButtons(donation.status)}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
