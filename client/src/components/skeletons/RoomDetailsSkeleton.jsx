/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const skeletonPulse = "animate-pulse bg-zinc-700 rounded";

const RoomDetailsSkeleton = () => {
  return (
    <motion.div
      className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32 bg-zinc-900"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.6, ease: "easeInOut" }}
    >
      <div className="px-4 bg-zinc-900 space-y-6">
        {/* Title & Tag */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className={`w-60 h-10 ${skeletonPulse}`}></div>
          <div className={`w-24 h-6 ${skeletonPulse}`}></div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-3">
          <div className={`w-24 h-5 ${skeletonPulse}`}></div>
          <div className={`w-16 h-4 ${skeletonPulse}`}></div>
        </div>

        {/* Images */}
        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          <div className={`w-full lg:w-1/2 h-64 ${skeletonPulse}`}></div>
          <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">
            {Array(4)
              .fill(0)
              .map((_, idx) => (
                <div key={idx} className={`h-32 ${skeletonPulse}`}></div>
              ))}
          </div>
        </div>

        {/* Amenities */}
        <div className="space-y-4 mt-10">
          <div className={`w-72 h-8 ${skeletonPulse}`}></div>
          <div className="flex flex-wrap gap-4">
            {Array(6)
              .fill(0)
              .map((_, idx) => (
                <div key={idx} className="flex gap-2 items-center px-3 py-2 bg-zinc-800 rounded-lg">
                  <div className="w-5 h-5 bg-zinc-700 rounded"></div>
                  <div className="w-20 h-3 bg-zinc-700 rounded"></div>
                </div>
              ))}
          </div>
        </div>

        {/* Price */}
        <div className={`w-40 h-6 ${skeletonPulse} mt-4`}></div>

        {/* Room Specs */}
        <div className="space-y-4 mt-10">
          {Array(3)
            .fill(0)
            .map((_, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-7 h-7 bg-zinc-700 rounded"></div>
                <div className="space-y-1">
                  <div className="w-32 h-4 bg-zinc-700 rounded"></div>
                  <div className="w-48 h-3 bg-zinc-700 rounded"></div>
                </div>
              </div>
            ))}
        </div>

        {/* Paragraph */}
        <div className="border-y border-gray-300 my-10 py-10 space-y-3">
          {Array(4)
            .fill(0)
            .map((_, idx) => (
              <div key={idx} className={`w-full h-3 ${skeletonPulse}`}></div>
            ))}
        </div>

        {/* Host Info */}
        <div className="flex gap-4 items-start">
          <div className="w-16 h-16 bg-zinc-700 rounded-full"></div>
          <div className="flex flex-col gap-2">
            <div className={`w-64 h-4 ${skeletonPulse}`}></div>
            <div className="flex items-center gap-2">
              <div className={`w-24 h-4 ${skeletonPulse}`}></div>
              <div className={`w-20 h-3 ${skeletonPulse}`}></div>
            </div>
            <div className={`w-28 h-9 ${skeletonPulse} mt-3`}></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomDetailsSkeleton;
