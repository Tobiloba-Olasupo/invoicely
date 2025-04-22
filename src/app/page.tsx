"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { 
  Check, 
  CreditCard, 
  BarChart3, 
  Clock, 
  ReceiptText, 
  Smartphone 
} from "lucide-react";

export default function LandingPage() {
  

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Invoice Smarter, Get Paid Faster
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Invoicely helps freelancers and businesses create professional invoices, track payments, and manage finances with ease.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Watch Demo
            </Button>
          </div>
          
          {/* Hero Image */}
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/public/hero.png" 
              alt="Invoicely Dashboard" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Manage Invoices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Invoicely provides all the tools you need to create professional invoices, track payments, and streamline your billing process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-5">
                <ReceiptText className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Invoices</h3>
              <p className="text-gray-600">
                Create beautiful, professional invoices in seconds with customizable templates and branding options.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-5">
                <CreditCard className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Seamless Payments</h3>
              <p className="text-gray-600">
                Accept payments online directly through your invoices with support for credit cards and other payment methods.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-5">
                <Clock className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Automated Reminders</h3>
              <p className="text-gray-600">
                Set up automatic payment reminders to reduce late payments and improve your cash flow.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-5">
                <BarChart3 className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Insightful Reports</h3>
              <p className="text-gray-600">
                Get a clear picture of your business finances with detailed reports and analytics.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-5">
                <Smartphone className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mobile Friendly</h3>
              <p className="text-gray-600">
                Create and send invoices on the go with our mobile-responsive application.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-5">
                <Check className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Client Management</h3>
              <p className="text-gray-600">
                Keep track of your clients, manage their information, and view payment history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invoicely Section */}
      <section id="why" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Invoicely
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why thousands of businesses trust Invoicely to handle their invoicing needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-50 p-1 rounded-xl mb-8">
                <Image 
                  src="/api/placeholder/600/400" 
                  alt="Invoicely on multiple devices" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Check className="text-green-600 w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Save Time</h3>
                  <p className="text-gray-600">
                    Create invoices in minutes instead of hours, with templates and automated features.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Check className="text-green-600 w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Get Paid Faster</h3>
                  <p className="text-gray-600">
                    Online payments and automated reminders help you collect payments up to 3x faster.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Check className="text-green-600 w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Look Professional</h3>
                  <p className="text-gray-600">
                    Make a great impression with beautifully designed invoices that reflect your brand.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Check className="text-green-600 w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Scale With Ease</h3>
                  <p className="text-gray-600">
                    Whether you send 5 or 500 invoices a month, Invoicely grows with your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that works best for your business, with no hidden fees or surprises.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Starter</h3>
                <p className="text-gray-600 mb-4">Perfect for freelancers and small businesses</p>
                <div className="flex items-end">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-gray-600 ml-2">/ month</span>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-6 mb-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="text-green-600 w-5 h-5 mr-2" />
                    <span>Up to 20 invoices per month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-600 w-5 h-5 mr-2" />
                    <span>Custom invoice templates</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-600 w-5 h-5 mr-2" />
                    <span>Online payments</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-600 w-5 h-5 mr-2" />
                    <span>Client portal</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-600 w-5 h-5 mr-2" />
                    <span>Basic reporting</span>
                  </li>
                </ul>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </div>
            
            {/* Professional Plan */}
            <div className="bg-blue-600 p-8 rounded-xl shadow-md relative">
              <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                MOST POPULAR
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Professional</h3>
                <p className="text-blue-100 mb-4">For growing businesses with more clients</p>
                <div className="flex items-end">
                  <span className="text-4xl font-bold text-white">$19</span>
                  <span className="text-blue-100 ml-2">/ month</span>
                </div>
              </div>
              <div className="border-t border-blue-500 pt-6 mb-6">
                <ul className="space-y-3">
                  <li className="flex items-center text-white">
                    <Check className="text-white w-5 h-5 mr-2" />
                    <span>Unlimited invoices</span>
                  </li>
                  <li className="flex items-center text-white">
                    <Check className="text-white w-5 h-5 mr-2" />
                    <span>Advanced customization</span>
                  </li>
                  <li className="flex items-center text-white">
                    <Check className="text-white w-5 h-5 mr-2" />
                    <span>Recurring invoices</span>
                  </li>
                  <li className="flex items-center text-white">
                    <Check className="text-white w-5 h-5 mr-2" />
                    <span>Automated payment reminders</span>
                  </li>
                  <li className="flex items-center text-white">
                    <Check className="text-white w-5 h-5 mr-2" />
                    <span>Advanced reporting</span>
                  </li>
                  <li className="flex items-center text-white">
                    <Check className="text-white w-5 h-5 mr-2" />
                    <span>Team access (up to 3 users)</span>
                  </li>
                </ul>
              </div>
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">Get Started</Button>
            </div>
            
            {/* Business Plan */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Business</h3>
                <p className="text-gray-600 mb-4">For larger businesses with complex needs</p>
                <div className="flex items-end">
                  <span className="text-4xl font-bold">$39</span>
                  <span className="text-gray-600 ml-2">/ month</span>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-6 mb-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="text-green-600 w-5 h-5 mr-2" />
                    <span>Everything in Professional</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-600 w-5 h-5 mr-2" />
                    <span>Unlimited team members</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-600 w-5 h-5 mr-2" />
                    <span>Custom branding</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-600 w-5 h-5 mr-2" />
                    <span>API access</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-600 w-5 h-5 mr-2" />
                    <span>Advanced integrations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-600 w-5 h-5 mr-2" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loved by Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our customers have to say about Invoicely.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Invoicely has transformed how we handle our invoicing. We have reduced our payment collection time by 60% and our clients love the professional invoices.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">Design Studio Owner</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                As a freelancer, I needed something simple yet powerful. Invoicely is exactly that - it is saved me hours of work and helped me maintain a professional image with clients.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Mark Thompson</h4>
                  <p className="text-gray-600 text-sm">Freelance Developer</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                The reporting features in Invoicely have given us insights we never had before. We can now make better business decisions based on our cash flow patterns.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Lisa Chen</h4>
                  <p className="text-gray-600 text-sm">Small Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Streamline Your Invoicing?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join thousands of businesses who trust Invoicely to handle their invoicing needs. Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg font-medium">
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700 text-lg font-medium">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
