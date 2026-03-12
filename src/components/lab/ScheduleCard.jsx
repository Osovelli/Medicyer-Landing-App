import { useState } from 'react';
import { ChevronDown, Clock } from 'lucide-react';

export function ScheduleCard() {
  const [selectedDate, setSelectedDate] = useState(12);
  const [selectedMonth, setSelectedMonth] = useState('December, 2024');

  const days = [
    { day: 'mon', date: 12 },
    { day: 'tue', date: 13 },
    { day: 'wed', date: 14 },
    { day: 'thu', date: 15 },
    { day: 'fri', date: 16 },
    { day: 'sat', date: 17 }
  ];

  const timeSlots = {
    12: [
      { time: '09:30 AM', status: 'available' },
      { time: '01:30 PM', status: 'available' },
      { time: '07:00 PM', status: 'available' }
    ],
    13: [
      { time: '09:30 AM', status: 'booked' },
      { time: '03:00 PM', status: 'booked' },
      { time: '09:30 PM', status: 'available' }
    ],
    14: [
      { time: '08:00 AM', status: 'available' },
      { time: '02:00 PM', status: 'available' },
      { time: '06:30 PM', status: 'booked' }
    ],
    15: [
      { time: '10:00 AM', status: 'available' },
      { time: '11:30 AM', status: 'available' },
      { time: '03:30 PM', status: 'available' }
    ],
    16: [
      { time: '09:00 AM', status: 'available' },
      { time: '01:00 PM', status: 'booked' },
      { time: '05:00 PM', status: 'available' }
    ],
    17: [
      { time: '10:30 AM', status: 'booked' },
      { time: '02:30 PM', status: 'available' },
      { time: '06:00 PM', status: 'available' }
    ]
  };

  const currentSlots = timeSlots[selectedDate] || [];

  return (
    <div className="bg-gray-100 rounded-lg p-6 max-w-sm mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">Schedule:</span>
          <button className="flex items-center gap-2 bg-white px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50">
            {selectedMonth}
            <ChevronDown size={16} />
          </button>
        </div>
        <div className="flex items-center gap-2 bg-pink-100 px-3 py-2 rounded-full">
          <Clock size={16} className="text-pink-600" />
          <span className="text-sm font-semibold text-pink-600">12 Slots</span>
        </div>
      </div>

      {/* Week Calendar */}
      <div className="bg-white rounded-lg p-4 mb-6">
        <div className="grid grid-cols-6 gap-2">
          {days.map((item) => (
            <button
              key={item.date}
              onClick={() => setSelectedDate(item.date)}
              className={`flex flex-col items-center justify-center py-3 px-2 rounded-lg transition-colors ${
                selectedDate === item.date
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-xs font-semibold">{item.day}</span>
              <span className="text-sm font-bold">{item.date}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Time Slots */}
      <div className="bg-white rounded-lg p-4">
        <div className="grid grid-cols-2 gap-3">
          {currentSlots.map((slot, index) => (
            <button
              key={index}
              disabled={slot.status === 'booked'}
              className={`py-3 px-4 rounded-lg font-medium text-sm transition-colors ${
                slot.status === 'booked'
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-400'
              }`}
            >
              {slot.status === 'booked' ? 'Booked' : slot.time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
