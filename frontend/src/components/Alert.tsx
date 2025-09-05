'use client';

import { useState } from 'react';
import { Alert } from 'flowbite-react';  // Import Flowbite React's Alert component

interface AlertProps {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';  // Types of alerts
}

const AlertComponent = ({ message, type }: AlertProps) => {
  const [showAlert, setShowAlert] = useState(true); // Control visibility of the alert

  const getColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'success';
      case 'error':
        return 'failure';
      case 'warning':
        return 'warning';
      case 'info':
        return 'info';
      default:
        return 'info';
    }
  };

  return (
    showAlert && (
      <div className="fixed top-4 right-4 z-50">
        <Alert color={getColor(type)}>
          <span>{message}</span>
          <button
            onClick={() => setShowAlert(false)} // Close the alert when the button is clicked
            className="ml-4 text-blue-500 hover:text-blue-700"
          >
            Close
          </button>
        </Alert>
      </div>
    )
  );
};

export default AlertComponent;
