
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  text: string;
  className?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text, className = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`p-1.5 rounded-md transition-all duration-200 border ${
        copied 
          ? "bg-green-100 text-green-700 border-green-200" 
          : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover:text-gray-700"
      } ${className}`}
      title="Copy to clipboard"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
};

export default CopyButton;
