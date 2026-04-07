import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Share2, Calendar, Clock, MapPin, Video } from 'lucide-react'
import { HeartIcon, MedicalReportIcon, ShareIcon, StarIcon } from '../custom/Icons'

export function BookingDetails({ payload, next, cancel }) {

  const bookingData = {
    doctorImage: payload.doctorImage || '/placeholder.svg',
    doctorName: payload.doctorName || 'Dr. Unknown',
    specialty: payload.specialty || 'Specialist',
    location: payload.location || 'Abuja, Nigeria',
    rating: payload.rating.value || 4.5,
    patients: payload.patients || '34K',
    experience: payload.experience || 23,
    date: payload.selectedDate || '12 June, 2024',
    time: payload.selectedTime || '10:00 AM',
    bookingId: payload.bookingId || '23E4DFYHI',
    sessionType: payload.sessionType || 'Online',
  }

  console.log({bookingData})

  const calculateTimeRemaining = () => {
    return 'Due in 30mins'
  }

  return (
    <div className="w-full md:max-w-3xl p-2">
      {/* Header with Navigation */}
      <div className="flex items-center  justify-between border-b border-slate-200 p-4">
        <button
          onClick={cancel}
          className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-slate-100"
        >
          <ArrowLeft className="h-5 w-5 text-slate-600" />
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-slate-100">
          <ShareIcon className="h-5 w-5 text-slate-600" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Left Side - Doctor Image */}
        <div className="">
          <img
            src={bookingData.doctorImage || "/placeholder.svg"}
            alt={bookingData.doctorName}
            className="sm:h-72 sm:w-80 rounded-lg object-cover"
          />
          {/* Doctor Info */}
          <div className="mb-6">
            {/* <p className="text-xs font-medium text-slate-400">Details</p> */}
            <h3 className="text-2xl font-bold text-slate-900">{bookingData.doctorName}</h3>
            <p className="text-sm text-slate-600">
              {bookingData.specialty} · {bookingData.location}
            </p>
          </div>
        </div>

        {/* Right Side - Details */}
        <div className="">
          {/* Stats Badges */}
          <div className="mb-6 flex gap-3">
            <div className="rounded-lg w-34 h-16 flex flex-wrap items-start gap-2 justify-start bg-[#F0D86926] px-3 py-2">
              <StarIcon className="h-5 w-5 text-yellow-600" />
              <div className="text-sm font-semibold text-slate-900">
                <p>{bookingData?.rating}</p>
                <span>Rating</span>
              </div>
            </div>
            <div className="rounded-lg w-34 h-16 flex flex-wrap gap-2 items-start justify-start bg-[#A3DAC226] px-3 py-2">
              <HeartIcon fill='' className={'w-5 h-5'} />
              <div className="text-sm font-semibold text-slate-900">
                <p>{bookingData?.patients}</p>
                <span>Patients</span>
              </div>
            </div>
            <div className="rounded-lg w-34 h-16 flex gap-2 flex-wrap items-start justify-start bg-purple-100 px-3 py-2">
              <MedicalReportIcon fill='' className={'w-5 h-5'} />
              <div className="text-sm font-semibold text-slate-900">
                <p>{bookingData?.experience}</p>
                <span>Experience</span>
              </div>
            </div>
          </div>

          

          {/* Booking Details Grid */}
          <div className="mb-6 space-y-4">
            <div className="flex justify-between">
              <p className="text-sm text-slate-600">Date</p>
              <p className="font-semibold text-slate-900">{bookingData.date}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-slate-600">Time</p>
              <p className="font-semibold text-slate-900">{bookingData.time}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-slate-600">Booking ID</p>
              <p className="font-semibold text-slate-900">{bookingData.bookingId}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-slate-600">Location</p>
              <p className="font-semibold text-slate-900">{bookingData.sessionType}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-slate-600">Status</p>
              <p className="font-semibold text-slate-900">Upcoming</p>
            </div>
          </div>

          {/* Status Card */}
          <div className="rounded-lg bg-blue-100 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Video className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-blue-900">Upcoming</p>
                  <p className="text-sm text-blue-700">{calculateTimeRemaining()}</p>
                </div>
              </div>
              <div className="h-8 w-8 rounded-full border-2 border-blue-400"></div>
            </div>
            <div className="mt-3 h-1 w-full rounded-full bg-blue-200">
              <div className="h-1 w-1/3 rounded-full bg-blue-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
