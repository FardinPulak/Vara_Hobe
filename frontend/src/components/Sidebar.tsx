'use client';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../image/intro.png';

const Sidebar = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  
  return (
    <aside
      className={`h-screen bg-white border-r shadow-lg transition-all duration-300 ${
        isSidebarOpen ? "w-64" : "w-0 overflow-hidden"
      }`}
    >
      {isSidebarOpen && (
        <div className="p-4 flex justify-center">
          <Image src={logo} alt="Vara Hobe" width={150} height={100} />
        </div>
      )}

      <div className={`h-full px-3 pb-4 overflow-y-auto ${isSidebarOpen ? "block" : "hidden"}`}>
        <ul className="space-y-2 font-medium">
          <li>
            <a href="/my-profile" className="flex items-center p-3 rounded-lg hover:bg-gray-100">
              👤 <span className="ml-3">My Profile</span>
            </a>
          </li>

          <li>
            <a href="/dashboard" className="flex items-center p-3 rounded-lg hover:bg-gray-100">
              🏠 <span className="ml-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/my-properties" className="flex items-center p-3 rounded-lg hover:bg-gray-100">
              🏢 <span className="ml-3">My Properties</span>
            </a>
          </li>
          <li>
            <a href="/saved-properties" className="flex items-center p-3 rounded-lg hover:bg-gray-100">
              💾 <span className="ml-3">Saved Properties</span>
            </a>
          </li>

        </ul>

      
        <div className="absolute bottom-2  px-3">
        <a href="/login" className="flex items-center -bottom-1 px-3 p-3 rounded-lg hover:bg-gray-100">
            🚪 <span className="ml-3">Log Out</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
