import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-2">
      <AlertCircle className="text-red-500" size={20} />
      <p className="text-red-700">{message}</p>
    </div>
  );
};

export default ErrorMessage;