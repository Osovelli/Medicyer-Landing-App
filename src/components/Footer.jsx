import { useState } from "react"
import { Mail, Phone, Instagram, Dribbble, Twitter, User2Icon, MailIcon } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "" })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <footer className="bg-[#BD8CBF99]/60 py-16 px-4 md:px-8 rounded-t-3xl">
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="bg-white rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's get in touch!</h2>
              <p className="text-gray-600 mb-8">Our team is here to help. Contact us for quick and friendly support.</p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>+012 345 6789</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>Hello@medicyer.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect with us</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center hover:bg-purple-300 transition"
                  >
                    <Instagram className="w-5 h-5 text-purple-600" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center hover:bg-purple-300 transition"
                  >
                    <Dribbble className="w-5 h-5 text-purple-600" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center hover:bg-purple-300 transition"
                  >
                    <span className="text-purple-600 font-bold">Be</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center hover:bg-purple-300 transition"
                  >
                    <Twitter className="w-5 h-5 text-purple-600" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="relative flex items-center">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-8 py-3 border flex items-center border-gray-300 rounded-sm h-12 focus:outline-none focus:ring-0"
                    required
                  />
                 <span className="absolute left-2 space-x-1 flex gap-2">
                    <User2Icon className="text-gray-400 w-5 h-5" />
                  </span>
                </div>
                <div className="relative flex items-center">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-9 py-3 border border-gray-300  rounded-sm h-12 focus:outline-none focus:ring-0 focus:ring-purple-500"
                    required
                  />
                  <span className="absolute left-2  space-x-1 flex gap-2">
                    <MailIcon className="text-gray-400 w-5 h-5" />
                  </span>
                </div>
                <Button
                  type="submit"
                  size={'custom'}
                  variant={'soft'}
                  className="w-full md:w-auto px-12 py-6 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links & Info */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 pb-8 border-b border-purple-400">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-start">
                <img src="/logo.svg" alt="app logo" className="h2 w2" />
              </div>
              <span className="font-semibold text-gray-800 text-center md:text-left">Medicyer</span>
            </div>
            <p className="text-sm text-gray-700 text-left max-w-xs">
              We provide a range of comprehensive medical services to meet your healthcare needs
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick links</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  We provide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  We provide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  We provide
                </a>
              </li>
            </ul>
          </div>

          {/* We Provide 1 */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">We provide</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  We provide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  We provide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  We provide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  We provide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  We provide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  We provide
                </a>
              </li>
            </ul>
          </div>

          {/* We Provide 2 */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">We provide</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  We provide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  We provide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  We provide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  We provide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  We provide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  We provide
                </a>
              </li>
            </ul>
          </div>

          {/* We Provide 3 */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">We provide</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  We provide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  We provide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  We provide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  We provide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  We provide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  We provide
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-700">© 2025 Medicyer. All rights reserved.</div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* CTA Buttons */}
            <div className="flex gap-4">
            <button className="bg-black text-white px-2 py-2 md:py-4 rounded-sm md:rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors flex items-center">
                <img src="/Apple.svg" alt="Apple Logo" className="h-4 w-4" />              
                <span className="text-xs md:text-sm font-light max-w-[110px] leading-3">Download on the <strong>App store</strong></span>
            </button>
            <button className="bg-black text-white px-2 py-2 md:py-4 rounded-sm md:rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors flex items-center">
                <img src="/Playstore.svg" alt="Playstore Logo" className="h-4 w-4" />              
                <span className="text-xs md:text-sm font-light max-w-[100px] leading-3">Get It On <strong>Google Play</strong></span>
            </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">

            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition"
            >
              <Dribbble className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition"
            >
              <span className="text-white font-bold text-sm">Be</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition"
            >
              <Twitter className="w-5 h-5 text-white" />
            </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
