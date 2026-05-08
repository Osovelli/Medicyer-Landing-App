import { BlogSection } from '@/components/BlogSection'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ArrowLeftIcon, Clock, LocateFixedIcon, MapPin, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Calendar, Download, Filter, Search, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import Table from '@/components/custom/Table'
import { Badge } from '@/components/ui/badge'



export default function AppointmentPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('my-appointments');
  const [sortBy, setSortBy] = useState('date');
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data
  const appointmentData = [
    {
      id: 1,
      name: 'Alice Bola',
      gender: 'Male',
      type: 'Home Service',
      date: '12 Jan, 2025',
      action: 'Confirmed',
    },
    {
      id: 2,
      name: 'Alice Bola',
      gender: 'Male',
      type: 'Home Service',
      date: '12 Jan, 2025',
      action: 'Confirmed',
    },
    {
      id: 3,
      name: 'Alice Bola',
      gender: 'Male',
      type: 'On-site',
      date: '12 Jan, 2025',
      action: 'Confirmed',
    },
    {
      id: 4,
      name: 'Alice Bola',
      gender: 'Male',
      type: 'On-site',
      date: '12 Jan, 2025',
      action: 'Declined',
    },
    {
      id: 5,
      name: 'Alice Bola',
      gender: 'Male',
      type: 'On-site',
      date: '12 Jan, 2025',
      action: 'Declined',
    },
    {
      id: 6,
      name: 'Alice Bola',
      gender: 'Male',
      type: 'On-site',
      date: '12 Jan, 2025',
      action: 'Declined',
    },
  ];

  const sidebarAppointments = [
    { name: 'Alice Bola', type: 'On-site', status: 'Ongoing' },
    { name: 'Sharafadeen M.', type: 'On-site', time: '09:00' },
    { name: 'Alice Bola', type: 'Home Service', time: '13:45' },
    { name: 'Sharafadeen M.', type: 'On-site', time: '13:45' },
    { name: 'Sharafadeen M.', type: 'Home Service', time: '13:45' },
  ];

  const columns = [
    {
      key: 'name',
      label: 'Name',
      sortable: true,
    },
    {
      key: 'gender',
      label: 'Gender',
      sortable: true,
    },
    {
      key: 'type',
      label: 'Type',
      sortable: true,
    },
    {
      key: 'date',
      label: 'Date',
      sortable: true,
    },
    {
      key: 'action',
      label: 'Action',
      render: (value) => {
        const isConfirmed = value === 'Confirmed';
        return (
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              isConfirmed
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {value}
          </span>
        );
      },
    },
  ];

  // Simple calendar component
  const Calendar7Days = () => {
    const currentDate = new Date(2025, 6, 12); // July 12, 2025
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const firstDay = new Date(2025, 6, 1);
    const lastDay = new Date(2025, 7, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const calendarDays = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      calendarDays.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push(i);
    }

    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center gap-2 text-xs text-gray-400">
          <span>May</span>
          <span>Jun</span>
          <button className="px-3 py-1 bg-blue-900 text-white rounded-full text-xs font-medium">
            Jul, 2025
          </button>
          <span>Aug</span>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {dayNames.map((day) => (
            <div
              key={day}
              className="text-center text-xs font-semibold text-gray-700"
            >
              {day}
            </div>
          ))}

          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`text-center text-sm py-2 rounded ${
                day === 12
                  ? 'bg-blue-900 text-white font-semibold'
                  : 'text-gray-700 hover:bg-gray-100 cursor-pointer'
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-slate-900">
      <Header isLoggedIn={true} userName="Tobi Dev" />
      <div className="max-w-7xl mx-auto w-full">
        {/* Breadcrumb */}
        <div className="px-4 py-4 border-b border-gray-200">
          <div className="px-4 py-4 text-left">
              {/* breadcrumb text */}
              <Breadcrumb className="text-xs text-gray-600">
                  <BreadcrumbList className={"gap-1"}>
                      <BreadcrumbItem>
                          <BreadcrumbLink href="/">Home</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                          <DropdownMenu>
                              <DropdownMenuTrigger className="flex items-center gap-1">
                                  <BreadcrumbEllipsis className="size-4" />
                                  <span className="sr-only">Toggle menu</span>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="start">
                                  <DropdownMenuItem>Pharmacy</DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => navigate('/blood-bank')}>
                                      Blood Bank
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>Donor</DropdownMenuItem>
                              </DropdownMenuContent>
                          </DropdownMenu>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                          <BreadcrumbLink href="/appointment">Appointments</BreadcrumbLink>
                      </BreadcrumbItem>
                      {/* <BreadcrumbItem>
                      <BreadcrumbSeparator />
                          <BreadcrumbLink href="/doctors/cardiologist">Cardiologist</BreadcrumbLink>
                      </BreadcrumbItem> */}
                  </BreadcrumbList>
              </Breadcrumb>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 py-6">
          <button
          onClick={() => navigate(-1)}
          className="flex h-10 w-10 items-center shadow-sm justify-center rounded-full hover:bg-white transition-colors"
          >
          <ArrowLeftIcon className="h-4 w-4 text-slate-900" />
          </button>
        </div>
        <div className="p-6 w-full">
          <div className="">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
              <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                      <Calendar className="h-4 w-4" />
                      Sort by Date
                      <ChevronDown className="h-4 w-4" />
                  </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                  <DropdownMenuItem>Sort by Date</DropdownMenuItem>
                  <DropdownMenuItem>Sort by Name</DropdownMenuItem>
                  <DropdownMenuItem>Sort by Status</DropdownMenuItem>
                  </DropdownMenuContent>
              </DropdownMenu>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 mb-8">
              <Card className="border border-gray-200">
                  <CardContent className="pt-6 text-start">
                  <p className="text-sm font-normal text-gray-600 mb-1">Total Appointments</p>
                  <p className="text-2xl font-bold text-gray-900">304</p>
                  </CardContent>
              </Card>
              <Card className="border border-gray-200">
                  <CardContent className="pt-6 text-start">
                  <p className="text-sm font-normal text-gray-600 mb-1">Physical</p>
                  <p className="text-2xl font-bold text-gray-900">67</p>
                  </CardContent>
              </Card>
              <Card className="border border-gray-200">
                  <CardContent className="pt-6 text-start">
                  <p className="text-sm font-normal text-gray-600 mb-1">Virtual</p>
                  <p className="text-2xl font-bold text-gray-900">243</p>
                  </CardContent>
              </Card>
              </div>

              <div className="flex gap-6 w-full flex-col lg:flex-row">
              {/* Left Sidebar */}
              <div className="lg:w-80 flex flex-col gap-1 sm:flex-row lg:flex-col space-y-6">
                {/* My Appointments List */}
                <div className="bg-white flex-1 rounded-lg border text-start border-gray-200 p-4">
                  <h3 className="font-semibold lg:w-34 lg:border-b-2 border-black text-gray-900 mb-4">My Appointments</h3>
                  <div className="space-y-3">
                      {sidebarAppointments.map((apt, index) => (
                      <div
                          key={index}
                          className="flex items-start justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                      >
                          <div className="flex items-start gap-4">
                          <img
                              src="/donor image.jpg"
                              alt={apt.name}
                              className="w-10 h-10 rounded-full"
                          />
                          <div className='flex flex-col gap-1'>
                              <p className="text-sm font-semibold text-gray-900">
                              {apt.name}
                              </p>
                              <p className="text-xs text-gray-600">{apt.type}</p>
                          </div>
                          </div>
                          {apt.status && (
                          <Badge className="text-xs ml-4 font-semibold bg-red-100 text-red-600">
                              {apt.status}
                          </Badge>
                          )}
                          {apt.time && (
                          <Badge className="text-xs ml-10 font-semibold bg-blue-100 text-blue-600">
                              {apt.time}
                          </Badge>
                          )}
                      </div>
                      ))}
                  </div>
                </div>

                {/* Calendar */}
                <div className="bg-white flex-1 rounded-lg border border-gray-200 p-4">
                <Calendar7Days />
                </div>
              </div>

              {/* Right Content */}
              <div className="flex-1">
                  {/* Tabs */}
                  <Tabs
                  value={activeTab}
                  onValueChange={setActiveTab}
                  className="mb-6"
                  >
                  <div className="overflow-x-auto flex justify-start items-center w-full">
                  <TabsList className="border-b gap-4 bg-transparent p-0 lg:w-fit justify-start min-w-max">
                      <TabsTrigger
                      value="my-appointments"
                      className="border-0  border-b-2 rounded-none shadow-none data-[state=active]:border-black data-[state=active]:bg-transparent whitespace-nowrap"
                      >
                      My Appointments
                      </TabsTrigger>
                      <TabsTrigger
                      value="all-request"
                      className="border-0 border-b-2 rounded-none shadow-none data-[state=active]:border-black data-[state=active]:bg-transparent whitespace-nowrap"
                      >
                      All Request
                      </TabsTrigger>
                      <TabsTrigger
                      value="confirmed"
                      className="border-0 border-b-2 rounded-none shadow-none data-[state=active]:border-black data-[state=active]:bg-transparent whitespace-nowrap"
                      >
                      Confirmed Request
                      </TabsTrigger>
                      <TabsTrigger
                      value="declined"
                      className="border-0 border-b-2 rounded-none shadow-none data-[state=active]:border-black data-[state=active]:bg-transparent whitespace-nowrap"
                      >
                      Declined Request
                      </TabsTrigger>
                      <TabsTrigger
                      value="pending"
                      className="border-0 border-b-2 rounded-none shadow-none data-[state=active]:border-black data-[state=active]:bg-transparent whitespace-nowrap"
                      >
                      Pending
                      </TabsTrigger>
                  </TabsList>
                  </div>

                  <TabsContent value={activeTab} className="space-y-4 mt-6">
                      {/* Search and Actions */}
                      <div className="flex gap-3">
                      <div className="flex-1 relative">
                          <Search className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                          <Input
                          placeholder="Search"
                          className="pl-10 bg-white border border-gray-200 focus-visible:border-blue-300 focus-visible:ring-[1px]"
                          />
                      </div>
                      <Button variant="outline" className="gap-2 h-12">
                          <Filter className="h-4 w-4" />
                          Filter
                      </Button>
                      <Button variant="outline" className="gap-2 h-12">
                          <Download className="h-4 w-4" />
                          Export
                      </Button>
                      </div>

                      {/* Table */}
                      <div className="bg-white rounded-lg border border-gray-200">
                      <Table
                          columns={columns}
                          data={appointmentData}
                          onPageChange={setCurrentPage}
                          showSearch={false}
                      />
                      </div>
                  </TabsContent>
                  </Tabs>
              </div>
              </div>
          </div>
        </div>

        {/* Blog Section */}
        <div className="">
          <BlogSection />
        </div>
      </div>
          {/* Footer */}
          <Footer />
        </div>
  )
}

