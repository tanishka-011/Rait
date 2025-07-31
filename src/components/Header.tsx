import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b-2 border-green-100 py-6">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        {/* App Name */}
        <h1 style={{ fontFamily: 'serif', fontWeight: 700, fontSize: '2.5rem', color: '#B05A1E', letterSpacing: 1 }}>
          Rait
        </h1>
        {/* Location Tag */}
        <span className="flex items-center bg-[#FBECC2] text-[#B05A1E] px-4 py-1 rounded-full text-base font-semibold shadow-sm" style={{ border: '1px solid #B05A1E' }}>
          <span style={{ fontSize: '1.2em', marginRight: 6 }}>📍</span> Srikakulam
        </span>
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search for schemes"
          className="w-full max-w-md px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A3C585] text-lg shadow-sm"
          style={{ background: '#fff' }}
        />
      </div>
    </header>
  );
};