/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full pt-12 md:pt-16 lg:pt-18 h-screen relative">
      {/* Google Map */}
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.3512262331055!2d32.68989907646383!3d41.241615871318665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408355006c29a887%3A0x9b8125d6391f6846!2sKonak%20Piano%20Safranbolu!5e1!3m2!1str!2str!4v1748364295886!5m2!1str!2str"
        className="w-full h-2/3  border-none"
        // style={{ filter: "brightness(120%) grayscale(120%) invert(100%) " }}
        allowFullScreen
        loading="lazy"
      ></iframe>

      {/* Info Box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-1/6 md:bottom-1/4 left-1/2 -translate-x-1/2 bg-zinc-950 shadow-sm shadow-amber-300 rounded-xl p-6 w-[90%] max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border border-slate-700"
      >
        {/* Address */}
        <div className="flex items-center lg:justify-center gap-4">
          <div className="bg-zinc-800 p-2 rounded-full">
            <img
              src={assets.addressIcon}
              alt="location"
              className="size-12 invert"
            />
          </div>
          <div>
            <h4 className="text-gray-100 font-semibold mb-1 uppercase">
              {t("address")}
            </h4>
            <p className="text-sm text-gray-200">
              Karaali, Akpınar Sokak Numara 43, 78600 <br />
              <strong>Safranbolu/Karabük-Türkiye</strong>
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center lg:justify-center gap-4">
          <div className="bg-zinc-800 p-3 rounded-full">
            <img
              src={assets.telephone}
              alt="phone"
              className="size-10 invert"
            />
          </div>
          <div>
            <h4 className="font-semibold text-gray-100 mb-1 uppercase">
              {t("phone")}
            </h4>
            <p className="text-sm text-gray-200 leading-tight">
              <a
                href="tel:+905447990039"
                className="text-base text-gray-200 hover:underline"
              >
                +90 544 799 0039
              </a>{" "}
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center lg:justify-center gap-4">
          <div className="bg-zinc-800 p-3 rounded-full">
            <img src={assets.mail} alt="email" className="size-10 invert" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-100 mb-1 uppercase">
              E-MAIL
            </h4>
            <a
              href="mailto:piyanos@hotmail.com"
              className="text-base text-gray-200 hover:underline"
            >
              konakpianootel@gmail.com
            </a>
          </div>
        </div>
      </motion.div>

      {/* Contact Paragraph */}
      <div className="md:pt-30 pt-40 max-w-6xl text-center mx-auto px-5">
        <p className="font-sour text-slate-300 lg:text-4xl md:text-3xl text-2xl ">
          {t("contactPageDescription")}
        </p>
      </div>
    </section>
  );
};

export default Contact;
