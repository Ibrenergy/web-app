import Link from "next/link";

interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`container mx-auto px-6 py-12 mt-32 border-t border-gray-200 dark:border-gray-700 ${className}`}>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">AppName</span>
        </Link>
        <div className="flex space-x-6">
          <Link href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
            Privacy
          </Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
            Terms
          </Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
            Support
          </Link>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500 dark:text-gray-400">
        © 2024 AppName. All rights reserved.
      </div>
    </footer>
  );
}