'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import StepNavigation from '@/components/StepNavigation';

const FinalDetails = () => {
  const router = useRouter(); 

  const [finalDetails, setFinalDetails] = useState({
    propertyTitle: '',
    propertyDescription: '',
    rentPrice: '',
    rentUnit: '',
    rentDuration: '',
    ownerInfo: '',
  });

 
  const handleChange = (field: string, value: string) => {
    setFinalDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Post Property</h1>
        <button onClick={() => router.push('/my-properties')} 
        className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white">
          Exit
        </button>
      </div>

      <StepNavigation currentStep={4} />

      
      <div className="bg-gray-100 shadow-md p-10 rounded-2xl">
        <h2 className="text-xl font-semibold mb-4">Final Details</h2>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Property Title<span className="text-red-500">*</span></label>
          <input
            type="text"
            value={finalDetails.propertyTitle}
            onChange={(e) => handleChange('propertyTitle', e.target.value)}
            className="border-blue-400 p-2 rounded w-full"
            placeholder="Enter property title"
          />
        </div>

        
        <div className="mb-4">
          <label className="block font-semibold mb-1">Property Description<span className="text-red-500">*</span></label>
          <textarea
            value={finalDetails.propertyDescription}
            onChange={(e) => handleChange('propertyDescription', e.target.value)}
            className="border-blue-400 p-2 rounded w-full"
            placeholder="Enter property description"
            rows={4}
          />
        </div>

        
        <div className="mb-4">
          <label className="block font-semibold mb-1">Rent Price<span className="text-red-500">*</span></label>
          <div className="flex items-center space-x-2">
            <div className="flex">
              <span className="bg-blue-400 p-2 rounded-l">BDT</span>
              <input
                type="number"
                value={finalDetails.rentPrice}
                onChange={(e) => handleChange('rentPrice', e.target.value)}
                className="border-blue-400 p-2 rounded-r w-full"
                placeholder="Enter Amount"
              />
            </div>

            <select
              value={finalDetails.rentUnit}
              onChange={(e) => handleChange('rentUnit', e.target.value)}
              className="border border-blue-400 p-2 rounded"
            >
              <option value="">Select Unit</option>
              <option value="Thousand">Thousand</option>
              <option value="Lac">Lac</option>
              <option value="Crore">Crore</option>
            </select>

            <select
              value={finalDetails.rentDuration}
              onChange={(e) => handleChange('rentDuration', e.target.value)}
              className="border border-blue-400 p-2 rounded"
            >
              <option value="">Per Month</option>
              <option value="Per Year">Per Year</option>
              <option value="One-time Payment">One-time Payment</option>
            </select>
          </div>
        </div>
      </div>

     
      <div className="flex justify-between items-center mt-6">
        <button onClick={() => router.push('/my-properties/add-properties/terms')} className="p-2 bg-gray-300 text-gray-700 rounded">
          ← Back
        </button>
        <button onClick={() => router.push('/my-properties/add-properties/publish')} className="p-2 bg-blue-500 text-white rounded ml-auto">
          Publish
        </button>
      </div>
    </div>
  );
};

export default FinalDetails;
