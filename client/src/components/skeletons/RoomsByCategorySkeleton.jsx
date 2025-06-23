const RoomsByCategorySkeleton = () => {
  return (
    <div className="bg-zinc-900 min-h-screen pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32 animate-pulse">
      {/* Title */}
      <div className="flex flex-col items-start mb-10">
        <div className="h-10 w-64 bg-zinc-700 rounded mb-3" />
        <div className="h-4 w-96 bg-zinc-700 rounded" />
      </div>

      {/* Hotel Cards */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row items-center px-5 py-10 gap-6 border-b border-gray-500/30"
        >
          {/* Image Section */}
          <div className="bg-zinc-700 rounded-xl shadow-lg h-64 md:w-1/3 w-full" />

          {/* Information Section */}
          <div className="md:w-1/2 flex flex-col gap-4 w-full">
            <div className="h-6 bg-zinc-700 rounded w-1/2" />
            <div className="h-8 bg-zinc-700 rounded w-3/4" />
            <div className="flex items-center gap-2">
              <div className="h-5 w-24 bg-zinc-700 rounded" />
            </div>
            <div className="h-5 bg-zinc-700 rounded w-1/2" />
            <div className="flex flex-wrap items-center gap-2 mt-2">
              {[...Array(4)].map((_, j) => (
                <div
                  key={j}
                  className="w-24 h-8 bg-zinc-700 rounded-lg"
                />
              ))}
            </div>
            <div className="h-6 bg-zinc-700 rounded w-32" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomsByCategorySkeleton;
