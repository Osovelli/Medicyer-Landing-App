import { BlogSection } from '@/components/BlogSection'
import CheckoutFlowManager from '@/components/cart/CheckoutFlowManager'
import CustomInput from '@/components/custom/CustomInput'
import { Heart2Icon, HelpIcon, LocationIcon, LockIcon, UserRoundedIcon } from '@/components/custom/Icons'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import AddressDetails from '@/components/profile/AddressDetails'
import AuthorizationModal from '@/components/profile/AuthorizationModal'
import DeleteConfirmationModal from '@/components/profile/DeleteConfirmationModal'
import FavouriteDetails from '@/components/profile/FavoriteDetails'
import HelpCenterDetails from '@/components/profile/HelpCenterDetails'
import PrivacyPolicy from '@/components/profile/PrivacyPolicy'
import ProfileDetails from '@/components/profile/ProfileDetails'
import ProfileLoadingModal from '@/components/profile/ProfileLoadingModal'
import SuccessModal from '@/components/profile/SuccessModal'
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ArrowLeftIcon, ChevronRight, Clock, Edit2, HeartHandshakeIcon, HelpCircle, LocateFixedIcon, Lock, MapPin, Trash2, User2, UserIcon } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'



export default function ProfilePage() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('profile-details');
    const [profileImage, setProfileImage] = useState('/donor image.jpg');
    const fileInputRef = useRef(null);
    const [profileData, setProfileData] = useState({
    firstName: 'Sharafadeen',
    lastName: '',
    phoneNo: '234',
    email: 'user@email.com',
  });

  // Modal States
  const [isAuthorizationModalOpen, setAuthorizationModalOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isDeleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

  

  const menuItems = [
    { id: 'profile-details', label: 'Profile Details', icon: UserRoundedIcon },
    { id: 'address', label: 'Address', icon: LocationIcon },
    { id: 'favourite', label: 'Favourite', icon: Heart2Icon },
    { id: 'help-centre', label: 'Help Centre', icon: HelpIcon },
    { id: 'privacy-policy', label: 'Privacy Policy', icon: LockIcon },
    { id: 'delete-account', label: 'Delete Account', icon: Trash2 },
  ];

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleUpdateProfile = () => {
    console.log('Updating profile with:', profileData);
    // Handle profile update logic here
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleDeleteAccount = () => {
    setDeleteConfirmationOpen(true);
  };

  const handleAuthorizationConfirm = async (password) => {
    setLoading(true);
    // Simulate API call for account deletion
    setTimeout(() => {
      // Implement your deletion logic here.
      setLoading(false);
      setSuccess(true); // Simulate success
    }, 2000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile-details':
        return (
          <ProfileDetails />
        );

      case 'address':
        return (
          <AddressDetails />
        );

      case 'favourite':
        return (
          <FavouriteDetails />
        );

      case 'help-centre':
        return (
          <HelpCenterDetails />
        );

      case 'privacy-policy':
        return (
          <PrivacyPolicy />
        );

      case 'delete-account':
        handleDeleteAccount();
        return null;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]  dark:bg-slate-900">
            <Header isLoggedIn={true} userName="Tobi Dev" />
            <div className="max-w-7xl mx-auto">
              {/* Breadcrumb */}
              <div className="px-4 py-4 border-b border-gray-200">
                <div className="px-4 py-4 text-left">
                  {/* breadcrumb text */}
                  <Breadcrumb className="text-xs text-gray-600">
                      <BreadcrumbList className={"gap-1"}>
                          <BreadcrumbItem>
                              <BreadcrumbLink href="/">Home</BreadcrumbLink>
                          </BreadcrumbItem>
                          <BreadcrumbSeparator />
                          <BreadcrumbItem>
                              <BreadcrumbLink href="/profile">Profile</BreadcrumbLink>
                          </BreadcrumbItem>
                          {/* <BreadcrumbItem>
                          <BreadcrumbSeparator />
                              <BreadcrumbLink href="/doctors/cardiologist">Cardiologist</BreadcrumbLink>
                          </BreadcrumbItem> */}
                      </BreadcrumbList>
                  </Breadcrumb>
                </div>
              </div>


            {/* Main Content */}
            <div className="px-6 py-8">
              <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
              {/* Left Sidebar */}
              <div className="sm:w-46 shrink-0 lg:w-96 lg:shrink-0">
                  {/* Profile Card */}
                  <div className="bg-white rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 border border-gray-200">
                      <div className="flex flex-col items-center mb-6">
                          <div className="relative mb-4">
                          <img
                              src={profileImage}
                              alt="Profile"
                              className="w-32 h-32 rounded-full object-cover border-4 border-gray-100"
                          />
                          <button
                              onClick={triggerImageUpload}
                              className="absolute bottom-0 right-0 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-50 transition-colors"
                          >
                              <Edit2 size={16} className="text-gray-700" />
                          </button>
                          </div>
                          <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          />
                      </div>
                  </div>

                  {/* Menu Items */}
                  <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200 overflow-x-auto scrollbar-hide lg:overflow-x-visible">
                  <div className="flex sm:flex-col">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;

                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`shrink-0  mb-2 lg:shrink flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap lg:whitespace-normal transition-colors min-w-max lg:min-w-0 lg:w-full ${
                          isActive
                            ? 'bg-gray-50 border-b-2 sm:border-b-0 lg:border-l-4 border-sky'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <Icon size={18} className={`sm:w-5 sm:h-5 ${isActive ? 'text-sky' : 'text-gray-600'}`} />
                          <span className={`text-sm font-normal ${isActive ? 'text-sky' : 'text-gray-900'}`}>
                            {item.label}
                          </span>
                        </div>
                        <ChevronRight size={16} className="text-gray-400 shrink-0 ml-2 hidden lg:block" />
                      </button>
                    );
                  })}
                </div>
                  </div>

                  {/* Refer & Earn Card */}
                  <div className="mt-4 sm:mt-8 h-24 hidden md:block rounded-lg  relative overflow-hidden border">
                      <img src="/refer card.png" alt="Refer & Earn" className="absolute w-full h-full inset-0 object-cover" />
                  </div>
              </div>

              {/* Right Content Area */}
              <div className="w-full lg:flex-1 bg-white rounded-lg p-4 sm:p-8 border border-gray-200 overflow-x-auto">
                  {renderContent()}
              </div>
              </div>
            </div>

            {/* Blog Section */}
            <div className="">
              <BlogSection />
            </div>
            </div>
          {/* Footer */}
          <Footer />

          {/* Modals */}
            <AuthorizationModal 
                isOpen={isAuthorizationModalOpen} 
                onClose={() => setAuthorizationModalOpen(false)} 
                onConfirm={handleAuthorizationConfirm} 
            />
            <ProfileLoadingModal isOpen={isLoading} />
            <DeleteConfirmationModal 
                isOpen={isDeleteConfirmationOpen} 
                onClose={() => setDeleteConfirmationOpen(false)} 
                onConfirm={() => {
                setAuthorizationModalOpen(true);
                setDeleteConfirmationOpen(false);
                }} 
            />
            <SuccessModal 
                isOpen={isSuccess} 
                onClose={() => {
                setSuccess(false);
                navigate('/profile');
                }} 
            />
        </div>
  )
}

