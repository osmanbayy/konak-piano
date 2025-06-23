/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";
// Using AnimatePresence for transition when filtered
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const CheckBox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm text-white">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm text-white">
      <input
        type="radio"
        name="sortOption"
        checked={selected}
        onChange={() => onChange(label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const AllRooms = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const [openFilters, setOpenFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState("");

  const categories = [t("standart"), t("deluxe"), t("elite")];
  const sortOptions = [t("sort_asc"), t("sort_desc")];

  const handleCategoryChange = (checked, label) => {
    if (checked) {
      setSelectedCategories((prev) => [...prev, label]);
    } else {
      setSelectedCategories((prev) =>
        prev.filter((category) => category !== label)
      );
    }
  };

  const handleSortChange = (label) => {
    setSelectedSortOption(label);
  };

  const filteredRooms = roomsDummyData
    .filter((room) => {
      if (selectedCategories.length > 0) {
        const isCategoryMatch = selectedCategories.some((category) =>
          room.category.toLowerCase().includes(category.toLowerCase())
        );
        if (!isCategoryMatch) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (selectedSortOption === t("sort_asc")) {
        return a.pricePerNight - b.pricePerNight;
      } else if (selectedSortOption === t("sort_desc")) {
        return b.pricePerNight - a.pricePerNight;
      } else {
        return 0;
      }
    });

  return (
    <motion.div
      className="bg-zinc-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1.6, ease: "easeInOut" }}
    >
      <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Left Side */}
        <div className="w-full lg:w-auto">
          <div className="flex flex-col items-start text-left mb-8 lg:mb-0">
            <h1 className="font-sour text-4xl md:text-[40px] text-gray-100">
              {t("allRooms")}
            </h1>
            <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
              {t("featuredRoomsSubtitle")}
            </p>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room) => (
                <motion.div
                  layout
                  key={room._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex flex-col md:flex-row items-center px-5 py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0"
                >
                  <img
                    onClick={() => {
                      navigate(`/odalar/${room._id}`);
                      scrollTo(0, 0);
                    }}
                    src={room.images[0]}
                    alt="hotel-image"
                    loading="lazy"
                    title="Oda Detaylarını Görüntüle"
                    className="hover:scale-101 transition duration-300 max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
                  />
                  <div className="md:w-1/2 flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <p className="text-gray-100">{room.hotel.name}</p>
                      <p className="bg-orange-500 capitalize rounded-full px-3 py-1 text-white text-sm">
                        {t(room.category)}
                      </p>
                    </div>
                    <p className="text-white/70 text-xl">
                      {t(room.roomName)}
                      <span className="text-xl text-yellow-500 ml-2">
                        {room.roomNo}
                      </span>
                    </p>
                    <p
                      onClick={() => {
                        navigate(`/odalar/${room._id}`);
                        scrollTo(0, 0);
                      }}
                      className="text-gray-300 text-2xl md:text-3xl font-funnel cursor-pointer"
                    >
                      {t(room.roomType)}
                    </p>
                    <div className="flex items-center">
                      {/* Burada yıldız vardı */}
                      {/* <StarRating />
                      <p className="ml-2 text-white/50">50+ {t("evaluation")}</p> */}
                    </div>
                    <div className="flex flex-wrap items-center mt-3 mb-6 gap-2">
                      {room.amenities.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-center items-center gap-2 px-3 py-2 rounded-lg bg-gray-600/70"
                        >
                          <img
                            src={facilityIcons[item]}
                            alt={item}
                            className="w-5 h-5 invert"
                          />
                          <p className="text-xs text-white/70">{t(item)}</p>
                        </div>
                      ))}
                      {room.specialAmenities.length > 0 &&
                        room.specialAmenities.map((item, index) => (
                          <div key={index} className="relative group">
                            <div
                              key={index}
                              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-700 cursor-pointer"
                            >
                              <img
                                src={facilityIcons[item]}
                                alt={t(item)}
                                loading="lazy"
                                className="size-5 invert"
                              />
                              <p className="text-xs text-white/80">{t(item)}</p>
                            </div>
                            {/* Tooltip */}
                            {room.specialAmenityDescriptions && (
                              <div className="absolute w-[250px] md:w-[500px] top-full left-1/2 lg:-translate-x-1/2 mt-2 bg-black text-white text-xs p-5 rounded-md opacity-0 translate-y-2 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-in-out z-30 shadow-lg pointer-events-none">
                                {room.specialAmenityDescriptions}
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                    <p className="text-xl font-medium text-gray-100">
                      {room.pricePerNight}₺ / {t("night")}
                    </p>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.p
                key="no-rooms-message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-10 text-center text-gray-500"
              >
                {t("roomsErrorMessage")}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Filters on Right Side*/}
        <div className="bg-zinc-800 w-full md:w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16">
          <div
            className={` flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${
              openFilters && "border-b"
            }`}
          >
            <p className="text-base font-medium text-gray-200">
              {t("filtering")}
            </p>
            <div className="text-xs cursor-pointer">
              <span
                onClick={() => setOpenFilters(!openFilters)}
                className="lg:hidden text-white/70"
              >
                {openFilters ? t("hide") : t("show")}
              </span>
              <span
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedSortOption("");
                }}
                className="ml-4 text-white/70"
              >
                {t("clear")}
              </span>
            </div>
          </div>

          <div
            className={`
              overflow-hidden
              transition-[max-height] ease-in-out duration-1000
              ${openFilters ? "max-h-96" : "max-h-0"}
              lg:max-h-none
            `}
          >
            <div className="px-5 pt-5">
              <p className="font-medium text-gray-200 pb-2">{t("category")}</p>
              {categories.map((category, index) => (
                <CheckBox
                  key={index}
                  label={category}
                  selected={selectedCategories.includes(category)}
                  onChange={handleCategoryChange}
                />
              ))}
            </div>

            <div className="px-5 pt-5 pb-7">
              <p className="font-medium text-gray-200 pb-2">{t("sort")}</p>
              {sortOptions.map((option, index) => (
                <RadioButton
                  key={index}
                  label={option}
                  selected={selectedSortOption === option}
                  onChange={handleSortChange}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AllRooms;
