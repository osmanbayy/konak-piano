/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import footerLogo from "/logo.png";
import { useTranslation } from "react-i18next";
import PrivacyPolicy from "./PrivacyPolicy";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

const Footer = () => {
  const { t } = useTranslation();
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <footer className="bg-gradient-to-b from-zinc-900 to-gray-800 px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-20 border-b border-white pb-6">
        <div className="md:max-w-1/2 flex flex-col lg:flex-row justify-between flex-1 items-center lg:gap-7 mx-auto md:mx-0">
          <img
            src={footerLogo}
            alt="footer logo"
            className="w-auto h-[200px] invert"
          />
          <p className="text-sm">{t("footerLogoText")}</p>
        </div>
        <div className=" flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-slate-400">
              {t("enterprise")}
            </h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/">{t("homePage")}</a>
              </li>
              <li>
                <a href="/hakkimizda">{t("aboutUs")}</a>
              </li>
              <li>
                <a href="/iletisim">{t("address")}</a>
              </li>
              <li className="cursor-pointer" onClick={() => setIsPrivacyOpen(true)}>
                <a>{t("privacyPolicy")}</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-slate-400">
              {t("contactUs")}
            </h2>
            <div className="text-sm space-y-2">
              <a href="tel:+905447990039" className="block">
                +90 544 799 0039
              </a>
              <a href="mailto:piyanos@hotmail.com" className="block">
                konakpianootel@gmail.com
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/pianobutik_otel?igsh=eGYxYzl4Y3U3YWl6"
                className="block"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4  text-white text-center text-xs md:text-sm pb-5">
        Copyright 2024 © Konak Piano. All Rights Reserved.
      </p>

      {/* Modal */}
      <AnimatePresence>
        {isPrivacyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-transparent backdrop-blur-lg bg-opacity-50 z-50 flex justify-center items-center px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-black/50 max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-lg p-6 relative"
            >
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="absolute top-3 right-3 text-white text-xl font-bold cursor-pointer"
              >
                <IoClose className="size-10" />
              </button>
              <PrivacyPolicy />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
