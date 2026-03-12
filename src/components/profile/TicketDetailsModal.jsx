import { useState } from 'react';
import { ChevronLeft, Paperclip, Send } from 'lucide-react';

const TicketDetailsModal = ({ ticket, onClose }) => {
  const [messageInput, setMessageInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    {
      id: 1,
      author: { name: 'Support Agent', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop' },
      date: '12 June, 2024',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      align: 'left',
      bgColor: 'bg-green-50'
    },
    {
      id: 2,
      author: { name: 'Sharafadeen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop' },
      date: '12 June, 2024',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
      align: 'right',
      bgColor: 'bg-yellow-50',
      hasAttachment: true,
      attachment: {
        name: 'Document Titles_2024.PDF',
        pages: '2 page',
        size: '345kb'
      }
    },
    {
      id: 3,
      author: { name: 'Support Agent', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop' },
      date: '12 June, 2024',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      align: 'left',
      bgColor: 'bg-green-50'
    },
    {
      id: 4,
      author: { name: 'Sharafadeen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop' },
      date: '12 June, 2024',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
      align: 'right',
      bgColor: 'bg-yellow-50'
    },
    {
      id: 5,
      author: { name: 'Support Agent', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop' },
      date: '12 June, 2024',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      align: 'left',
      bgColor: 'bg-green-50'
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/10 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <div>
              <h2 className="font-semibold text-gray-900">ID: {ticket.id}</h2>
              <p className="text-sm text-gray-500">Last update: 23 Feb, 2025</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.align === 'right' ? 'justify-end' : 'justify-start'} gap-3`}
            >
              {message.align === 'left' && (
                <img
                  src={message.author.avatar}
                  alt={message.author.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
              )}
              <div className={message.align === 'right' ? 'flex flex-col items-end' : 'flex flex-col'}>
                <div className="flex items-center gap-2 mb-1">
                  {message.align === 'right' && (
                    <img
                      src={message.author.avatar}
                      alt={message.author.name}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                  )}
                  <span className="text-xs text-gray-600">{message.date}</span>
                </div>
                <div
                  className={`${message.bgColor} px-4 py-3 rounded-lg max-w-xs ${
                    message.align === 'right' ? 'bg-yellow-50' : 'bg-green-50'
                  }`}
                >
                  <p className="text-sm text-gray-800">{message.content}</p>
                  {message.hasAttachment && (
                    <div className="mt-3 bg-yellow-100 px-3 py-2 rounded flex items-start gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        📄
                      </div>
                      <div className="text-xs">
                        <p className="font-medium text-gray-900">{message.attachment.name}</p>
                        <p className="text-gray-600">{message.attachment.pages} - {message.attachment.size}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop"
                alt="Support Agent"
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <p className="text-sm text-gray-600">Sharafadeen is typing...</p>
            </div>
          )}
        </div>

        {/* Message Input */}
        <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Type your message here..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 text-sm"
            />
            <button className="p-2.5 hover:bg-gray-200 rounded-lg transition-colors text-gray-600">
              <Paperclip size={20} />
            </button>
            <button className="p-2.5 bg-purple-400 hover:bg-purple-500 rounded-full transition-colors text-white">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetailsModal;
