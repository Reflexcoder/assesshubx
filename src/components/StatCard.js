import React from 'react';

const StatCard = ({ icon, title, value }) => (
  <div className="bg-white p-4 rounded flex items-center justify-between border border-gray-200">
    <div className="flex items-center">
      <div className="mr-3 text-gray-400">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  </div>
);

export default StatCard;
