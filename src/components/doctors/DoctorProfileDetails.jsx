import { useState } from 'react'
import { DoctorAbout } from './DoctorAbout'
import { DoctorBooking } from './DoctorBooking'
import { useModalFlow } from '@/lib/Modal/ModalFlowContext'
import { useNavigate } from 'react-router-dom'
import { ConfirmBookingModal } from '../modal/ConfirmBookingModal'
import { LoadingModal } from '../modal/LoadingModal'
import { BookingConfirmedModal } from '../modal/BookingConfirmedModal'
import { BookingDetails } from '../modal/BookingDetailsModal'


export function DoctorProfileDetails() {
  const navigate = useNavigate()
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedDate, setSelectedDate] = useState(null)

  const { startFlow } = useModalFlow()

  const openConfirmBookingModal = () => {
    console.log('Opening booking confirmation modal')

    startFlow(
    [
      ConfirmBookingModal,
      LoadingModal, 
      BookingConfirmedModal,
      LoadingModal,
      BookingDetails,
    ],
      {
        doctorImage: '/pharmacist.jpg',
        doctorName: 'Dr. Sharafadeen',
        specialty: 'Orthopedic Surgeon',
        booking: {
          fee: '5000',
          date: selectedDate,
          time: selectedTime,
          sessionType: 'Virtual',
        },
        rating: {
          value: 4.5,
          reviews: 120,
        },
        patients: 34,
        experience: 23,
        selectedTime,
        selectedDate,
      }
    )
  }

  // Sample doctor data
  const doctor = {
    imageUrl: '/pharmacist.jpg',
    name: 'Dr. Sharafadeen',
    credentials: 'PhD.',
    specialty: 'Orthopedic Surgeon',
    location: 'Abuja, Nigeria',
    rating: 4.5,
    patients: 34,
    experience: 23,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
  }

  const timeSlots = [
    { time: '09:30 AM', booked: true },
    { time: '11:30 AM', booked: false },
    { time: '01:30 PM', booked: false },
    { time: '03:00 PM', booked: true },
    { time: '07:00 PM', booked: false },
    { time: '09:30 PM', booked: false },
  ]

  return (
    <main className="">
      <div className="max-w-7xl mx-auto  py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Doctor About */}
          <DoctorAbout
            imageUrl={doctor.imageUrl}
            name={doctor.name}
            credentials={doctor.credentials}
            specialty={doctor.specialty}
            location={doctor.location}
            rating={doctor.rating}
            patients={doctor.patients}
            experience={doctor.experience}
            about={doctor.about}
            onBack={() => navigate(-1)}
          />

          {/* Right Column - Booking */}
          <DoctorBooking
            month="December"
            year={2024}
            slots={12}
            timeSlots={timeSlots}
            onSelectTime={setSelectedTime}
            onSelectDate={setSelectedDate}           
            onBookAppointment={openConfirmBookingModal}
          />
        </div>
      </div>
    </main>
  )
}
