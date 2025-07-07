/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { assets } from "../assets/assets";

const Hero = () => {
  const { t } = useTranslation();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Skeleton Loading Component
  const SkeletonLoader = () => (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <img 
        src="/2.JPG" 
        alt="Loading background" 
        className="w-full h-full object-cover brightness-50 saturate-200"
      />
    </div>
  );

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {!isVideoLoaded && <SkeletonLoader />}
        <video
          className="w-full h-full object-cover brightness-50 saturate-200"
          autoPlay
          loop
          muted
          playsInline
          onCanPlayThrough={() => setIsVideoLoaded(true)}
          style={{
            opacity: isVideoLoaded ? 1 : 0,
            transition: "opacity 0.7s ease"
          }}
          poster="/2.JPG"
        >
          <source src="/hero-video.MP4" type="video/mp4" />
          {/* Eğer video yüklenemezse fallback */}
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white h-full">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 150 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        >
          <h1 className="font-sour select-none text-amber-200 text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-3xl mt-4">
            {t("heroSlogan")}
          </h1>
          <p className="max-w-130 mt-2 text-sm md:text-base font-funnel">
            {t("heroSection")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -150 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="w-full md:w-auto"
        >
          <a
            href=""
            className="mt-10 flex items-center justify-center gap-1 rounded-md bg-rose-700 py-3 px-4 text-white cursor-pointer w-full max-md:mx-auto transition duration-300 hover:scale-105"
          >
            <img src={assets.searchIcon} alt="search" className="h-7" />
            <a href="https://tatil.firsatbufirsat.com/otel/konak-piano" target="_blank" rel="noopener noreferrer">{t("reservationButton")}</a>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
