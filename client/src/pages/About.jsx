/* eslint-disable no-unused-vars */
import React from "react";
import aboutUsPhoto from "../assets/img6.jpg";
import aboutUsPhoto2 from "../assets/img7.jpg";
import Title from "../components/Title";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="pt-20 flex flex-col px-5 md:px-15 bg-zinc-900">
        <div className="w-full h-[50vh]">
          <img
            src={aboutUsPhoto}
            alt="Hakkımızda Görseli"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="text-center px-6 md:px-20 mt-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3.8, ease: "easeInOut" }}
          >
            <Title title={t("aboutUs")} subTitle={t("aboutUsSubtitle")} />
          </motion.div>
        </div>

        {/* İki Sütunlu Yazı */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 px-6 md:px-20 py-16 text-gray-700 leading-6">
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 150 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          >
            <div className="flex flex-col gap-3">
              <p className="text-white/70">{t("aboutPageText1")}</p>
              <p className="text-white/70">{t("aboutPageText2")}</p>
              <p className="text-white/70">{t("aboutPageText3")}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -150 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          >
            <div className="flex flex-col gap-3">
              <p className="text-white/70">{t("aboutPageText4")}</p>
              <p className="text-white/70">{t("aboutPageText5")}</p>
            </div>
          </motion.div>
        </div>

        {/* Alt Büyük Görsel */}
        <div className="w-full h-[30vh]">
          <img
            src={aboutUsPhoto2}
            alt="Alt Görsel"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Alt İki Sütunlu Yazı */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 py-16 text-gray-700 leading-8">
          <div>
            <p className="text-white/70">{t("aboutPageText6")}</p>
          </div>
          <div>
            <p className="text-white/70">{t("aboutPageText7")}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
