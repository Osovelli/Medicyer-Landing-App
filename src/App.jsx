import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './page/Homepage'
import DoctorsPage from './page/DoctorsPage'
import { DoctorProfilePage } from './page/DoctorProfilePage'
import { ModalFlowProvider } from './lib/Modal/ModalFlowContext'
import { ModalFlowRenderer } from './lib/Modal/ModalFlowRenderer'
import PharmacyPage from './page/PharmacyPage'


function App() {

  return (
    <ModalFlowProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/doctors" element={<DoctorsPage/>} />
          <Route path="/doctors/:id" element={<DoctorProfilePage />} />
          <Route path='/pharmacy' element={<PharmacyPage />} />
        </Routes>
      </BrowserRouter>
      <ModalFlowRenderer />
    </ModalFlowProvider>
    
  )
}

export default App