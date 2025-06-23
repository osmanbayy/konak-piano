/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { delay: 0.2 } },
};

const ContactModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="bg-zinc-800 rounded-xl p-8 flex flex-col items-center gap-6 max-w-sm w-full mx-4 relative"
        variants={modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-100 hover:text-gray-700 text-2xl cursor-pointer"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-gray-100">{t("contactUs")}</h2>

        <div className="flex flex-col items-center gap-2">
          <a
            href="tel:+905447990039"
            className="text-lg text-gray-200 hover:underline"
          >
            📞 +90 544 799 0039
          </a>{" "}
          <a
            href="mailto:piyanos@hotmail.com"
            className="text-lg text-gray-200 hover:underline"
          >
            📧 konakpianootel@gmail.com
          </a>{" "}
        </div>

        <Link
          to="/iletisim"
          className="bg-amber-800 text-white px-4 py-1.5 md:px-6 md:py-3 rounded-full text-sm hover:bg-amber-900 transition-all"
          onClick={onClose}
        >
         {t("contactModalButton")}
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ContactModal;
