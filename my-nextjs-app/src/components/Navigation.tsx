"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={`container mx-auto px-6 py-4 ${className}`}>
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">AppName</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className={`transition-colors ${
              isActive('/') 
                ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`transition-colors ${
              isActive('/about') 
                ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
            }`}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className={`transition-colors ${
              isActive('/contact') 
                ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
            }`}
          >
            Contact
          </Link>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
            Get Started
          </button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}