import React from 'react';

const FlowersPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12">
      <div className="text-center max-w-3xl px-4">
        <h1 className="text-5xl font-bold text-[#46A358] mb-4">
          Embrace the Plant Care
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Discover a stunning variety of flowers that bring color and life to any space.
          From vibrant blooms to delicate petals, let nature's finest creations fill your world.
        </p>
        <div className="space-x-6">
          <button className="bg-[#46A358] px-6 py-3 rounded-lg text-white text-lg font-semibold hover:bg-[#3a874a] transition duration-300">
            Explore Our Collection
          </button>
          <button className="border border-[#46A358] px-6 py-3 rounded-lg text-[#46A358] text-lg font-semibold hover:bg-[#46A358] hover:text-white transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500">Bringing the garden to you, one flower at a time.</p>
      </div>
    </div>
  );
};

export default FlowersPage;
