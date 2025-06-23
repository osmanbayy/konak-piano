import React from "react";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-5 py-10 gap-6 border-b border-zinc-700 animate-pulse">
      <div className="w-full md:w-1/2 h-64 bg-zinc-700 rounded-xl" />
      <div className="md:w-1/2 flex flex-col gap-3">
        <div className="h-5 w-1/2 bg-zinc-700 rounded" />
        <div className="h-5 w-1/3 bg-zinc-700 rounded" />
        <div className="h-7 w-3/4 bg-zinc-700 rounded" />
        <div className="flex items-center gap-2 mt-2">
          <div className="w-24 h-4 bg-zinc-700 rounded" />
          <div className="w-16 h-4 bg-zinc-700 rounded" />
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="w-20 h-7 bg-zinc-700 rounded-lg"
            />
          ))}
        </div>
        <div className="h-6 w-24 bg-zinc-700 rounded mt-4" />
      </div>
    </div>
  );
};

const FilterSkeleton = () => {
  return (
    <div className="bg-zinc-800 w-full md:w-80 border border-zinc-700 text-zinc-600 max-lg:mb-8 animate-pulse p-5">
      <div className="h-5 w-1/2 bg-zinc-700 rounded mb-4" />
      <div className="space-y-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-4 w-3/4 bg-zinc-700 rounded" />
        ))}
      </div>
      <div className="h-5 w-1/2 bg-zinc-700 rounded mt-6 mb-4" />
      <div className="space-y-2">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="h-4 w-2/3 bg-zinc-700 rounded" />
        ))}
      </div>
    </div>
  );
};

const AllRoomsSkeleton = () => {
  return (
    <div className="bg-zinc-900 pt-28 px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col-reverse lg:flex-row items-start justify-between">
        {/* Left - Skeleton Room Cards */}
        <div className="w-full">
          <div className="mb-8">
            <div className="h-10 w-1/3 bg-zinc-700 rounded mb-2 animate-pulse" />
            <div className="h-4 w-1/2 bg-zinc-700 rounded animate-pulse" />
          </div>
          {Array.from({ length: 3 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>

        {/* Right - Skeleton Filters */}
        <FilterSkeleton />
      </div>
    </div>
  );
};

export default AllRoomsSkeleton;
