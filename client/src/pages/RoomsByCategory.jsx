/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const RoomsByCategory = () => {
  const { t } = useTranslation();
  const { category } = useParams();
  const navigate = useNavigate();

  const filteredRooms = roomsDummyData.filter(
    (room) => room.category?.toLowerCase() === category?.toLowerCase()
  );

  // Function for category navigation buttons for UX
  const getNavigationButtons = () => {
    const currentCategory = category?.toLowerCase();
    
    if (currentCategory === 'standart') {
      return [
        { name: 'deluxe', label: `Deluxe ${t('roomsText')}`, path: '/odalar/kategori/deluxe' },
        { name: 'elite', label: `Elite ${t('roomsText')}`, path: '/odalar/kategori/elite' }
      ];
    } else if (currentCategory === 'deluxe') {
      return [
        { name: 'standart', label: `Standart ${t('roomsText')}`, path: '/odalar/kategori/standart' },
        { name: 'elite', label: `Elite ${t('roomsText')}`, path: '/odalar/kategori/elite' }
      ];
    } else if (currentCategory === 'elite') {
      return [
        { name: 'standart', label: `Standart ${t('roomsText')}`, path: '/odalar/kategori/standart' },
        { name: 'deluxe', label: `Deluxe ${t('roomsText')}`, path: '/odalar/kategori/deluxe' }
      ];
    }
    return [];
  };

  const navigationButtons = getNavigationButtons();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="flex flex-col bg-zinc-900 lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
        <div>
          <div className="flex flex-col items-start text-left">
            <h1 className="font-sour text-4xl md:text-[40px] text-gray-100">
              <span className="capitalize font-sour ">{category}</span>{" "}
              {t("rooms")}
            </h1>
            <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
              {t("featuredRoomsSubtitle")}
            </p>
          </div>

          {filteredRooms.length > 0 ? (
            filteredRooms.map((room) => (
              <div
                key={room._id}
                className="flex flex-col md:flex-row items-center px-5 py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0"
              >
                <img
                  onClick={() => {
                    navigate(`/odalar/${room._id}`);
                    scrollTo(0, 0);
                  }}
                  src={room.images[0]}
                  alt="hotel-image"
                  title="Oda Detaylarını Görüntüle"
                  className="max-h-65 w-88 h-88 rounded-xl shadow-lg object-cover cursor-pointer"
                />
                <div className="w-full flex flex-col gap-2">
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
                    className="text-gray-200 text-2xl md:text-3xl font-funnel cursor-pointer"
                  >
                    {t(room.roomType)}
                  </p>
                  {/* <div className="flex items-center">
                    <StarRating />
                    <p className="ml-2 text-gray-400">50+ {t("evaluation")}</p>
                  </div> */}
                  {/* <div className=" flex items-center gap-1 text-gray-500 mt-2 text-sm">
                    <img src={assets.locationIcon} alt="location-icon" />
                    <span>{room.hotel.address}</span>
                  </div> */}
                  <div className="flex flex-wrap items-center mt-3 mb-6 gap-2">
                    {room.amenities.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10"
                      >
                        <img
                          src={facilityIcons[item]}
                          alt={t(item)}
                          className="w-5 h-5 invert"
                        />
                        <p className="text-xs text-white/70">{t(item)}</p>
                      </div>
                    ))}
                    {room.specialAmenities.length > 0 &&
                      room.specialAmenities.map((item, index) => (
                        <div className="relative group">
                          <div
                            key={index}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-600 cursor-pointer"
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
                            <div
                              className={`absolute w-auto md:w-[500px] top-full left-1/2 lg:-translate-x-1/2 mt-2 bg-black text-white text-xs p-5 rounded-md opacity-0 translate-y-2 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-in-out z-30 shadow-lg pointer-events-none`}
                            >
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
              </div>
            ))
          ) : (
            <p className="mt-10 text-center text-gray-100">
              {t("roomErrorMessage")}
            </p>
          )}

          {/* Kategori Navigasyon Butonları */}
          {navigationButtons.length > 0 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-16 mb-20">
              {navigationButtons.map((button, index) => (
                <motion.button
                  key={button.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => {
                    navigate(button.path);
                    scrollTo(0, 0);
                  }}
                  className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-amber-800 to-amber-800 hover:from-rose-600 hover:to-rose-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  <span className="text-lg">{button.label}</span>
                  <FaArrowRight className="text-sm" />
                </motion.button>
              ))}
            </div>
          )}
        </div>
        {/* <div className="w-60 h-60 bg-rose-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consectetur aliquid harum fugit omnis repellat eius adipisci aliquam, dolorum, culpa itaque quo beatae atque perspiciatis suscipit officiis nesciunt, rerum minus autem. Nobis repudiandae sit asperiores! Quia possimus voluptates sed fugiat sit nostrum animi, minus facere nemo nulla esse, nobis culpa.
        </div> */}
      </div>
    </motion.div>
  );
};

export default RoomsByCategory;
