"use client"
import { Search, ShoppingCart, ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import logo from "@/public/assets/images/logo.png"
import Image from 'next/image';
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-900 text-white py-4 px-6 relative overflow-hidden bottom-1">
      {/* Diagonal purple accent */}
      <div className="absolute left-0 top-0 bottom-0 w-96 bg-gradient-to-r from-purple-600 to-purple-500 transform -skew-x-12 -translate-x-32"></div>
      
      <div className="relative z-10 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center w-52 h-10">
         <Image src={logo} alt='logo' />
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center space-x-1 hover:text-purple-300 cursor-pointer transition-colors">
            <Link href={"/"} className="font-medium">HOME</Link>
           
          </div>
          
          <div className="hover:text-purple-300 cursor-pointer transition-colors">
            <Link href={"/about"} className="font-medium">ABOUT US</Link>
          </div>
          
          <div className="flex items-center space-x-1 hover:text-purple-300 cursor-pointer transition-colors">
            <Link href={"/service"} className="font-medium">SERVICES</Link>
           
          </div>
          
        
          
          <div className="flex items-center space-x-1 hover:text-purple-300 cursor-pointer transition-colors">
            <Link href={"/blog"} className="font-medium">BLOG</Link>
          
          </div>
          
          <div className="hover:text-purple-300 cursor-pointer transition-colors">
            <Link href={"/contact"} className="font-medium">CONTACT</Link>
          </div>
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          {/* Search icon - Hidden on small screens */}
          <div className="hidden sm:block hover:text-purple-300 cursor-pointer transition-colors">
            <Search className="w-6 h-6" />
          </div>
          
          {/* Shopping cart with badge */}
          <div className="relative hover:text-purple-300 cursor-pointer transition-colors">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
              0
            </span>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden hover:text-purple-300 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-slate-900 z-50 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-700">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-md">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded transform rotate-45 flex items-center justify-center">
                  <span className="text-white font-bold text-lg transform -rotate-45">S</span>
                </div>
              </div>
              <span className="text-xl font-bold">WebTeck</span>
            </div>
            <button 
              onClick={toggleMenu}
              className="hover:text-purple-300 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 px-6 py-8 space-y-6">
            <div className="flex items-center justify-between hover:text-purple-300 cursor-pointer transition-colors py-3 border-b border-slate-800">
              <span className="font-medium text-lg">HOME</span>
              <ChevronDown className="w-5 h-5" />
            </div>
            
            <div className="hover:text-purple-300 cursor-pointer transition-colors py-3 border-b border-slate-800">
              <span className="font-medium text-lg">ABOUT US</span>
            </div>
            
            <div className="flex items-center justify-between hover:text-purple-300 cursor-pointer transition-colors py-3 border-b border-slate-800">
              <span className="font-medium text-lg">SERVICES</span>
              <ChevronDown className="w-5 h-5" />
            </div>
            
            <div className="flex items-center justify-between hover:text-purple-300 cursor-pointer transition-colors py-3 border-b border-slate-800">
              <span className="font-medium text-lg">PAGES</span>
              <ChevronDown className="w-5 h-5" />
            </div>
            
            <div className="flex items-center justify-between hover:text-purple-300 cursor-pointer transition-colors py-3 border-b border-slate-800">
              <span className="font-medium text-lg">BLOG</span>
              <ChevronDown className="w-5 h-5" />
            </div>
            
            <div className="hover:text-purple-300 cursor-pointer transition-colors py-3 border-b border-slate-800">
              <span className="font-medium text-lg">CONTACT</span>
            </div>

            {/* Search Section */}
            <div className="pt-6">
              <div className="hover:text-purple-300 cursor-pointer transition-colors py-3 flex items-center space-x-3">
                <Search className="w-6 h-6" />
                <span className="font-medium text-lg">SEARCH</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
}