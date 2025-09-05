'use client'; 

import { useRouter } from 'next/navigation';


const MyProperties = () => {
  const router = useRouter();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Properties</h1>

      <div className="flex space-x-6 border-b pb-2">
        <button className="text-blue-400 border-b-2 border-blue-400 font-semibold pb-1">
          For Rent
        </button>
        <button className="text-gray-500 hover:text-blue-400">For Sale</button>
        <button className="text-gray-500 hover:text-blue-400">Incomplete</button>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-2">
          <select className="border p-2 rounded">
            <option>All</option>
          </select>
          <input type="text" placeholder="Search here" className="border p-2 rounded"/>
          <button className="p-2 bg-blue-200 text-white rounded">🔍</button>
        </div>

        <button 
          onClick={() => router.push('/my-properties/add-properties')} 
          className="p-2 bg-blue-400 text-white rounded"
        >
          + Add Property
        </button>
      </div>

      <div className="mt-4 bg-white shadow-lg p-4 rounded">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2">Name</th>
              <th className="p-2">Property Type</th>
              <th className="p-2">Published Date</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
         
         <tbody>
            
            <tr className="border-b">
              <td className="p-2 flex items-center">
                <img src="/property-image.jpg" alt="Property" className="w-12 h-12 rounded mr-2"/>
                <div>
                  <p className="font-semibold">title</p>
                  
                </div>
              </td>
              <td className="p-2">
                <span className="px-2 py-1 bg-green-100 text-green-600 rounded">FOR RENT</span>
              </td>
              <td className="p-2">-</td>
              <td className="p-2">
                <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded">Pending</span>
              </td>
              <td className="p-2">...</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button className="px-3 py-1 border rounded bg-gray-100">← Previous</button>
        <span className="p-2 bg-gray-200 rounded">1</span>
        <button className="px-3 py-1 border rounded bg-gray-100">Next →</button>
      </div>
    </div>
  );
};

export default MyProperties;
