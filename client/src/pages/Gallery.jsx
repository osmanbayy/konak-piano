/* eslint-disable no-unused-vars */
import React, { lazy, Suspense, useState } from "react";
import { galleryImages } from "../utils/GalleryImages";
import { motion } from "framer-motion";
import Title from "../components/Title";
import { useTranslation } from "react-i18next";

const Lightbox = lazy(() => import("../components/Lightbox"));

const Gallery = () => {
  const { t } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goNext = () =>
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  const goPrev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <motion.div
      className="bg-zinc-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1.6, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-24">
        <Title title={t("galleryTitle")} subTitle={t("gallerySubtitle")} />

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mt-10">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="relative w-full mb-4 rounded-lg break-inside-avoid cursor-pointer overflow-hidden group"
              onClick={() => openLightbox(index)}
            >
              {!loadedImages[index] && (
                <div className="absolute inset-0 bg-zinc-800 animate-pulse rounded-lg" />
              )}
              <img
                src={src}
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
                className={`w-full rounded-lg transition-transform duration-300 group-hover:scale-[1.01] ${
                  loadedImages[index] ? "opacity-100" : "opacity-0"
                }`}
                alt={`gallery-${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <Suspense fallback={<div className="text-white text-center h-screen">Yükleniyor...</div>}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Lightbox
              images={galleryImages}
              currentIndex={currentIndex}
              onClose={closeLightbox}
              onNext={goNext}
              onPrev={goPrev}
            />
          </motion.div>
        </Suspense>
      )}
    </motion.div>
  );
};

export default Gallery;
