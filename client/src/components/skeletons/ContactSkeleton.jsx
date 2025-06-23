import React from "react";

const ContactSkeleton = () => {
  return (
    <section className="w-full h-screen relative bg-black">
      {/* Skeleton Map */}
      <div className="w-full h-2/3 bg-zinc-800 animate-pulse" />

      {/* Skeleton Info Box */}
      <div className="absolute bottom-1/6 md:bottom-1/4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 shadow-lg flex items-center gap-4 animate-pulse"
          >
            <div className="bg-zinc-600 rounded-full size-14" />
            <div className="flex flex-col gap-2 w-full">
              <div className="h-4 bg-zinc-600 rounded w-3/4" />
              <div className="h-3 bg-zinc-600 rounded w-full" />
              <div className="h-3 bg-zinc-600 rounded w-2/3" />
            </div>
          </div>
        ))}
      </div>

      {/* Skeleton Paragraph */}
      <div className="md:pt-30 pt-40 max-w-6xl mx-auto px-4">
        <div className="h-8 bg-zinc-800 rounded w-4/5 mx-auto animate-pulse" />
      </div>
    </section>
  );
};

export default ContactSkeleton;
