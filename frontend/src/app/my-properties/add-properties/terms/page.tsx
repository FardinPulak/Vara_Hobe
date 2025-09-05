'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import StepNavigation from '@/components/StepNavigation';

const Terms = () => {
  const router = useRouter(); 

  const [termsInfo, setTermsInfo] = useState({
    advanceDeposit: '',
    availableFrom: '',
    availableFor: '',
    serviceCharge: '',
  });

  
  const handleChange = (field: string, value: string) => {
    setTermsInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Post Property</h1>
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white">
          Exit
        </button>
      </div>

      <StepNavigation currentStep={3} />

      <div className="bg-gray-100 shadow-md p-10 rounded-2xl">
        <h2 className="text-xl font-semibold mb-4">Terms</h2>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Advance Deposit<span className="text-red-500">*</span></label>
          <div className="flex">
            <input
              type="number"
              value={termsInfo.advanceDeposit}
              onChange={(e) => handleChange('advanceDeposit', e.target.value)}
              className="border border-blue-400 p-10 rounded w-fit"
              placeholder="Enter Amount"
            />
            <span className="border border-blue-400 p-2 rounded">BDT</span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Available From<span className="text-red-500">*</span></label>
          <input
            type="date"
            value={termsInfo.availableFrom}
            onChange={(e) => handleChange('availableFrom', e.target.value)}
            className="border border-blue-400 p-10 rounded w-fit"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Available For<span className="text-red-500">*</span></label>
          <select
            value={termsInfo.availableFor}
            onChange={(e) => handleChange('availableFor', e.target.value)}
            className="border border-blue-400 p-2 rounded w-auto"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Family">Family</option>
            <option value="Anyone">Anyone</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Service Charge</label>
          <div className="flex">
            <input
              type="number"
              value={termsInfo.serviceCharge}
              onChange={(e) => handleChange('serviceCharge', e.target.value)}
              className="border border-blue-400 p-10 rounded w-fit"
              placeholder="Enter Amount"
            />
            <span className="border border-blue-400 p-2 rounded">BDT</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button onClick={() => router.push('/my-properties/add-properties/gallery')} className="p-2 bg-gray-300 text-gray-700 rounded">
          ← Back
        </button>
        <button onClick={() => router.push('/my-properties/add-properties/final-details')} className="p-2 bg-blue-500 text-white rounded ml-auto">
          Next →
        </button>
      </div>
    </div>
  );
};

export default Terms;
