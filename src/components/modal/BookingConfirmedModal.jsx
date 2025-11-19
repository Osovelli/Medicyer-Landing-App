import React from 'react'
import { Button } from '@/components/ui/button'
import { Check, Send, Twitter, MessageCircle, Share2 } from 'lucide-react'

export function BookingConfirmedModal({ payload, next, cancel }) {
  const bookingDetails = {
    date: payload.date || '12 June, 2024',
    time: payload.time || '10:00 PM',
    bookingId: payload.bookingId || '23E4DFYHI',
    location: payload.location || 'Online',
  }

  const handleShare = (platform) => {
    const message = `I just booked an appointment on ${bookingDetails.date} at ${bookingDetails.time}. Booking ID: ${bookingDetails.bookingId}`
    
    const urls = {
      telegram: `https://t.me/share/url?url=${encodeURIComponent('https://yourdomain.com')}&text=${encodeURIComponent(message)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(message)}`,
    }

    if (urls[platform]) {
      window.open(urls[platform], '_blank')
    } else if (platform === 'other') {
      navigator.share?.({
        title: 'Booking Confirmed',
        text: message,
      }).catch(() => {
        alert('Share functionality not available')
      })
    }
  }

  const handleStartCall = () => {
    /* next({ callStarted: true }) */
    next()
  }

  const handleSeeBookings = () => {
    cancel()
  }

  return (
    <div className="">
      {/* Success Icon */}
      <div className="mb-6 flex justify-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-purple-100">
          <Check className="h-12 w-12 text-purple-500 stroke-3" />
        </div>
      </div>

      {/* Title */}
      <h2 className="mb-3 text-2xl font-bold text-slate-900">Booking Confirmed</h2>
      
      {/* Description */}
      <p className="mb-8 text-slate-600">
        Your booking is confirmed. Please find the details for the appointment.
      </p>

      {/* Booking Details Grid */}
      <div className="mb-8 space-y-4 rounded-lg bg-slate-50 p-6">
        <div className="flex justify-between items-center">
          <span className="text-slate-600 font-medium">Date</span>
          <span className="text-slate-900 font-semibold">{bookingDetails.date}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-600 font-medium">Time</span>
          <span className="text-slate-900 font-semibold">{bookingDetails.time}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-600 font-medium">Booking ID</span>
          <span className="text-slate-900 font-semibold font-mono">{bookingDetails.bookingId}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-600 font-medium">Location</span>
          <span className="text-slate-900 font-semibold">{bookingDetails.location}</span>
        </div>
      </div>

      {/* Share Buttons */}
      <div className="mb-8 flex justify-center gap-6">
        <button
          onClick={() => handleShare('telegram')}
          className="flex flex-col items-center gap-2 hover:opacity-70 transition"
          aria-label="Share on Telegram"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
            <Send className="h-6 w-6 text-slate-700" />
          </div>
          <span className="text-xs text-slate-600">Telegram</span>
        </button>

        <button
          onClick={() => handleShare('twitter')}
          className="flex flex-col items-center gap-2 hover:opacity-70 transition"
          aria-label="Share on Twitter"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
            <Twitter className="h-6 w-6 text-slate-700" />
          </div>
          <span className="text-xs text-slate-600">Twitter</span>
        </button>

        <button
          onClick={() => handleShare('whatsapp')}
          className="flex flex-col items-center gap-2 hover:opacity-70 transition"
          aria-label="Share on Whatsapp"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
            <MessageCircle className="h-6 w-6 text-slate-700" />
          </div>
          <span className="text-xs text-slate-600">Whatsapp</span>
        </button>

        <button
          onClick={() => handleShare('other')}
          className="flex flex-col items-center gap-2 hover:opacity-70 transition"
          aria-label="Share"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
            <Share2 className="h-6 w-6 text-slate-700" />
          </div>
          <span className="text-xs text-slate-600">Other</span>
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button
          variant="outline"
          onClick={handleSeeBookings}
          className="flex-1 border-2"
        >
          See Bookings
        </Button>
        <Button
          onClick={handleStartCall}
          className="flex-1 bg-slate-900 hover:bg-slate-800 text-white"
        >
          Start Call
        </Button>
      </div>
    </div>
  )
}
