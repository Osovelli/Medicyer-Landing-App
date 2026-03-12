import { useState } from "react";
import DonorProfileModal from "./DonorProfileModal";
import DonationRequestConfirmation from "./DonationRequestConfirmation";
import DonationLoadingModal from "./DonationLoadingModal";
import DonationConfirmationModal from "./DonationConfirmationModal";

export default function DonorModalManager({ selectedDonor, isProfileOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState("profile"); // profile, confirmation, loading, success

  const handleRequestDonation = () => {
    setCurrentStep("confirmation");
  };

  const handleProceed = () => {
    setCurrentStep("loading");
    // Simulate API call
    setTimeout(() => {
      setCurrentStep("success");
    }, 2000);
  };

  const handleCloseAll = () => {
    setCurrentStep("profile");
    onClose();
  };

  const handleSuccessClose = () => {
    setCurrentStep("profile");
    onClose();
  };

  return (
    <>
      <DonorProfileModal
        isOpen={isProfileOpen && currentStep === "profile"}
        onClose={handleCloseAll}
        donor={selectedDonor}
        onRequestDonation={handleRequestDonation}
      />

      <DonationRequestConfirmation
        isOpen={isProfileOpen && currentStep === "confirmation"}
        onClose={handleCloseAll}
        donor={selectedDonor}
        onProceed={handleProceed}
      />

      <DonationLoadingModal
        isOpen={isProfileOpen && currentStep === "loading"}
      />

      <DonationConfirmationModal
        isOpen={isProfileOpen && currentStep === "success"}
        onClose={handleSuccessClose}
      />
    </>
  );
}
