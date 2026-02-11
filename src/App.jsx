import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './page/Homepage'
import DoctorsPage from './page/DoctorsPage'
import { DoctorProfilePage } from './page/DoctorProfilePage'
import { ModalFlowProvider } from './lib/Modal/ModalFlowContext'
import { ModalFlowRenderer } from './lib/Modal/ModalFlowRenderer'
import PharmacyPage from './page/PharmacyPage'
import PharmacyProfilePage from './page/PharmacyProfile'
import DrugDetailsPage from './page/DrugDetailsPage'


function App() {

  return (
    <ModalFlowProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/doctors" element={<DoctorsPage/>} />
          <Route path="/doctors/:id" element={<DoctorProfilePage />} />
          <Route path='/pharmacy' element={<PharmacyPage />} />
          <Route path="/pharmacy/:id" element={<PharmacyProfilePage />} />
          <Route path="/pharmacy/drugs/:id" element={<DrugDetailsPage />} />
        </Routes>
      </BrowserRouter>
      <ModalFlowRenderer />
    </ModalFlowProvider>
    
  )
}

export default App