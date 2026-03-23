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

const ARTICLE_CONTENT = `Lorem ipsum dolor sit amet consectetur. In vel diam in rutrum pulvinar at nisi at. Ut arcu ut venenatis quis elit morbi ut. Vel tortor netus pretium orci eleifend. Eget viverra a in erat consequat viverra. Maecenas erat habitasse mattis tellus leo. Ut in pretium cras vitae. Pellentesque metus lorem nisi eget sollicitudin tristique netus sem.
Mauris aliquam in sapien aliquam. Vel iaculis donec diam mi neque etiam purus. Tincidunt condimentum sit quis sit vestibulum ultricies. Aliquet vulputate sit ultricies purus elementum dignissim purus pharitra. Odio ac ut tincidunt quis pulvinar diam vel fermentum. Eget aliquam ullamcorper proin fermentum. Imperdiet fringilla convallis proin aliquet vitae nunc commodo senectus et. A augue ipsum leo vel nulla pharetra aliquam urna eget. Ut volutpat vel amet ornare. Velit quis ut tincidunt diam erat magnis pellentesque gravida. Facilisis eleifend tortor consequat adipiscing vel ut justo mi aliquam. In augue quis massa aliquam tortor diam cum sit. A auctor facilisis posuere at arcu ultricies. Tincidunt in tempor nibh odio. Viverra fermentum mi adipiscing lectus libero et praesent. Risus a feugiat lectus lacus in fames sed. Tempus fusce malesuada blandit quis sem. Ultrices aliquet tempor faucibus ut elit pretium odio sem. Pellentesque urna phasellus a malesuada ridiculus cras blandit. Dolor vulputate fames a sit enim vel velit. Ut dignissim leo neque suscipit egestas cursus dignissim est at.
Lacinia sagittis diam nunc feugiat feugiat id montes. Ut feugiat quis lorem leo cursus leo malesuada vitae ultricies. Ut est quis sit in metus. Eget nulla fringilla in nisl dolor odio enim nunc augue. Venenatis quis sed nulla nec integer justo. Quis purus morbi diam est sed. Molestie vitae auctor eget vivamus sed sagittis non phasellus. Risus eu lectus sit libero quam in fermentum ipsum. Et eu a consectetur est varius laculus nisl sit. Quam nisl vitae nec risus nisl pellentesque.`;

export default function BlogDetailPage() {
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
            {/* back arrow for navigation */}
            <div className="ml-5">
                <LucideArrowLeft className="w-4 h-4" onClick={handleback} />
            </div>
            <div className="p-20">
                {/* Article Title */}
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                PerfInsights: Detecting Performance Optimization Opportunities in Go Code using Generative
                </h1>

                {/* Featured Image */}
                <div className="rounded-2xl overflow-hidden mb-12 p-2">
                <img
                    src="/blog feature image.svg"
                    alt="Article"
                    className="w-full h-96 rounded-3xl object-cover object-bottom-left"
                />
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                {ARTICLE_CONTENT.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-base lg:text-lg">
                    {paragraph}
                    </p>
                ))}
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
