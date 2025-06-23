import React from "react";

const HeroSkeleton = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-zinc-900 animate-pulse">
      {/* Arka planı temsil eden boş div */}
      <div className="absolute inset-0 bg-zinc-900 scale-110" />

      {/* İçerik */}
      <div className="relative z-10 flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white h-full">
        {/* Başlık alanı */}
        <div className="space-y-4 w-full max-w-xl">
          <div className="h-10 md:h-14 w-3/4 bg-zinc-700 rounded" />
          <div className="h-4 w-full bg-zinc-700 rounded" />
          <div className="h-4 w-5/6 bg-zinc-700 rounded" />
        </div>

        {/* Buton alanı */}
        <div className="mt-10 w-full md:w-auto">
          <div className="h-12 w-48 bg-rose-800/70 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
