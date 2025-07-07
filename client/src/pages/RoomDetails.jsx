/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import StarRating from "../components/StarRating";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import useRoomCommonData from "../hooks/useRoomCommonData";
import Room360View from "../components/Room360View";
import { IoClose } from "react-icons/io5";

const pageVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};
const pageTransition = {
  duration: 1.6,
  ease: "easeInOut",
};

const RoomDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [fullViewImage, setFullViewImage] = useState(null);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [mainImageLoaded, setMainImageLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});

  const roomCommonData = useRoomCommonData();

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom(room);
    room && setMainImage(room.images[0]);
    room && setFullViewImage(room.fullViewImage);
  }, [id]);
  return (
    room && (
      <motion.div
        className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32 bg-zinc-900"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className=" px-4 bg-zinc-900">
          {/* Room Details */}
          <div className="flex md:flex-row items-baseline gap-2 whitespace-nowrap truncate text-ellipsis">
            <h1 className="text-2xl md:text-4xl font-sour text-gray-50">{room.roomName} <span className="font-sans">&gt;</span> </h1>
            <h1 className="text-2xl md:text-4xl font-sour text-gray-400">
              {t(room.roomType)}{" "}
            </h1>
          </div>

          {/* Room Images */}
          <div className="flex flex-col lg:flex-row mt-6 gap-6">
            <div className="relative lg:w-1/2 w-full">
              {!mainImageLoaded && (
                <div className="absolute inset-0 bg-zinc-700 animate-pulse rounded-xl" />
              )}
              <img
                src={mainImage}
                alt="Room Image"
                loading="lazy"
                className={`w-full rounded-xl shadow-lg object-cover transition-opacity duration-500 ${
                  mainImageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setMainImageLoaded(true)}
              />

              <div
                onClick={() => setViewerIsOpen((prev) => !prev)}
                className="flex items-center size-12 backdrop-blur-md rounded-full absolute top-1 left-1 cursor-pointer group"
              >
                <img src={assets.fullViewIcon} alt="" className="invert" />
                <span className="invisible opacity-0 group-hover:visible group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 bg-zinc-700 text-white py-2 px-4 rounded-lg text-sm whitespace-nowrap">
                  {t("360view")}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
              {room?.images.length > 1 &&
                room.images.map((image, index) => (
                  <div key={index} className="relative w-full">
                    {!loadedImages[index] && (
                      <div className="absolute inset-0 bg-zinc-700 animate-pulse rounded-xl" />
                    )}
                    <img
                      onClick={() => setMainImage(image)}
                      src={image}
                      alt="Room Image"
                      loading="lazy"
                      onLoad={() =>
                        setLoadedImages((prev) => ({ ...prev, [index]: true }))
                      }
                      className={`w-full rounded-xl shadow-md object-cover cursor-pointer transition-opacity duration-500 ${
                        loadedImages[index] ? "opacity-100" : "opacity-0"
                      } ${
                        mainImage === image && "outline-3 outline-slate-400"
                      }`}
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* Room Highlights */}
          <div className="flex flex-col md:flex-row md:justify-between mt-10">
            <div className="flex flex-col">
              <h1 className="text-3xl md:text-4xl font-playfair text-white/70">
                {t("roomDetailsText")}
              </h1>
              <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                {room.amenities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-800"
                  >
                    <img
                      src={facilityIcons[item]}
                      alt={t(item)}
                      loading="lazy"
                      className="size-5 invert"
                    />
                    <p className="text-xs text-white/80">{t(item)}</p>
                  </div>
                ))}

                {room.specialAmenities.length > 0 &&
                  room.specialAmenities.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-800"
                    >
                      <img
                        src={facilityIcons[item]}
                        alt={t(item)}
                        loading="lazy"
                        className="size-5 invert"
                      />
                      <p className="text-xs text-white/80">{t(item)}</p>
                    </div>
                  ))}
              </div>
            </div>
            {/* Room Price */}
            <p className="text-2xl font-medium text-white/90">
              {room.pricePerNight}₺ / {t("night")}
            </p>
          </div>

          {/* Special Amenities Section */}
          {room.specialAmenityDescriptions && (
            <div className="bg-zinc-700/30 p-5 text-white/70 flex gap-5 items-center rounded mt-10">
              <img
                src={assets.badgeIcon}
                alt="Badge Icon"
                className="size-6 invert"
              />
              <p>Haremlik Selamlık: {room.specialAmenityDescriptions}</p>
            </div>
          )}

          {/* Room Specifications */}
          <div className="flex flex-col-reverse md:flex-row justify-around items-center mt-10">
            <div className="space-y-4">
            {roomCommonData.map((spec, index) => (
              <div key={index} className="flex items-center gap-2">
                <img
                  src={spec.icon}
                  alt={spec.title}
                  className="w-6.5 invert"
                />
                <div>
                  <p className="text-base text-gray-200">{spec.title}</p>
                  {/* <p className="text-gray-500">{spec.description}</p> */}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500">
            <p>
              {t(room.roomDescription)}
            </p>
          </div>
          </div>

          {/* Hosted By */}
          {/* <div className="flex flex-col items-start gap-4">
            <div className="flex gap-4">
              <img
                src={assets.randomUser}
                alt="Host"
                className="w-14 h-14 md:h-18 md:w-18 rounded-full"
              />
              <div className="flex flex-col items-start  gap-1">
                <p className="text-lg md:text-xl text-gray-300">
                  {t("managedBy")}
                </p>
                <div className="flex items-center mt-1">
                  <StarRating />
                  <p className="ml-2 text-white/50">50+ {t("evaluation")}</p>
                </div>
              </div>
            </div>
            <button className="px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer">
              {t("contact")}
            </button>
          </div> */}

          {/* 360 Viewer */}
          <AnimatePresence>
            {viewerIsOpen && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="relative w-full max-w-screen h-[90vh] bg-black rounded-lg shadow-lg overflow-hidden"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setViewerIsOpen(false)}
                    className="absolute top-2 right-2 z-10 text-white bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full"
                  >
                    <IoClose className="size-6" />
                  </button>

                  {/* 360° Panorama Viewer */}
                  <Room360View room={fullViewImage} />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    )
  );
};

export default RoomDetails;
