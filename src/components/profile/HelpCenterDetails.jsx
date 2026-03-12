import { useState } from 'react';
import { ChevronDown, Plus, ChevronRight, Phone, Globe, MessageCircle, Facebook, Twitter, Instagram } from 'lucide-react';
import SupportTicketsModal from './SupportTicketsModal';

const HelpCenterDetails = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [activeFaqTab, setActiveFaqTab] = useState('all');
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [showTicketsModal, setShowTicketsModal] = useState(false);

  const faqTabs = [
    { id: 'all', label: 'All' },
    { id: 'cart', label: 'Cart & Checkout' },
    { id: 'booking', label: 'Booking / Appointments' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'about', label: 'About Medicyer' },
    { id: 'o', label: 'O+' },
    { id: 'lab', label: 'Laboratory Services' },
    { id: 'pharmacy', label: 'Pharmacy' },
  ];

  const faqContent = {
    about: {
      title: 'About Medicyer',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel diam in rutrum pulvinar at nisl at. Ut arcu ut venenatis quis sit amet ut. Vel tortor purus pretium orci eifend. Eget viverra a in erat consequat viverra. Maecenas erat habitasse mattis tellus leo. Ut in protiium cras vitae. Pellentesque metus lorem nisl eget sollicitudin tristique luctus sem. Mauris aliquam in sapien aliquam. Vel iaculis donec diam mi neque etiam purus. Tincidunt condimentum sit quis sit vestibulum ultricies. Aliguet vulputate sit ullamcorper accumsan dignissim purus pharetra. Odio ac ut tincidunt quam pulvinar diam vel fermentum. Eget aliguam ullamcorper proin fermentum.'
    },
    booking: {
      title: 'Booking',
      content: 'erdiet fringilla convallis proin aliguet vitae nunc commodo senectus et. A augue ipsum leo vel nulla pharetra aliguam urna eget. Ut volutpat vel amet ornare. Velit quis ut in integer diam erat magna pellentesque gravida. Facilisis eifend tortor consequat adipiscing vel ut justo mi aliguam. In augue quis massa aliguam tortor diam cum sit. A auctor facilisis posuere at arcu ultricies. Tincidunt in tempor nibh odio. Viverra fermentum sit adipiscing lectus libero et praesent. Risus a feugiat lectus lacus in fames sed. Tempus fusce malesuada blandit quis amet. Ultrices aliguet tempor faucibus ut elit pretium odio sem. Pellentesque urna phasellus a malesuada ridiculus cras blandit. Dolor vulputate fames a sit enim ut velit. Ut dignissim leo neque suscipit egestas cursus dignissim est at. Lacinia sagittis diam nunc feugiat feugiat id montes. Ut feugiat quis lorem cursus leo malesuada vitae ultricies. Ut est quis suscipit in metus. Eget nulla fringilla in nisl dolor odio enim nunc augue. Venenatis quis sed nulla nec integer justo. Quis purus morbi diam est sed. Molestie vitae auctor eget vivamus sed sagittis non phasellus. Risus eu lectus eget libero quam in fermentum. Et eu a consectetur est varius iaculus nisl sit. Quasl nisl vitae nec risus nisl pellentesque.'
    },
    doctors: {
      title: 'Doctors',
      content: 'Detailed information about doctors section...'
    },
    cart: {
      title: 'Cart',
      content: 'Cart and checkout information...'
    },
    appointments: {
      title: 'Appointments',
      content: 'Appointment booking information...'
    },
    checkout: {
      title: 'Checkout',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel diam in rutrum pulvinar at nisl at. Ut arcu ut venenatis quis sit amet ut. Vel tortor purus pretium orci eifend. Eget viverra a in erat consequat viverra. Maecenas erat habitasse mattis tellus leo. Ut in protiium cras vitae. Pellentesque metus lorem nisl eget sollicitudin tristique luctus sem.'
    }
  };

  const supportChannels = [
    { id: 'hotline', label: '24/7 Hot Line', icon: Phone, detail: '+234 90 9904 8049' },
    { id: 'website', label: 'Website', icon: Globe, detail: 'www.medicyer.com' },
    { id: 'whatsapp', label: 'Whatsapp', icon: MessageCircle, detail: 'Chat with us on WhatsApp' },
    { id: 'facebook', label: 'Facebook', icon: Facebook, detail: 'Visit our Facebook page' },
    { id: 'twitter', label: 'Twitter', icon: Twitter, detail: 'Follow us on Twitter' },
    { id: 'instagram', label: 'Instagram', icon: Instagram, detail: 'Follow us on Instagram' },
  ];

  const getDisplayContent = () => {
    if (activeTab === 'faq') {
      if (activeFaqTab === 'all') {
        return Object.values(faqContent);
      }
      const tabMap = {
        cart: 'cart',
        booking: 'booking',
        doctors: 'doctors',
        about: 'about',
        o: 'appointments',
        lab: 'checkout',
        pharmacy: 'checkout'
      };
      return faqContent[tabMap[activeFaqTab]] ? [faqContent[tabMap[activeFaqTab]]] : [];
    }
    return [];
  };

  return (
    <div className="space-y-6">
      {/* Header with Support Tickets Button */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Help Centre</h2>
        <button
          onClick={() => setShowTicketsModal(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <div className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center">
            <span className="text-xs">☰</span>
          </div>
          <span className="text-gray-700 font-medium">Support Tickets</span>
          <ChevronRight size={18} className="text-gray-400" />
        </button>
      </div>

      {/* Main Tabs */}
      <div className=" border-gray-200">
        <div className="flex gap-12">
          <button
            onClick={() => setActiveTab('faq')}
            className={`py-3 flex-1 font-medium transition-colors ${
              activeTab === 'faq'
                ? 'text-gray-900 border-b-2 border-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            FAQ
          </button>
          <button
            onClick={() => setActiveTab('support')}
            className={`py-3 flex-1 font-medium transition-colors ${
              activeTab === 'support'
                ? 'text-gray-900 border-b-2 border-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Support
          </button>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'faq' ? (
        <div className="space-y-6">
          {/* FAQ Nested Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {faqTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFaqTab(tab.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors ${
                  activeFaqTab === tab.id
                    ? 'bg-blue-950 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* FAQ Content */}
          <div className="space-y-6">
            {getDisplayContent().map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {/* Support Channels as Accordions */}
          {supportChannels.map((channel) => {
            const Icon = channel.icon;
            return (
              <div
                key={channel.id}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedAccordion(expandedAccordion === channel.id ? null : channel.id)}
                  className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={20} className="text-gray-600" />
                    <span className="font-medium text-gray-900">{channel.label}</span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-gray-400 transition-transform ${
                      expandedAccordion === channel.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedAccordion === channel.id && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-700">
                    {channel.detail}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Support Tickets Modal */}
      {showTicketsModal && (
        <SupportTicketsModal onClose={() => setShowTicketsModal(false)} />
      )}
    </div>
  );
};

export default HelpCenterDetails;
