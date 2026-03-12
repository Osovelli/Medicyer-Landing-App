import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import TicketDetailsModal from './TicketDetailsModal';

const SupportTicketsModal = ({ onClose }) => {
  const [activeStatus, setActiveStatus] = useState('open');
  const [selectedTicket, setSelectedTicket] = useState(null);

  const statusTabs = [
    { id: 'all', label: 'All', count: 234 },
    { id: 'open', label: 'Open', count: 24 },
    { id: 'pending', label: 'Pending', count: 45 },
    { id: 'resolved', label: 'Resolved', count: 56 },
  ];

  const tickets = [
    {
      id: '3456WXYZ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      date: '23 Feb, 2025',
      status: 'Resolved'
    },
    {
      id: '3456WXYZ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      date: '23 Feb, 2025',
      status: 'Resolved'
    },
    {
      id: '3456WXYZ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      date: '23 Feb, 2025',
      status: 'Resolved'
    },
    {
      id: '3456WXYZ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      date: '23 Feb, 2025',
      status: 'Resolved'
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/90 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <h2 className="text-2xl font-bold text-gray-900">Support Tickets</h2>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-900 hover:bg-blue-950 text-white rounded-lg font-medium transition-colors">
            <Plus size={18} />
            New Ticket
          </button>
        </div>

        

        {/* Main Tabs */}
        <div className="px-6 py-4 border-gray-200">
          <div className="flex gap-12">
            <button className="py-3 flex-1 font-medium text-gray-900 border-b ">
              FAQ
            </button>
            <button className="py-3 flex-1 font-medium text-gray-500 border-b border-gray-900 hover:text-gray-700">
              Support
            </button>
          </div>
        </div>

        {/* Status Tabs */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {statusTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveStatus(tab.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors ${
                  activeStatus === tab.id
                    ? 'bg-sky text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label} {tab.count}
              </button>
            ))}
          </div>
        </div>

        {/* Tickets List */}
        <div className="divide-y divide-gray-200">
          {tickets.map((ticket, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTicket(ticket)}
              className="w-full px-6 py-4 hover:bg-gray-50 transition-colors text-left space-y-2 flex items-start justify-between"
            >
              <div className="flex-1">
                <div className="font-semibold text-gray-900 mb-2">{ticket.id}</div>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{ticket.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{ticket.date}</span>
                  <span className="text-xs font-medium text-gray-700">{ticket.status}</span>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400 ml-4 shrink-0 mt-2" />
            </button>
          ))}
        </div>
      </div>

      {/* Ticket Details Modal */}
      {selectedTicket && (
        <TicketDetailsModal
          ticket={selectedTicket}
          onClose={() => setSelectedTicket(null)}
        />
      )}
    </div>
  );
};

export default SupportTicketsModal;
