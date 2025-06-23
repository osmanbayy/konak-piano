import React from "react";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";

const Lightbox = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
      <button onClick={onClose} className="absolute top-6 right-6 text-white text-3xl cursor-pointer">
        <IoClose />
      </button>

      <button onClick={onPrev} className="absolute left-4 text-white text-4xl p-4 cursor-pointer">
        <IoChevronBack />
      </button>

      <img
        src={images[currentIndex]}
        alt={`lightbox-${currentIndex}`}
        className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl"
      />

      <button onClick={onNext} className="absolute right-4 text-white text-4xl p-4 cursor-pointer">
        <IoChevronForward />
      </button>

      {/* Counter */}
      <div className="absolute bottom-6 text-white text-sm tracking-wider">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};
export default Lightbox;