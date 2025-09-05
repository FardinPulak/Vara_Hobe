'use client';
import React from 'react';

const steps = [
  { name: "Property Information" },
  { name: "Gallery" },
  { name: "Terms" },
  { name: "Final Details" },
  { name: "Publish" },
];

const StepNavigation = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="flex justify-between items-center mb-6 relative">
      {steps.map((step, index) => {
        const isActive = index + 1 === currentStep;
        const isCompleted = index + 1 < currentStep;

        return (
          <div key={step.name} className="flex flex-col items-center w-full relative">

            <div
              className={`w-4 h-4 rounded-full
                ${isActive ? "bg-blue-400" : isCompleted ? "bg-blue-400" : "bg-gray-300"}`}
            ></div>

            <span className={`mt-2 text-sm text-center ${isActive ? "text-blue-400 font-semibold" : "text-gray-400"}`}>
              {step.name}
            </span>

            {index < steps.length - 1 && (
              <div className={`absolute top-2 left-[53%] w-full h-[3px] ${isCompleted ? "bg-blue-400" : "bg-gray-300"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepNavigation;
