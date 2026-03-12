import React, { useState } from "react";
import DonorCard from "./DonorCard";
import DonorModalManager from "./DonorModalManager";

const DonorGrid = ({ selectedBloodType=[], selectedStatus=[] }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedDonor, setSelectedDonor] = useState(null);

  const handleCardClick = (donor) => {
    setSelectedDonor(donor);
    setIsProfileOpen(true);
  };

  const handleCloseModal = () => {
    setIsProfileOpen(false);
    setSelectedDonor(null);
  };

  // Mocked donors data with complete donor information
  const donors = [
    {
      id: 1,
      name: "Sharafadeen Mubarak",
      bloodType: "AB+",
      location: "Abuja, Nigeria",
      donorType: "Blood Donors",
      verified: true,
      image: "/donor image.jpg"
    },
    {
      id: 2,
      name: "Sharafadeen Mubarak",
      bloodType: "B+",
      location: "Abuja, Nigeria",
      donorType: "Blood Donors",
      verified: true,
      image: "/donor image.jpg"
    },
    {
      id: 3,
      name: "Sharafadeen Mubarak",
      bloodType: "O+",
      location: "Abuja, Nigeria",
      donorType: "Blood Donors",
      verified: true,
      image: "/donor image.jpg"
    },
    {
      id: 4,
      name: "Sharafadeen Mubarak",
      bloodType: "AB+",
      location: "Abuja, Nigeria",
      donorType: "Blood Donors",
      verified: true,
      image: "/donor image.jpg"
    },
    {
      id: 5,
      name: "Sharafadeen Mubarak",
      bloodType: "B+",
      location: "Abuja, Nigeria",
      donorType: "Blood Donors",
      verified: true,
      image: "/donor image.jpg"
    },
    /* {
      id: 6,
      name: "Sharafadeen Mubarak",
      bloodType: "B+",
      location: "Abuja, Nigeria",
      donorType: "Blood Donors",
      verified: true,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      id: 7,
      name: "Sharafadeen Mubarak",
      bloodType: "AB+",
      location: "Abuja, Nigeria",
      donorType: "Blood Donors",
      verified: true,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      id: 8,
      name: "Sharafadeen Mubarak",
      bloodType: "O+",
      location: "Abuja, Nigeria",
      donorType: "Blood Donors",
      verified: true,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    } */
  ];

  const filteredDonors = donors.filter((donor) => 
    (selectedBloodType.length === 0 || selectedBloodType.includes(donor.donorType)) &&
    (selectedStatus.length === 0 || selectedStatus.includes(donor.bloodType))
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDonors.map((donor) => (
          <DonorCard key={donor.id} donor={donor} onCardClick={handleCardClick} />
        ))}
      </div>
      
      {filteredDonors.length === 0 && (
        <div className="text-center py-16 text-slate-400 dark:text-slate-500 text-sm">
          No donors available matching your criteria.
        </div>
      )}

      {/* Donor Profile Modal */}
      <DonorModalManager 
        selectedDonor={selectedDonor}
        isProfileOpen={isProfileOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default DonorGrid;
