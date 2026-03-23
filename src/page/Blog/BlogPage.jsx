import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/FAQSection"
import { BlogSection } from "@/components/BlogSection"
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import FeaturedBlog from "@/components/blog/FeaturedBlog"
import { Menu } from "lucide-react"
import BlogCard from "@/components/blog/BlogCard"


const CATEGORIES = ['All', 'Drugs', 'Doctors', 'Labs', 'Latest', 'Featured', 'Important', 'Editorial', 'Popular'];

const FEATURED_BLOG = {
  id: 'perfsinsights-1',
  title: 'PerfInsights: Detecting Performance Optimization Opportunities in Go Code using Generative',
  description:
    "Uber's new GenAI tool, PerfInsights, is transforming Go service optimization! It automatically detects performance issues and recommends fixes, saving engineers thousands of hours and millions in compute costs.",
  image: '/blog feature image.svg',
  date: 'Posted: 5 Days ago',
  category: 'Latest',
};

const BLOG_POSTS = [
  {
    id: '1',
    title: 'Detecting Performance Optimization Opportunities in Go Code using Generative',
    image: '/blog image.png',
    date: 'Posted: 5 Days ago',
  },
  {
    id: '2',
    title: 'Detecting Performance Optimization Opportunities in Go Code using Generative',
    image: '/doctor cta.jpg',
    date: 'Posted: 5 Days ago',
  },
  {
    id: '3',
    title: 'Detecting Performance Optimization Opportunities in Go Code using Generative',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    date: 'Posted: 5 Days ago',
  },
  {
    id: '4',
    title: 'Detecting Performance Optimization Opportunities in Go Code using Generative',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    date: 'Posted: 5 Days ago',
  },
  {
    id: '5',
    title: 'Detecting Performance Optimization Opportunities in Go Code using Generative',
    image: '/blog image.png',
    date: 'Posted: 5 Days ago',
  },
  {
    id: '6',
    title: 'Detecting Performance Optimization Opportunities in Go Code using Generative',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    date: 'Posted: 5 Days ago',
  },
];

export default function BlogPage() { 
    const [activeCategory, setActiveCategory] = useState('All');

    return (
        <div className="min-h-screen">
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
                                        <DropdownMenuItem>Donors</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => navigate('/referral')}>
                                            Referral
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>Blog</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/blood-bank">Blood Bank</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="">List</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            {/* <BreadcrumbItem>
                                <BreadcrumbLink href="/doctors/cardiologist">Cardiologist</BreadcrumbLink>
                            </BreadcrumbItem> */}
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

        {/* Main Content */}
        <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="max-w-9xl mx-auto px-7 py-16 lg:py-20">
            <h1 className="text-3xl text-left lg:text-4xl font-bold text-sky mb-12">Blog</h1>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-16">
            {CATEGORIES.map((category) => (
                <Badge
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`cursor-pointer px-4 py-2 rounded-full transition-colors ${
                    activeCategory === category
                    ? 'bg-sky text-white hover:bg-blue-950'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                variant={activeCategory === category ? 'default' : 'outline'}
                >
                {category}
                </Badge>
            ))}
            </div>

            {/* Featured Blog */}
            <div className="mb-20">
            <FeaturedBlog {...FEATURED_BLOG} />
            </div>

            {/* Our Stories Section */}
            <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-sky">Our Stories</h2>
            <div className="flex items-center gap-4 text-gray-600">
                <span className="text-sm font-medium bg-purple-50 text-sky px-3 py-1 rounded-full">
                123 listed
                </span>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Menu size={20} />
                </button>
            </div>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
                <BlogCard key={post.id} {...post} />
            ))}
            </div>
        </div>
        </main>
        {/* FAQ Section */}
        <div className="">
            <FAQSection />
        </div>

        {/* Blog Section */}
        <div className="">
            <BlogSection />
        </div>
        {/* Footer */}
        <Footer />
        </div>
    )
}

