import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next"

const HotelCard = ({ room }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Link
      to={`/odalar/kategori/${room.category}`}
      onClick={() => scrollTo(0, 0)}
      key={room._id}
      className="relative max-w-70 w-full rounded-xl overflow-hidden bg-zinc-900/60 border-1 hover:border-white/70 transition duration-500 text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.15)]"
    >
      <img
        src={room.images[0]}
        alt="room-image"
        loading="lazy"
        className="transition-all object-cover duration-500 hover:scale-105"
      />

      <div className="p-4 pt-5">
        <div className="flex items-center justify-between">
          <p className="font-playfair text-xl font-medium text-gray-300">
            <span className="font-sour capitalize">
              {room.category} {t("roomsText")}
            </span>
          </p>
          {/* <div className="flex items-center gap-1">
            <img src={assets.starIconFilled} alt="star-icon" />
            {room.score}
          </div> */}
        </div>

        {/* <div className="flex items-center gap-1 text-sm">
          <img src={assets.locationIcon} alt="location-icon" />
          <span>{room.hotel.address}</span>
        </div> */}

        <div className="flex items-center justify-between mt-4">
          <p>
            <span className="text-xl text-gray-100">{room.pricePerNight}₺</span>{" "}
            / {t("night")}
          </p>
          <button
            onClick={() => navigate(`/odalar/kategori/${room.category}`)}
            className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-600 hover:text-white transition-all cursor-pointer"
          >
            {t("seeRoomsButton")}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
