'use client';
import './global.css';
import Sidebar from '../components/Sidebar';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '../image/intro.png';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true); 
  const pathname = usePathname(); 
  const router = useRouter();

  
  const isLoginOrSignupPage = pathname === '/' || pathname === '/login' || pathname === '/signup';

  
  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      
      router.push('/dashboard');
    }
  }, [router]);

  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css" rel="stylesheet" />
      </head>
      <body className="bg-gray-100">
       
        {!isLoginOrSignupPage && (
          <nav className="w-full bg-white shadow-md border-b flex items-center px-4 py-3 z-50">
            
            <button
              onClick={() => setSidebarOpen(!isSidebarOpen)} 
              className="p-2 text-gray-600 rounded-lg hover:bg-gray-200"
            >
              <span className="sr-only">Toggle sidebar</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>

            {!isSidebarOpen && (
              <a href="/dashboard" className="ml-4 flex items-center">
                <Image src={logo} alt="Vara Hobe" width={120} height={80} />
              </a>
            )}
          </nav>
        )}

        <div className="flex min-h-screen transition-all duration-300">
          {!isLoginOrSignupPage && (
            <div className={`transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-0"}`}>
              <Sidebar isSidebarOpen={isSidebarOpen} />
            </div>
          )}

          <div className={`flex-1 p-6 bg-gray-50 transition-all duration-300`}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
