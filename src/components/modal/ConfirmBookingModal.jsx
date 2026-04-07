import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { AlertCircle, Wallet, Calendar, Video, StarOffIcon, StarIcon, LucideCalendarDays } from 'lucide-react'
import {  MapIcon, WarningIcon } from '../custom/Icons'
import { CustomButton } from '../custom/CustomButton'


export function ConfirmBookingModal({
  next,
  cancel,
  payload,
}) {

  const [isLoading, setIsLoading] = useState(false)
  const { doctorImage, doctorName, specialty, selectedTime, selectedDate, booking, rating, sessionType } = payload || {}


  return (
    <div className="w-full  rounded-lg p-2">
      {/* Header with Icon */}
      <div className="mb-6 flex flex-col items-center">
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#BD8CBF26]">
          <WarningIcon className="h-10 w-10" />
        </div>
        <h2 className="text-center text-xl font-bold text-sky">
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
        <div className="rounded-full bg-[#F0D869] px-3 py-1">
          <p className="text-xs text-white font-semibold inline-flex items-center gap-1">
            <StarIcon fill='white' className={'w-4 h-4 text-white'} />
            {rating.value} / {rating?.reviews}
          </p>
        </div>
      </div>

      {/* Booking Details */}
      <div className="mb-6 space-y-4">
        {/* Price */}
        <div className="flex items-center gap-3">
          <MapIcon className="h-5 w-5" />
          <div>
            <p className="font-semibold text-sm text-[#353849]">
              N {booking?.fee.toLocaleString('en-NG', {
                minimumFractionDigits: 3,
              })}
            </p>
          </div>
        </div>

        {/* Date & Time */}
        <div className="flex items-center gap-3">
          <LucideCalendarDays className="h-5 w-5 text-slate-400" />
          <div>
            <p className="font-normal text-sm text-[#353849]">
              {selectedDate} - {selectedTime || ''}
            </p>
          </div>
        </div>

        {/* Session Type */}
        <div className="flex items-center gap-3">
          <Video className="h-5 w-5 text-slate-400" />
          <div>
            <p className="font-normal text-sm text-[#353849]">{booking.sessionType}</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <CustomButton
          variant="outline"
          onClick={cancel}
          disabled={isLoading}
          size="lg"
          className=""
        >
          No, Cancel
        </CustomButton>
        <CustomButton
          onClick={()=>next()}
          disabled={isLoading}
          className="flex-1"
          size="lg"
        >
          {isLoading ? 'Processing...' : 'Yes, Proceed'}
        </CustomButton>
      </div>
    </div>
  )
}
