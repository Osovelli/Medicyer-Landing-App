import { BlogSection } from '@/components/BlogSection';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ArrowDownRight, ArrowUpRight, ArrowRightLeft, Wallet, Gift } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '@/components/custom/Table';
import TopUpModal from '@/components/wallet/TopUpModal';
import PinModal from '@/components/wallet/PinModal';
import LoadingModal from '@/components/cart/LoadingModal';
import SuccessModal from '@/components/wallet/SuccessModal';
import ConvertPointsModal from '@/components/wallet/ConvertPointsModal';
import ConversionSuccessModal from '@/components/wallet/ConversionSuccessModal';

// Mock data for transactions
const mockTransactions = [
  { id: 1, type: 'credit', amount: 34000, description: 'Credit Transaction', status: 'Successful', date: '12:34 - 02 Jan, 2025' },
  { id: 2, type: 'debit', amount: 8000, description: 'Debit Transaction', status: 'Pending', date: '12:36 - 02 Jan, 2025' },
  { id: 3, type: 'conversion', amount: 3000, description: 'Point Conversion', status: 'Successful', date: '12:40 - 02 Jan, 2025' },
];

const mockPaymentData = {
  amount: 23400,
  channel: 'Card',
  orderId: 'ORD-001',
  status: 'Successful',
  refNo: 'REF-001'
};

const mockConversionData = {
  pointsConverted: 1500,
  channel: 'Points Wallet',
  orderId: 'ORD-002',
  status: 'Successful',
  refNo: 'REF-002', 
  amountReceived: 7500,
  conversionRate: '1 Point = ₦5',
  date: '12:45 - 02 Jan, 2025'
};

const getTransactionIcon = (type) => {
  switch (type) {
    case 'credit':
      return { icon: <ArrowDownRight size={20} />, color: 'text-green-600' };
    case 'debit':
      return { icon: <ArrowUpRight size={20} />, color: 'text-red-600' };
    case 'conversion':
      return { icon: <ArrowRightLeft size={20} />, color: 'text-purple-600' };
    default:
      return { icon: null, color: 'text-gray-600' };
  }
};

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);
};

export default function WalletPage({ balance = 345000, points = 2300, transactions = mockTransactions }) {
  const [transactionData] = useState(transactions);
  const navigate = useNavigate();
  const [isTopUpOpen, setTopUpOpen] = useState(false);
  const [isConvertPointsOpen, setConvertPointsOpen] = useState(false);
  const [isPinOpen, setPinOpen] = useState(false);
  const [isLoadingOpen, setLoadingOpen] = useState(false);
  const [isSuccessOpen, setSuccessOpen] = useState(false);
  const [isConversionSuccessOpen, setConversionSuccessOpen] = useState(false);
    


  const handleTopUp = () => {
    setTopUpOpen(true);
  };

   const handleConvertPoints = () => {
    setConvertPointsOpen(true);
  };

  const handlePinSubmit = (pin) => {
    //console.log('Submitted PIN: ', pin);
    setPinOpen(false); // Close the PIN modal
    setLoadingOpen(true); // Open loading modal

    // Simulate API call
    setTimeout(() => {
      setLoadingOpen(false); // Close loading modal
      setSuccessOpen(true); // Open success modal
    }, 2000); // Simulate a 2-second payment processing time
  };

  const handleProceedToPin = () => {
    console.log('Proceeding to PIN modal');
    setTopUpOpen(false); // Close the Top Up modal
    setPinOpen(true); // Open the PIN modal
  };

  const handleProceedWithConversion = (points) => {
    console.log('Converting points: ', points); // Log for verification
    setLoadingOpen(true); // Open loading modal

    // Simulate API call
    setTimeout(() => {
      setLoadingOpen(false); // Close loading modal
      setConversionSuccessOpen(true); // Open conversion success modal
    }, 2000); // Simulate 2 seconds of processing time
  };

  const columns = [
    { key: 'transaction', label: 'Transaction', render: (_, row) => {
        const { icon, color } = getTransactionIcon(row.type);
        return (
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-full bg-gray-100 ${color} bg-opacity-30`}>
              {icon}
            </div>
            <div>
              <p className="font-medium text-gray-900">{row.description}</p>
              <p className="text-xs text-gray-500">{row.type.charAt(0).toUpperCase() + row.type.slice(1)}</p>
            </div>
          </div>
        );
      },
    },
    { key: 'amount', label: 'Amount', sortable: true, render: (value, row) => {
        const isCredit = row.type === 'credit';
        return (
          <span className={`font-semibold ${isCredit ? 'text-green-600' : 'text-red-600'}`}>
            {formatCurrency(value)}
          </span>
        );
      },
    },
    { key: 'status', label: 'Status', sortable: true },
    { key: 'date', label: 'Date', sortable: true },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header isLoggedIn={true} userName="Tobi Dev" />
      {/* Breadcrumb */}
      <div className="bg-white mx-auto px-4 py-4 border-b border-gray-200">
        <Breadcrumb className="text-xs text-gray-600">
          <BreadcrumbList className={"gap-1"}>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <span className="sr-only">Toggle menu</span>
                  <BreadcrumbEllipsis className="size-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Pharmacy</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/blood-bank')}>Blood Bank</DropdownMenuItem>
                  <DropdownMenuItem>Donor</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/wallets">Wallets</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto my-6 space-y-6 px-4">
        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Main Balance Card */}
          <div className="bg-indigo-600 rounded-2xl p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle cx="80" cy="20" r="40" />
                <circle cx="60" cy="60" r="30" />
              </svg>
            </div>
            <div className="relative text-left space-y-10 z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-indigo-200 text-sm font-medium">Main Balance</span>
                <Wallet className="w-5 h-5 text-indigo-200" />
              </div>
              <p className="text-3xl font-bold mb-1">{formatCurrency(balance)}</p>
              <p className="text-indigo-200 text-xs">Available Balance</p>
              <Button
              onClick={handleTopUp}
              className="mt-2 bg-indigo-700 text-white hover:bg-indigo-600"
              variant={'outline'}
              >
                Top Up
            </Button>
            </div>
          </div>

          {/* Points Card */}
          <div className="bg-emerald-100 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle cx="80" cy="20" r="40" />
                <circle cx="60" cy="60" r="30" />
              </svg>
            </div>
            <div className="relative text-left space-y-10 z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-emerald-700 text-sm font-medium">Reward Points</span>
                <Gift className="w-5 h-5 text-emerald-600" />
              </div>
              <p className="text-3xl font-bold text-emerald-800 mb-1">{points.toLocaleString()}</p>
              <p className="text-emerald-600 text-xs">Points Available</p>
              <Button 
              className="mt-2 bg-emerald-600 text-white hover:bg-emerald-500"
              onClick={handleConvertPoints}
              >
                Convert
              </Button>
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          {/* <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h2> */}
          <Table
            columns={columns}
            data={transactionData}
            showSearch={true}
            searchPlaceholder="Search transactions..."
            emptyMessage="No transactions found"
          />
        </div>
      </div>

      {/* Blog Section */}
      <div>
        <BlogSection />
      </div>
      {/* Footer */}
      <Footer />
       <TopUpModal isOpen={isTopUpOpen} onOpenChange={setTopUpOpen} onProceedToPin={handleProceedToPin} />
        <PinModal isOpen={isPinOpen} onOpenChange={setPinOpen} onSubmit={handlePinSubmit} />
        <LoadingModal isOpen={isLoadingOpen} />
        <SuccessModal isOpen={isSuccessOpen} onOpenChange={() => setSuccessOpen(false)} paymentData={mockPaymentData} />
        <ConvertPointsModal 
          isOpen={isConvertPointsOpen} 
          onOpenChange={setConvertPointsOpen} 
          onProceed={handleProceedWithConversion} 
        />
        <ConversionSuccessModal 
        isOpen={isConversionSuccessOpen} 
        onOpenChange={() => setConversionSuccessOpen(false)} 
        conversionData={mockConversionData}
      />
    </div>

  );
}