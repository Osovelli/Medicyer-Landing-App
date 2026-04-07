import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './page/Homepage'
import DoctorsPage from './page/Doctor/DoctorsPage'
import { DoctorProfilePage } from './page/Doctor/DoctorProfilePage'
import { ModalFlowProvider } from './lib/Modal/ModalFlowContext'
import { ModalFlowRenderer } from './lib/Modal/ModalFlowRenderer'
import PharmacyPage from './page/Pharmacy/PharmacyPage'
import PharmacyProfilePage from './page/Pharmacy/PharmacyProfile'
import DrugDetailsPage from './page/Pharmacy/DrugDetailsPage'
import LabsPage from './page/Lab/LabPage'
import LabDetailPage from './page/Lab/LabDetailsPage'
import LabReviewsPage from './page/Lab/LabReviewsPage'
import HospitalPage from './page/Hospital/HospitalPage'
import HospitalDetailPage from './page/Hospital/HospitalDetailPage'
import HospitalReviewsPage from './page/Hospital/HospitalReviewsPage'
import DonorPage from './page/Donor/DonorPage'
import BloodBankPage from './page/BloodBank/BloodBankPage'
import BloodBankDetailPage from './page/BloodBank/BloodBankDetailPage'
import BloodBankReviewPage from './page/BloodBank/BloodBankReviewPage'
import CartPage from './page/Cart/CartPage'
import ProfilePage from './page/Profile/ProfilePage'
import WalletPage from './page/Wallet/WalletPage'
import AppointmentPage from './page/Appointment/AppointmentPage'
import LoginPage from './page/Auth/LoginPage'
import SignupPage from './page/Auth/SignupPage'
import CreatePasswordPage from './page/Auth/CreatePasswordPage'
import BlogPage from './page/Blog/BlogPage'
import BlogDetailPage from './page/Blog/BlogDetailPage'
import ReferralPage from './page/Referral/ReferralPage'


function App() {

  return (
    <ModalFlowProvider>
      <BrowserRouter>
        <Routes>
          {/* authentication pages */}
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/create-password" element={<CreatePasswordPage/>} />

          {/* other pages */}
          <Route path="/" element={<Homepage/>} />
          <Route path="/doctors" element={<DoctorsPage/>} />
          <Route path="/doctors/:id" element={<DoctorProfilePage />} />
          <Route path='/pharmacy' element={<PharmacyPage />} />
          <Route path="/pharmacy/:id" element={<PharmacyProfilePage />} />
          <Route path="/pharmacy/drugs/:id" element={<DrugDetailsPage />} />
          <Route path="/lab" element={<LabsPage />} />
          <Route path="/lab/:id" element={<LabDetailPage />} />
          <Route path='/lab/reviews/all' element={<LabReviewsPage />} />
          <Route path='/hospitals' element={<HospitalPage />} />
          <Route path='/hospital/:id' element={<HospitalDetailPage/>} />
          <Route path='/hospital/reviews/all' element={<HospitalReviewsPage />} />
          <Route path='/donors' element={<DonorPage />} />
          <Route path='/blood-bank' element={<BloodBankPage />} />
          <Route path='/blood-bank/:id' element={<BloodBankDetailPage />} />
          <Route path='/blood-bank/reviews/all' element={<BloodBankReviewPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/wallet' element={<WalletPage />} />
          <Route path='/appointment' element={<AppointmentPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path={'/blog/:id'} element={<BlogDetailPage />} />
          <Route path='/referral' element={<ReferralPage />} />
        </Routes>
      </BrowserRouter>
      <ModalFlowRenderer />
    </ModalFlowProvider>
    
  )
}

export default App