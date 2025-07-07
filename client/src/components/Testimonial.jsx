import React, { useState, useRef, useEffect } from "react";
import Title from "./Title";
import { testimonials } from "../assets/assets";
import StarRating from "./StarRating";
import { useTranslation} from "react-i18next";

const Testimonial = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-zinc-900 pt-10 pb-32">
      <Title
        title={t("testimonialTitle")}
        subTitle={t("testimonialSubtitle")}
      />

      <div className="flex flex-wrap justify-center gap-6 mt-20">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isShortened, setIsShortened] = useState(true);
  const [shouldShowButton, setShouldShowButton] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  const { t } = useTranslation();

  useEffect(() => {
    if (contentRef.current) {
      //Control the content and visible heights of the comment box
      const height = contentRef.current.scrollHeight;
      setContentHeight(height);
      if (height > 76.8) { // 4.8rem = 76.8px
        setShouldShowButton(true);
      }
    }
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    setIsShortened(!isShortened);
  };

  return (
    <div className="bg-zinc-800/70 p-6 rounded-xl shadow max-w-xs">
      <div className="flex items-center gap-3">
        <img
          className="w-12 h-12 rounded-full"
          loading="lazy"
          src={testimonial.image}
          alt={testimonial.name}
        />
        <div>
          <p className="font-playfair text-white/70 font-semibold text-xl">{testimonial.name}</p>
          <p className="text-gray-500">{testimonial.address}</p>
        </div>
      </div>

      <div className="flex items-center gap-1 mt-4">
        <StarRating />
      </div>

      {/* Comments Section */}
      <div className="text-gray-500 mt-4">
        <p
          ref={contentRef}
          className="text-sm transition-all duration-500 ease-in-out overflow-hidden"
          style={{
            maxHeight: isExpanded ? `${contentHeight}px` : "4.8rem",
          }}
        >
          "{testimonial.review}"
        </p>

        
        {shouldShowButton && (
          <button
            className="text-indigo-500 mt-2 hover:underline focus:outline-none transition-colors duration-200"
            onClick={toggleExpanded}
          >
            {isShortened ? t("readMoreButtonText") : t("readLessButtonText")}
          </button>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
