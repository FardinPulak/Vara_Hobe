'use client';
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useRouter } from 'next/navigation';
import StepNavigation from '@/components/StepNavigation';

const Gallery = () => {
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles([...files, ...acceptedFiles]);
  }, [files]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png'],
    },
    multiple: true,
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Post Property</h1>
        <button onClick={() => router.push('/my-properties')} 
        className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white">
          Exit
        </button>
      </div>

      <StepNavigation currentStep={2} />

      <div className="bg--100 shadow-md p-10 rounded-2xl">
        <h2 className="text-xl font-semibold mb-4">Upload photos & video</h2>

        <div
          {...getRootProps()}
          className="border-2 border-dashed border-blue-300 p-10 text-center cursor-pointer bg-gray-100 hover:bg-gray-200 transition rounded-lg"
        >
          <input {...getInputProps()} />
          <p className="text-blue-600">Click here or Drag & Drop files</p>
          <p className="text-sm text-gray-500">PNG, JPG or JPEG (Recommended 800 × 400px)</p>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4">
          {files.map((file, index) => (
            <div key={index} className="relative">
              <img
                src={URL.createObjectURL(file)}
                alt="Uploaded"
                className="w-full h-32 object-cover rounded-lg shadow"
              />
              <button
                onClick={() => setFiles(files.filter((_, i) => i !== index))}
                className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button onClick={() => router.push('/my-properties/add-properties')} className="p-2 bg-gray-300 text-gray-700 rounded">
          ← Back
        </button>
        <button onClick={() => router.push('/my-properties/add-properties/terms')} className="p-2 bg-blue-500 text-white rounded ml-auto">
          Next →
        </button>
      </div>
    </div>
  );
};

export default Gallery;
