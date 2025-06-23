/* eslint-disable no-unused-vars */
import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay,
    },
  },
});

const Services = () => {
  const { t } = useTranslation();

  const serviceItems = [
    {
      icon: assets.homeOutlinedIcon,
      title: t("servicesItem1"),
      subtitle: t("servicesItem1.1"),
    },
    {
      icon: assets.badgeOutlinedIcon,
      title: t("servicesItem2"),
      subtitle: t("servicesItem2.1"),
    },
    {
      icon: assets.locationOutlinedIcon,
      title: t("servicesItem3"),
      subtitle: t("servicesItem3.1"),
    },
    {
      icon: assets.heartOutlinedIcon,
      title: t("servicesItem4"),
      subtitle: t("servicesItem4.1"),
    },
    {
      icon: assets.smokeIcon,
      title: t("servicesItem5"),
      subtitle: t("servicesItem5.1"),
    },
    {
      icon: assets.smokeDetectorIcon,
      title: t("servicesItem6"),
      subtitle: t("servicesItem6.1"),
    },
    {
      icon: assets.tvIcon,
      title: t("servicesItem7"),
      subtitle: t("servicesItem7.1"),
    },
    {
      icon: assets.freeWifiIcon,
      title: t("servicesItem8"),
      subtitle: t("servicesItem8.1"),
    },
    {
      icon: assets.timeIcon,
      title: t("servicesItem9"),
      subtitle: t("servicesItem9.1"),
    },
    {
      icon: assets.bedIcon,
      title: t("servicesItem10"),
      subtitle: t("servicesItem10.1"),
    },
  ];

  return (
    <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32 bg-zinc-900 relative">
      <Title
        title={t("weWorkForYouTitle")}
        subTitle={t("weWorkForYouSubtitle")}
      />
      <div className="flex flex-col md:flex-row justify-around gap-8 items-center mt-20 flex-1">
        {[0, 1].map((col) => (
          <div key={col} className="flex flex-col gap-3">
            {serviceItems.slice(col * 5, col * 5 + 5).map((item, index) => {
              const globalIndex = col * 5 + index;
              return (
                <motion.div
                  key={`${item.title}-${globalIndex}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp(globalIndex * 0.15)}
                  className="flex gap-3 items-center group p-4 rounded-lg transition-all duration-300 hover:bg-zinc-800"
                >
                  <img
                    src={item.icon}
                    alt="icon"
                    loading="lazy"
                    className="w-13 invert transition-all duration-500 border border-black group-hover:p-3 p-1 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="text-gray-400">{item.title}</p>
                    <p className="text-gray-500 text-sm">{item.subtitle}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
