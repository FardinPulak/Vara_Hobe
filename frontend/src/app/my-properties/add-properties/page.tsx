'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import StepNavigation from '@/components/StepNavigation'; 


const AddProperties = () => {
  const router = useRouter(); 

  const [propertyInfo, setPropertyInfo] = useState<{ [key: string]: string }>({
    postType: "",
    category: "",
    propertyType: "",
    bedroom: "",
    bathroom: "",
    balcony: "",
    kitchen: "",
    parking: "",
    floorType: "",
    floorPosition: "",
    totalFloors: "",
    propertySize: "",
    detailLocation: "",
  });
  
  

  
  const handleRadioChange = (field: any, value: any) => {
    setPropertyInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleChange = (field: string, value: string) => {
    setPropertyInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Post Property</h1>
        <button 
          onClick={() => router.push('/my-properties')} 
          className="border border-blue-500 text-blue-500 px-4 py-2 shadow-md p-10 rounded-2xl hover:bg-blue-500 hover:text-white">
          Exit
        </button>
      </div>

      
      <StepNavigation currentStep={1} />

      
      <div className="bg-gray-100 shadow-lg p-6 rounded">
        <h2 className="text-xl font-semibold mb-4">Property Information</h2>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Property Category<span className="text-red-500">*</span></label>
          <div className="flex space-x-4">
            {["Residential", "Commercial"].map((option) => (
              <label key={option} className={`cursor-pointer px-4 py-2 rounded-lg border flex items-center space-x-2 ${
                propertyInfo.category === option ? "bg-blue-400 text-white border-blue-400" : "border-gray-300"
              } hover:bg-blue-100 transition`}>
                <input
                  type="radio"
                  name="category"
                  checked={propertyInfo.category === option}
                  onChange={() => handleRadioChange("category", option)}
                  className="hidden"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Property Type<span className="text-red-500">*</span></label>
          <div className="grid grid-cols-3 gap-2">
            {["Apartment/Flats", "Independent House", "Duplex Home", "Studio Apartment", "Sublet/Room", "Guest House"]
              .map((option) => (
                <label key={option} className={`cursor-pointer px-4 py-2 rounded-lg border flex items-center space-x-2 ${
                  propertyInfo.propertyType === option ? "bg-blue-400 text-white border-blue-400" : "border-gray-300"
                } hover:bg-blue-100 transition`}>
                  <input
                    type="radio"
                    name="propertyType"
                    checked={propertyInfo.propertyType === option}
                    onChange={() => handleRadioChange("propertyType", option)}
                    className="hidden"
                  />
                  <span>{option}</span>
                </label>
              ))}
          </div>
        </div>

        <div className="mb-4">
        <label className="block font-semibold mb-1">
          Location Details <span className="text-red-500">*</span>
        </label>

        
        <div className="mt-4">
          <input
            type="text"
            value={propertyInfo.detailLocation}
            onChange={(e) => handleChange('detailLocation', e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="Write detailed location"
          />
        </div>

      </div>
      
        <h2 className="text-xl font-semibold mb-4 mt-6">Property Features<span className="text-red-500">*</span></h2>
        {["Bedroom", "Bathroom", "Balcony", "Kitchen", "Parking"].map((feature) => (
          <div key={feature} className="mb-4">
            <label className="block font-semibold mb-1">{feature}</label>
            <div className="flex space-x-2">
              {["0", "1", "2", "3", "4", "5+"].map((value) => (
                <label key={value} className={`cursor-pointer px-4 py-2 rounded-lg border flex items-center space-x-2 ${
                  propertyInfo[feature.toLowerCase()] === value ? "bg-blue-400 text-white border-blue-400" : "border-gray-300"
                } hover:bg-blue-100 transition`}>
                  <input
                    type="radio"
                    name={feature}
                    checked={propertyInfo[feature.toLowerCase()] === value}
                    onChange={() => handleRadioChange(feature.toLowerCase(), value)}
                    className="hidden"
                  />
                  <span>{value}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <div className="mb-4">
          <label className="block font-semibold mb-1">Floor Type</label>
          <div className="flex space-x-4">
            {["Marble", "Mozaic", "Tiled", "Others"].map((option) => (
              <label key={option} className={`cursor-pointer px-4 py-2 rounded-lg border flex items-center space-x-2 ${
                propertyInfo.floorType === option ? "bg-blue-400 text-white border-blue-400" : "border-gray-300"
              } hover:bg-blue-100 transition`}>
                <input
                  type="radio"
                  name="floorType"
                  checked={propertyInfo.floorType === option}
                  onChange={() => handleRadioChange("floorType", option)}
                  className="hidden"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        
        <div className="mb-4">
          <label className="block font-semibold mb-1">
            Floor position in building <span className="text-red-500">*</span>
          </label>
          <select
            value={propertyInfo.floorPosition}
            onChange={(e) => setPropertyInfo((prev) => ({ ...prev, floorPosition: e.target.value }))}
            className="border p-2 rounded w-full"
          >
            <option value="">Select Floor Position</option>
            {Array.from({ length: 10 }, (_, i) => `${i + 1}th Floor`).map((floor) => (
              <option key={floor} value={floor}>{floor}</option>
            ))}
          </select>
        </div>
      </div>

     
      <div className="flex justify-between items-center mt-6">
        <button onClick={() => router.push('/my-properties')} className="p-2 bg-gray-300 text-gray-700 rounded">
          ← Back
        </button>
        <button onClick={() => router.push('/my-properties/add-properties/gallery')} className="p-2 bg-blue-500 text-white rounded ml-auto">
          Next →
        </button>
      </div>
    </div>
  );
};

export default AddProperties;
