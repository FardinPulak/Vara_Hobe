'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Welcome to</h1>
      
      <Image
        src="/images/intro.png"  
        alt="House"
        width={600}
        height={300}
        className="rounded-lg shadow-sm"
      />

      <a
        href="/login" 
        className="absolute top-8 right-8 p-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
      >
        Login
      </a>
    </div>
  );
}
