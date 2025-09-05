'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Publish = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-lg">

        <Image
                src="/images/congratulaton.png"  
                alt="House"
                width={600}
                height={300}
                className="rounded-lg shadow-sm"
              />
       
        
        <h1 className="text-blue-400 text-2xl font-bold">Congratulations</h1>
        <p className="text-gray-800 text-lg font-semibold mt-2">
          Your listing is successfully submitted.
        </p>
        
        <button 
          onClick={() => router.push('/my-properties')} 
          className="mt-6 px-6 py-2 bg-blue-300 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Go to Properties
        </button>
      </div>
    </div>
  );
};

export default Publish;
