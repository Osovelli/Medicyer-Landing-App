import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { AlertCircle, Wallet, Calendar, Video } from 'lucide-react'


export function ConfirmBookingModal({
  next,
  cancel,
  payload,
}) {

  const [isLoading, setIsLoading] = useState(false)
  const { doctorImage, doctorName, specialty, selectedTime, selectedDate } = payload || {}


  return (
    <div className="">
      <div className="w-full max-w-md rounded-l">
        {/* Header with Icon */}
        <div className="mb-6 flex flex-col items-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-purple-100">
            <AlertCircle className="h-10 w-10 text-purple-500" />
          </div>
          <h2 className="text-center text-2xl font-bold text-slate-900">
            Confirm Booking Details
          </h2>
        </div>

        {/* Doctor Info */}
        <div className="mb-6 flex items-center gap-3 rounded-lg border border-slate-200 p-4">
          <img
            src={doctorImage || "/placeholder.svg"}
            alt={doctorName}
            className="h-16 w-16 rounded-lg object-cover"
          />
          <div className="flex-1">
            <p className="font-semibold text-slate-900">{doctorName}</p>
            <p className="text-sm text-slate-600">{specialty}</p>
          </div>
          {/* <div className="rounded-full bg-yellow-100 px-3 py-1">
            <p className="text-sm font-semibold text-yellow-700">
              {booking?.fee.toLocaleString()}
            </p>
          </div> */}
        </div>

        {/* Booking Details */}
        <div className="mb-6 space-y-4">
          {/* Price */}
          <div className="flex items-center gap-3">
            <Wallet className="h-5 w-5 text-slate-400" />
            {/* <div>
              <p className="text-sm text-slate-600">Consultation Fee</p>
              <p className="font-semibold text-slate-900">
                ₹ {booking?.price.toLocaleString('en-IN', {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div> */}
          </div>

          {/* Date & Time */}
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-slate-400" />
            <div>
              <p className="text-sm text-slate-600">Appointment Date & Time</p>
              <p className="font-semibold text-slate-900">
               {selectedDate} - {selectedTime || ''}
              </p>
            </div>
          </div>

          {/* Session Type */}
          {/* <div className="flex items-center gap-3">
            <Video className="h-5 w-5 text-slate-400" />
            <div>
              <p className="text-sm text-slate-600">Session Type</p>
              <p className="font-semibold text-slate-900">{booking.sessionType}</p>
            </div>
          </div> */}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={cancel}
            disabled={isLoading}
            className="flex-1"
          >
            No, Cancel
          </Button>
          <Button
            onClick={()=>next()}
            disabled={isLoading}
            className="flex-1 bg-slate-900 hover:bg-slate-800"
          >
            {isLoading ? 'Processing...' : 'Yes, Proceed'}
          </Button>
        </div>
      </div>
    </div>
  )
}
