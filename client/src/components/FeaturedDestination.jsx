/* eslint-disable no-unused-vars */
import React from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const FeaturedDestination = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const standartRoom = roomsDummyData.find(
    (room) => room.category === "standart"
  );
  const deluxeRoom = roomsDummyData.find((room) => room.category === "deluxe");
  const eliteRoom = roomsDummyData.find((room) => room.category === "elite");

  const selectedRooms = [standartRoom, deluxeRoom, eliteRoom].filter(Boolean);
  return (
    <motion.div
      className="your-first-component"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-zinc-800 py-20">
        <Title
          title={t("featuredRoomsTitle")}
          subTitle={t("featuredRoomsSubtitle")}
        />
        <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
          {selectedRooms.map((room, index) => (
            <HotelCard key={room._id} room={room} index={index} />
          ))}
        </div>

        <button
          onClick={() => {
            navigate("/odalar");
            scrollTo(0, 0);
          }}
          className="my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-zinc-800 text-white/50 hover:bg-gray-600 hover:text-white transition-all cursor-pointer"
        >
          {t("seeAllRoomsButtonText")}
        </button>
      </div>
    </motion.div>
  );
};

export default FeaturedDestination;
