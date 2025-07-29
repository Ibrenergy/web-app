import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">AppName</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-blue-600 dark:text-blue-400 font-semibold">
              About
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              Contact
            </Link>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* About Hero */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            About Our
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Mission</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                         We&apos;re passionate about creating beautiful, functional web applications that help businesses 
            and individuals achieve their goals through technology.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Founded in 2024, we started with a simple vision: to make web development more accessible 
              and enjoyable for everyone. What began as a small team of passionate developers has grown 
              into a comprehensive platform serving thousands of users worldwide.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We believe that great software should be both powerful and intuitive, which is why we focus 
              on creating tools that are as beautiful as they are functional.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl p-8 h-80 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Innovation First</h3>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">User-Centered</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every decision we make starts with our users. We listen, learn, and iterate based on real feedback.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Performance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Speed and reliability aren&apos;t optional. We optimize every pixel and every millisecond.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Continuous Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Technology evolves rapidly, and so do we. We stay at the forefront of web development.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">JS</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Jane Smith</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-3">CEO & Founder</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Former tech lead at major startups with 10+ years in web development.
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">MD</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Mike Davis</h3>
              <p className="text-green-600 dark:text-green-400 mb-3">CTO</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Full-stack architect passionate about scalable systems and clean code.
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">SL</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Sarah Lee</h3>
              <p className="text-purple-600 dark:text-purple-400 mb-3">Head of Design</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                UX/UI expert focused on creating intuitive and beautiful user experiences.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 mt-32 border-t border-gray-200 dark:border-gray-700">
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
    </div>
  );
}