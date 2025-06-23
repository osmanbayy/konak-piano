/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const AboutSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="pt-20 flex flex-col px-5 md:px-15 bg-zinc-700 animate-pulse">
        <div className="w-full h-[50vh] bg-zinc-600 rounded-xl" />

        <div className="text-center px-6 md:px-20 mt-10">
          <div className="mx-auto h-6 w-40 bg-zinc-600 rounded mb-4" />
          <div className="mx-auto h-4 w-64 bg-zinc-600 rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 px-6 md:px-20 py-16">
          <div className="flex flex-col gap-4">
            <div className="h-4 w-full bg-zinc-600 rounded" />
            <div className="h-4 w-5/6 bg-zinc-600 rounded" />
            <div className="h-4 w-2/3 bg-zinc-600 rounded" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-4 w-full bg-zinc-600 rounded" />
            <div className="h-4 w-4/5 bg-zinc-600 rounded" />
          </div>
        </div>

        <div className="w-full h-[30vh] bg-zinc-600 rounded-xl" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 py-16">
          <div className="space-y-3">
            <div className="h-4 w-full bg-zinc-600 rounded" />
            <div className="h-4 w-5/6 bg-zinc-600 rounded" />
          </div>
          <div className="space-y-3">
            <div className="h-4 w-full bg-zinc-600 rounded" />
            <div className="h-4 w-4/5 bg-zinc-600 rounded" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSkeleton;
