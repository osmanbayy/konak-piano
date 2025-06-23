import React from "react";

const Title = ({ title, subTitle, align, font }) => {
  return (
    <div
      className={`${
        align === "left" && "md:items-start md:text-left"
      } flex flex-col justify-center items-center text-center`}
    >
      <h1
        className={`text-4xl md:text-[40px] text-neutral-200 ${
          font || "font-sour"
        }`}
      >
        {title}
      </h1>
      <p className={`text-sm md:text-base font-sour text-neutral-400 mt-2 max-w-180`}>
        {subTitle}
      </p>
    </div>
  );
};

export default Title;
