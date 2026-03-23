import React from 'react';
import { Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FAQSection } from '@/components/FAQSection';
import { BlogSection } from '@/components/BlogSection';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';



const SAMPLE_EARNINGS = [
  { id: 1, name: 'Sharafadeen Mubaak', date: '12 Jan, 2025', points: 12 },
  { id: 2, name: 'Sharafadeen Mubaak', date: '12 Jan, 2025', points: 12 },
  { id: 3, name: 'Sharafadeen Mubaak', date: '12 Jan, 2025', points: 12 },
  { id: 4, name: 'Sharafadeen Mubaak', date: '12 Jan, 2025', points: 12 },
  { id: 5, name: 'Sharafadeen Mubaak', date: '12 Jan, 2025', points: 12 },
  { id: 6, name: 'Sharafadeen Mubaak', date: '12 Jan, 2025', points: 12 },
  { id: 7, name: 'Sharafadeen Mubaak', date: '12 Jan, 2025', points: 12 },
  { id: 8, name: 'Sharafadeen Mubaak', date: '12 Jan, 2025', points: 12 },
  { id: 9, name: 'Sharafadeen Mubaak', date: '12 Jan, 2025', points: 12 },
  { id: 10, name: 'Sharafadeen Mubaak', date: '12 Jan, 2025', points: 12 },
  { id: 11, name: 'Sharafadeen Mubaak', date: '12 Jan, 2025', points: 12 },
  { id: 12, name: 'Sharafadeen Mubaak', date: '12 Jan, 2025', points: 12 },
];

export default function ReferralPage() {
  const handleReferNow = () => {
    // Copy referral code to clipboard or open referral modal
    const referralCode = 'REF2025ABC123';
    navigator.clipboard.writeText(referralCode);
    alert(`Referral code copied: ${referralCode}`);
  };

  const columns = [
    {
      key: 'name',
      label: 'Name',
      render: (value) => <span className="text-sky font-normal">{value}</span>,
    },
    {
      key: 'date',
      label: 'DATE',
      render: (value) => <span className="text-sky">{value}</span>,
    },
    {
      key: 'points',
      label: 'POINTS',
      render: (value) => <span className="text-green-600 font-normal">+{value} points</span>,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={true} userName="Tobi Dev" />
        {/* Breadcrumb */}
        <div className="bg-white mx-auto px-4 py-4 border-b border-gray-200">
            <div className="mx-auto px-4 py-4 text-left">
                {/* breadcrumb text */}
                <Breadcrumb className="text-xs text-gray-600">
                    <BreadcrumbList className={"gap-1"}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="">Referrals</BreadcrumbLink>
                        </BreadcrumbItem>
                        {/*<BreadcrumbSeparator />
                            <BreadcrumbItem>
                            <BreadcrumbLink href="/doctors/cardiologist">Cardiologist</BreadcrumbLink>
                        </BreadcrumbItem> */}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </div>
        
      <main className="max-w-8xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-2">
            {/* Refer & Earn Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center space-y-4">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-28 h-28 rounded-full">
                  <img src='/bell icon.svg' alt='bell icon' className='w-full h-full' />
                </div>
              </div>

              {/* Heading */}
              <h2 className="text-2xl font-bold text-gray-900">Refer & Earn</h2>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                invite your friends with your referral code, and earn up to 500 points.
              </p>

              {/* Terms Link */}
              <a href="/terms" className="text-blue-600 font-semibold text-sm hover:underline">
                Terms & Conditions
              </a>

              {/* Divider */}
              <div className="h-px bg-gray-200 my-6"></div>

              {/* Balance Section */}
              <div className="flex justify-between items-center">
                <div className="text-center">
                  <p className="text-gray-600 text-sm mb-2">Balance</p>
                  <p className="text-3xl font-bold text-gray-900">2,300</p>
                </div>
                <div className="text-center">
                  <p className="text-base">34</p>
                  <p className="text-base">Referrals</p>
                </div>
              </div>

              {/* CTA Banner */}
              <div className="mt-8 bg-yellow-300 rounded-xl space-y-3">
                {/* <h3 className="font-bold text-gray-900 text-lg">Refer & Earn</h3>
                <p className="text-gray-800 text-sm font-medium">Invite your friends & earn up to 500 points</p>
                <Button
                  onClick={handleReferNow}
                  className="w-full bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-full py-2"
                >
                  REFER NOW
                </Button> */}
                <img src='/banner image.svg' alt='banner' className='w-full h-full' />
              </div>
            </div>
          </div>

          {/* Right Content - Recent Earnings Table */}
          <div className="lg:col-span-2 bg-white shadow-md p-6 rounded-2xl">
            <h3 className="text-lg text-left font-normal text-gray-900 mb-8">Recent Earnings</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full shadow-2xl">
                <thead>
                  <tr className="border-b border-gray-200">
                    {columns.map((col) => (
                      <th
                        key={col.key}
                        className="text-left text-xs py-4 px-4 font-normal text-gray-600 text-sm uppercase tracking-wide"
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SAMPLE_EARNINGS.map((earning) => (
                    <tr key={earning.id} className="text-left border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      {columns.map((col) => (
                        <td key={`${earning.id}-${col.key}`} className="py-4 px-4 text-sm font-normal text-sky">
                          {col.render(earning[col.key])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

        {/* Blog Section */}
        <div className="">
            <BlogSection />
        </div>
        {/* Footer */}
        <Footer />
    </div>
  );
}
