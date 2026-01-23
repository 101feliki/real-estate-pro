import React from 'react';

export const PropertyCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-300" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-1/2" />
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-4 bg-gray-300 rounded w-1/4" />
        <div className="flex space-x-4">
          <div className="h-4 bg-gray-300 rounded w-16" />
          <div className="h-4 bg-gray-300 rounded w-16" />
          <div className="h-4 bg-gray-300 rounded w-16" />
        </div>
      </div>
    </div>
  );
};