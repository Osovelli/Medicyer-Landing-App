import { BlogSection } from '@/components/BlogSection'
import CheckoutFlowManager from '@/components/cart/CheckoutFlowManager'
import { CustomButton } from '@/components/custom/CustomButton'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ArrowLeftIcon, Clock, LocateFixedIcon, MapPin, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



export default function CartPage() {
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [cartItems, setCartItems] = useState([
    {
      id: 1,
      vendor: 'Jasiri Tech Pharmacy LTD',
      products: [
        {
          productId: '34ED466',
          name: 'Bisphosphonates 45ML',
          price: 34000,
          quantity: 2,
          image: '/bisphophonates.jpg',
          type: 'Delivery',
          deliveryEstimate: 4000,
          description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      ]
    },
    {
      id: 2,
      vendor: 'Jasiri Tech Pharmacy LTD',
      products: [
        {
          productId: '34ED466',
          name: 'Bisphosphonates 45ML',
          price: 34000,
          quantity: 4,
          image: '/bisphophonates.jpg',
          type: 'Delivery',
          deliveryEstimate: 4000,
          description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          productId: '34ED467',
          name: 'Bisphosphonates 45ML',
          price: 34000,
          quantity: 7,
          image: '/bisphophonates.jpg',
          type: 'Delivery',
          deliveryEstimate: 4000,
          description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      ]
    },
    {
      id: 3,
      vendor: 'Jasiri Tech Pharmacy LTD',
      products: [
        {
          productId: '34ED468',
          name: 'Bisphosphonates 45ML',
          price: 34000,
          quantity: 2,
          image: '/bisphophonates.jpg',
          type: 'Pickup',
          deliveryEstimate: 4000,
          description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      ]
    }
  ]);
  const navigate = useNavigate();
  const [discountCode, setDiscountCode] = useState('Mediceyer Demo');
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (vendorId, productIndex, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(vendor => {
      if (vendor.id === vendorId) {
        return {
          ...vendor,
          products: vendor.products.map((product, idx) =>
            idx === productIndex ? { ...product, quantity: newQuantity } : product
          )
        };
      }
      return vendor;
    }));
  };

  const handleDeleteProduct = (vendorId, productIndex) => {
    setCartItems(cartItems.map(vendor => {
      if (vendor.id === vendorId) {
        const newProducts = vendor.products.filter((_, idx) => idx !== productIndex);
        return { ...vendor, products: newProducts };
      }
      return vendor;
    }).filter(vendor => vendor.products.length > 0));
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach(vendor => {
      vendor.products.forEach(product => {
        subtotal += product.price * product.quantity;
      });
    });
    return subtotal;
  };

  const subtotal = calculateSubtotal();
  const deliveryFee = 1000;
  const discount = 1000;
  const total = subtotal + deliveryFee - discount;

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-slate-900">
      <Header isLoggedIn={true} userName="Tobi Dev" />
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="px-4 py-4">
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
                              <BreadcrumbLink href="/cart">Carts</BreadcrumbLink>
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
        <div className="px-6 py-8 flex flex-col lg:flex-row gap-8 max-w-9xl mx-auto">
            {/* Left Column - Cart Items */}
            <div className="space-y-6 w-full">
            {cartItems.map((vendor) => (
                <div key={vendor.id} className="space-y-4 border p-2">
                <h3 className="text-sm font-bold text-left text-gray-900">{vendor.vendor}</h3>
                
                {vendor.products.map((product, productIndex) => (
                    <div key={productIndex} className="border border-gray-200 rounded-lg p-4 space-y-4">
                    {/* Product Info */}
                    <div className="flex items-center justify justify-between gap-4">
                    <div className="flex gap-4">
                        <img
                        src={product.image}
                        alt={product.name}
                        className="w-24 h-24 rounded-lg object-cover shrink-0"
                        />
                        <div className="text-start ">
                            <p className="text-xs text-gray-600">Product ID: {product.productId}</p>
                            <h4 className="text-sm font-bold text-gray-900 mt-1">{product.name}</h4>
                            <p className="text-sm font-normal tracking-wider text-gray-900 mt-2">₦{product.price.toLocaleString()}</p>
                        </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex  items-center gap-4">
                        <div className="flex flex-col md:flex-row items-center gap-1 border-gray-300 rounded-lg px-3 py-2">
                        <Button
                            variant={'Outline'}
                            onClick={() => handleQuantityChange(vendor.id, productIndex, product.quantity - 1)}
                            className="text-red-500 text-2xl bg-gray-100 border p-2 rounded-[100%] hover:bg-gray-300 hover:text-red-600"
                            width={22}
                        >
                            −
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{product.quantity}</span>
                        <Button
                            variant={'Outline'}
                            onClick={() => handleQuantityChange(vendor.id, productIndex, product.quantity + 1)}
                            className="text-emerald-800 text-2xl bg-gray-100 border p-2 rounded-[100%] hover:bg-gray-300 hover:text-emerald-900"
                            width={22}
                        >
                            +
                        </Button>
                        </div>
                    </div>
                    </div>

                    {/* Delivery Info */}
                    <div className="flex items-start justify-between gap-3 bg-green-50 rounded-lg p-3">
                        {product.type === 'Delivery' ? (
                        <div className='flex gap-1'>
                            <MapPin size={20} className="text-green-600 shrink-0" />
                            <p className="text-sm font-medium text-gray-900">{product.type}</p>
                        </div>
                        ) : (
                        <div className='flex gap-1'>
                            <Clock size={20} className="text-purple-600 shrink-0" />
                            <p className="text-sm font-medium text-gray-900">{product.type}</p>
                        </div>
                        )}
                        <span className="text-xs font-semibold text-gray-900 whitespace-nowrap">
                        Est. ₦{product.deliveryEstimate.toLocaleString()}
                        </span>
                    </div>

                    <div className='flex items-center justify-between'>
                        <div className="">
                            <p className="text-xs max-w-[180px] text-start md:max-w-4xl text-gray-600 mt-1">{product.description}</p>
                        </div>
                        <LocateFixedIcon className='bg-sky-100 text-sky p-1 rounded-lg' />
                    </div>

                    {/* Total + Delete */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                        <span className="text-xs text-gray-600">Total + Delivery: ₦{((product.price * product.quantity) + product.deliveryEstimate).toLocaleString()}</span>
                        <button
                        onClick={() => handleDeleteProduct(vendor.id, productIndex)}
                        className="text-red-500 hover:text-red-700"
                        >
                        <Trash2 size={18} />
                        </button>
                    </div>
                    </div>
                ))}
                </div>
            ))}
            </div>

            {/* Right Column - Cart Summary */}
            <div className="lg:w-96 space-y-6 w-full">
            <div className="bg-white text-start rounded-lg border border-gray-200 p-6 sticky top-8 space-y-6">
                <h2 className="text-xl font-light text-gray-900">Cart summary</h2>

                {/* Discount / Coupon */}
                <div className="space-y-1 gap-1 flex flex-col">
                
                </div>

                {/* Pricing Details */}
                <div className="space-y-3 border-t border-gray-200 pt-6">
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Subtotal</span>
                    <span className="text-sm font-semibold text-gray-900">₦ {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Delivery Fee</span>
                    <span className="text-sm font-semibold text-gray-900">₦ {deliveryFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Discount</span>
                    <span className="text-sm font-semibold text-red-600">- ₦ {discount.toLocaleString()}</span>
                </div>
                </div>

                {/* Total */}
                <div className="border-t border-gray-200 pt-6">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-medium text-gray-900">Total</span>
                    <span className="text-lg font-semibold text-gray-900">₦ {total.toLocaleString()}</span>
                </div>

                {/* Checkout Button */}
                <CustomButton
                onClick={() => setIsCheckoutOpen(true)} 
                className="lg:w-full px-20 bg-sky hover:bg-blue-950 text-white font-medium py-3 rounded-lg transition-colors"
                >
                    Checkout
                </CustomButton>
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

      {/* Checkout Flow Manager */}
        <CheckoutFlowManager 
            isOpen={isCheckoutOpen}
            onClose={() => setIsCheckoutOpen(false)}
            totalAmount={total}
        />
    </div>
  )
}

