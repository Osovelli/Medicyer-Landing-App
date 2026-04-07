import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, ChevronDown, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { CalendarIcon } from '../custom/Icons'
import { CustomButton } from '../custom/CustomButton'

export function DoctorBooking({
  month = 'December',
  year = 2024,
  slots = 12,
  timeSlots = [
    { time: '09:30 AM', booked: true },
    { time: '11:30 AM', booked: false },
    { time: '01:30 PM', booked: false },
    { time: '03:00 PM', booked: true },
    { time: '07:00 PM', booked: false },
    { time: '09:30 PM', booked: false },
  ],
  onSelectDate,
  onSelectTime,
  onBookAppointment,
}) {
  const [selectedDate, setSelectedDate] = useState('13')
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedMonth, setSelectedMonth] = useState(month)
  const [selectedYear, setSelectedYear] = useState(year)
  const [showDatePicker, setShowDatePicker] = useState(false)

  const getDaysInMonth = (monthName, year) => {
    const monthIndex = new Date(`${monthName} 1, ${year}`).getMonth()
    return new Date(year, monthIndex + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (monthName, year) => {
    const monthIndex = new Date(`${monthName} 1, ${year}`).getMonth()
    return new Date(year, monthIndex, 1).getDay()
  }

  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear)
  const firstDay = getFirstDayOfMonth(selectedMonth, selectedYear)
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const getNextFiveWeekdays = (start = new Date(), count = 5) => {
    const days = []
    const weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const d = new Date(start)
    while (days.length < count) {
      const dayIndex = d.getDay()
      if (dayIndex !== 0 && dayIndex !== 6) {
        days.push({
          day: weekdayNames[dayIndex],
          date: d.getDate().toString(),
        })
      }
      d.setDate(d.getDate() + 1)
    }
    return days
  }

  const dates = getNextFiveWeekdays()

  const handleDateSelect = (date) => {
    // `date` is expected to be a day number string (e.g. "23")
    const dayNum = parseInt(date, 10)
    // fallback to today if parse fails
    const baseDate =
      Number.isNaN(dayNum) ? new Date() : new Date(selectedYear, new Date(`${selectedMonth} 1, ${selectedYear}`).getMonth(), dayNum)

    const weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const formatted = `${weekdayNames[baseDate.getDay()]} ${baseDate.getDate()}, ${monthNamesShort[baseDate.getMonth()]}, ${baseDate.getFullYear()}`

    console.log('Selected date:', formatted)
    setSelectedDate(date) // keep the original day string for UI comparisons
    onSelectDate?.(formatted)
    setShowDatePicker(false)
  }

  const handleTimeSelect = (time) => {
    setSelectedTime(time)
    onSelectTime?.(time)
  }

  const handleMonthChange = (direction) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const currentIndex = months.indexOf(selectedMonth)

    if (direction === 'next') {
      if (currentIndex === 11) {
        setSelectedMonth('January')
        setSelectedYear(selectedYear + 1)
      } else {
        setSelectedMonth(months[currentIndex + 1])
      }
    } else {
      if (currentIndex === 0) {
        setSelectedMonth('December')
        setSelectedYear(selectedYear - 1)
      } else {
        setSelectedMonth(months[currentIndex - 1])
      }
    }
  }

  const isAppointmentValid = selectedDate && selectedTime

  return (
    <div className="space-y-6 bg-white p-4 rounded-2xl">
      <div className="space-y-6 bg-[#F2F2F2] p-4 rounded-lg">
      {/* Schedule Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sky text-2xl font-medium">Schedule:</span>
          <button
            onClick={() => setShowDatePicker(!showDatePicker)}
            className="flex items-center gap-2 text-[#1a1a4d] font-medium hover:bg-white px-3 py-1 rounded-lg transition"
          >
            {selectedMonth}, {selectedYear}
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-2 bg-[#BD8CBF26] px-4 py-2 rounded-full">
          <CalendarIcon className="w-5 h-5 text-[#BD8CBF]" />
          <span className="font-normal text-xs text-sky">{slots} Slots</span>
        </div>
      </div>

      {/* Date Picker Modal */}
      {showDatePicker && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-96 max-w-full">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => handleMonthChange('prev')}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <ChevronLeft className="w-5 h-5 text-[#1a1a4d]" />
              </button>
              <h3 className="text-lg font-bold text-[#1a1a4d]">
                {selectedMonth} {selectedYear}
              </h3>
              <button
                onClick={() => handleMonthChange('next')}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <ChevronRight className="w-5 h-5 text-[#1a1a4d]" />
              </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-semibold text-gray-500"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-2 mb-6">
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {calendarDays.map((day) => (
                <button
                  key={day}
                  onClick={() => handleDateSelect(day.toString())}
                  className={`aspect-square rounded-lg font-semibold transition-all ${
                    selectedDate === day.toString()
                      ? 'bg-[#1a1a4d] text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Close button */}
            <button
              onClick={() => setShowDatePicker(false)}
              className="w-full py-2 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Date Selection Quick Access */}
      <div className="space-y-3">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {dates.map((item) => (
            <button
              key={item.date}
              onClick={() => handleDateSelect(item.date)}
              className={`flex flex-col items-center justify-center px-8 py-4 rounded-2xl min-w-max transition-all ${
                selectedDate === item.date
                  ? 'bg-[#252B61] text-white'
                  : 'bg-white text-gray-900 border border-gray-200'
              }`}
            >
              <span className="text-xs font-medium mb-1">{item.day}</span>
              <span className="text-lg font-bold">{item.date}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Time Slots */}
      <div className="space-y-3">
        <div className="grid lg:grid-cols-3 gap-3">
          {timeSlots.map((slot) => (
            <button
              key={slot.time}
              onClick={() => !slot.booked && handleTimeSelect(slot.time)}
              disabled={slot.booked}
              className={`py-3 px-4 h-14 rounded-full font-medium text-sm transition-all ${
                slot.booked
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : selectedTime === slot.time
                    ? 'bg-[#1a1a4d] text-white'
                    : 'bg-white text-sky border-gray-200 hover:border-[#1a1a4d]'
              }`}
            >
              {slot.booked ? 'Booked' : slot.time}
            </button>
          ))}
        </div>
      </div>
      </div>
      <CustomButton
        onClick={onBookAppointment}
        disabled={!isAppointmentValid}
        className="w-full h-16 bg-[#252B61] hover:bg-[#252B61]/90 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl text-base transition-all"
      >
        {isAppointmentValid ? 'Book Appointment' : 'Select Date & Time'}
      </CustomButton>
    </div>
  )
}
