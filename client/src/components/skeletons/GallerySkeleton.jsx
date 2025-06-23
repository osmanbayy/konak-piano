/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const GallerySkeleton = () => {
  return (
    <motion.div
      className="bg-zinc-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1.6, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-24 animate-pulse">

        {/* Header Skeleton */}
        <div className="text-center mb-10">
          <div className="mx-auto h-6 w-48 bg-zinc-100 rounded mb-3" />
          <div className="mx-auto h-4 w-64 bg-zinc-100 rounded" />
        </div>

        {/* Image Grid Skeleton */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-48 bg-zinc-100 rounded-lg break-inside-avoid"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default GallerySkeleton;
