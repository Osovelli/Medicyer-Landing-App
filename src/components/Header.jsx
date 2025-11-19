import { useState } from "react"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "./ui/dropdown-menu"
import { Input } from "../components/ui/input"
import { Badge } from "./ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"
import {
  Menu,
  Search,
  MapPin,
  ShoppingCart,
  User,
  Stethoscope,
  Pill,
  FlaskConical,
  Building2,
  Heart,
  Droplet,
  Share2,
  Trophy,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { Link } from "react-router-dom"

export function Header({ isLoggedIn = false, userName }) {
  const [location, setLocation] = useState("Abuja, NGA")
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)

  const categories = [
    { icon: Stethoscope, label: "Doctors / therapist", href: "/doctors" },
    { icon: Pill, label: "Pharmacy", href: "/pharmacy" },
    { icon: FlaskConical, label: "Laboratories", href: "/laboratories" },
    { icon: Building2, label: "Hospitals", href: "/hospitals" },
    { icon: Heart, label: "Donors", href: "/donors" },
    { icon: Droplet, label: "Blood Bank", href: "/blood-bank" },
    { icon: Share2, label: "Referral", href: "/referral" },
    { icon: Trophy, label: "Fun & Earnings", href: "/fun-earnings" },
    { icon: BookOpen, label: "Resources", href: "/resources", badge: "BETA" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 items-center justify-between gap-4 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border-indigo-950">
            <img src="/logo.svg" alt="Medicyer Logo" className="h-6 w-6 object-cover" />
          </div>
          <span className="text-xl font-semibold text-foreground">Medicyer</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 md:flex md:flex-1">
          {isLoggedIn && (
            <DropdownMenu open={isCategoriesOpen} onOpenChange={setIsCategoriesOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2">
                  <Menu className="h-4 w-4" />
                  Categories
                  {isCategoriesOpen && <ChevronDown className="h-4 w-4" />}
                  {!isCategoriesOpen && <ChevronUp className="h-4 w-4" />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[560px] p-2" sideOffset={8}>
                <div className="grid grid-cols-2 gap-1">
                  {categories.map((category) => (
                    <DropdownMenuItem key={category.label} asChild>
                      <Link to={category.href} className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm">
                        <category.icon className="h-4 w-4 text-muted-foreground" />
                        <span className="flex-1">{category.label}</span>
                        {category.badge && (
                          <Badge variant="secondary" className="bg-accent text-accent-foreground text-xs font-medium">
                            {category.badge}
                          </Badge>
                        )}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* Location Selector */}
          {!isLoggedIn && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2">
                  <MapPin className="h-4 w-4" />
                  {location}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem onClick={() => setLocation("Abuja, NGA")}>Abuja, NGA</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLocation("Lagos, NGA")}>Lagos, NGA</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLocation("Kano, NGA")}>Kano, NGA</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input type="search" placeholder="Find a Specialist..." className="pl-9 bg-secondary/50" />
          </div>

          {/* Location for logged in users */}
          {isLoggedIn && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2">
                  <MapPin className="h-4 w-4" />
                  {location}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLocation("Abuja, NGA")}>Abuja, NGA</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLocation("Lagos, NGA")}>Lagos, NGA</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLocation("Kano, NGA")}>Kano, NGA</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Cart */}
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>

          {/* User Profile or Login */}
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2 hidden md:flex">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <User className="h-4 w-4" />
                  </div>
                  <span className="max-w-[100px] truncate">{userName || "User"}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" className="hidden md:flex">
                Cart
              </Button>
              <Button className="hidden md:flex">
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            </>
          )}

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-2">
              <nav className="flex flex-col gap-4">
                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input type="search" placeholder="Find a Specialist..." className="pl-9" />
                </div>

                {/* Mobile Location */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                      <MapPin className="h-4 w-4" />
                      {location}
                      <ChevronDown className="ml-auto h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[250px]">
                    <DropdownMenuItem onClick={() => setLocation("Abuja, NGA")}>Abuja, NGA</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLocation("Lagos, NGA")}>Lagos, NGA</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLocation("Kano, NGA")}>Kano, NGA</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Mobile Categories */}
                {isLoggedIn && (
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-sm text-muted-foreground px-2">Categories</h3>
                    {categories.map((category) => (
                      <Link
                        key={category.label}
                        to={category.href}
                        className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm hover:bg-secondary"
                      >
                        <category.icon className="h-4 w-4 text-muted-foreground" />
                        <span className="flex-1">{category.label}</span>
                        {category.badge && (
                          <Badge variant="secondary" className="bg-accent text-accent-foreground text-xs">
                            {category.badge}
                          </Badge>
                        )}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Mobile Actions */}
                <div className="flex flex-col gap-2 pt-4 border-t">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Cart
                  </Button>
                  {isLoggedIn ? (
                    <>
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <User className="h-4 w-4 mr-2" />
                        {userName || "Profile"}
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        Logout
                      </Button>
                    </>
                  ) : (
                    <Button className="w-full">
                      <User className="h-4 w-4 mr-2" />
                      Login
                    </Button>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
