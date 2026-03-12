import { useState, useMemo } from "react";
import {
  LucideArrowLeft,
} from "lucide-react";
import { 
    Breadcrumb, 
    BreadcrumbEllipsis, 
    BreadcrumbItem, 
    BreadcrumbLink, 
    BreadcrumbList, 
    BreadcrumbSeparator 
} from "@/components/ui/breadcrumb"


import { Header } from "@/components/Header";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const ratingStats = {
    average: 4.2,
    totalReviews: 241,
    distribution: [
      { stars: 5, count: 120, percentage: 49 },
      { stars: 4, count: 70, percentage: 28 },
      { stars: 3, count: 30, percentage: 12 },
      { stars: 2, count: 12, percentage: 5 },
      { stars: 1, count: 9, percentage: 4 }
    ]
  };

  const reviews = [
    {
      id: 1,
      author: 'Sharafadeen M.',
      date: '24 Dec, 2024',
      rating: 3.5,
      stars: 4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua em ipsum dolor sit amet.'
    },
    {
      id: 2,
      author: 'Sharafadeen M.',
      date: '23 Dec, 2024',
      rating: 3.5,
      stars: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua em ipsum dolor sit amet.'
    },
    {
      id: 3,
      author: 'Sharafadeen M.',
      date: '23 Dec, 2024',
      rating: 3.5,
      stars: 2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua em ipsum dolor sit amet.'
    },
    {
      id: 4,
      author: 'Sharafadeen M.',
      date: '23 Dec, 2024',
      rating: 3.5,
      stars: 2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua em ipsum dolor sit amet.'
    },
    {
      id: 5,
      author: 'Sharafadeen M.',
      date: '23 Dec, 2024',
      rating: 3.5,
      stars: 4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua em ipsum dolor sit amet.'
    }
  ];

  const renderStars = (count, total = 5) => {
    return Array.from({ length: total }).map((_, i) => (
      <svg
        key={i}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={i < count ? '#FFC107' : '#D1D5DB'}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

export default function BloodBankReviewPage() {
  const navigate = useNavigate()

  function handleback() {
    navigate(-1)
  }

  return (
    <div className="min-h-screen dark:bg-slate-900">
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
                            <BreadcrumbLink href="/hospitals">Blood Bank</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/hospital/reviews/all">Reviews</BreadcrumbLink>
                        </BreadcrumbItem>
                        {/* <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/doctors/cardiologist">Cardiologist</BreadcrumbLink>
                        </BreadcrumbItem> */}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <div className="ml-5">
          <LucideArrowLeft className="w-4 h-4" onClick={handleback} />
        </div>
        <div className="p-6 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-light text-gray-900">
          Verified Reviews & Rates ({ratingStats.totalReviews})
        </h2>
        <a href="#" className="text-orange-500 hover:text-orange-600 font-medium text-sm">
          See More
        </a>
      </div>

      <div className="flex gap-8">
        {/* Left Section - Rating Summary */}
        <div className="w-96 bg-orange-100 rounded-lg p-8 flex flex-col items-center justify-center h-fit">
          <div className="text-6xl font-light text-gray-900 mb-4">
            {ratingStats.average}
          </div>
          <div className="flex gap-1 mb-6">
            {renderStars(4, 5)}
          </div>
          <div className="text-3xl font-light text-gray-900 mb-8">
            {ratingStats.totalReviews}
          </div>

          {/* Star Distribution */}
          <div className="w-full space-y-4">
            {ratingStats.distribution.map((dist) => (
              <div key={dist.stars} className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700 w-4">
                  {dist.stars}
                </span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFC107">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <div className="flex-1 bg-gray-300 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-full rounded-full transition-all"
                    style={{ width: `${dist.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Individual Reviews */}
        <div className="flex-1 space-y-4 max-h-96 overflow-y-auto">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                    SM
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      {review.author}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {review.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-900">
                    {review.rating}
                  </span>
                </div>
              </div>

              <div className="flex gap-0.5 mb-3">
                {renderStars(review.stars, 5)}
              </div>

              <p className="text-xs text-start text-gray-600 leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
      </div>
      {/* Blog Section */}
      <div className="">
        <BlogSection />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
