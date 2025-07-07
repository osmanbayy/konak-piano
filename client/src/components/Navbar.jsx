/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import ContactModal from "./ContactModal";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { i18n, t } = useTranslation();

  const navLinks = [
    { name: t("homePage"), path: "/"},
    { name: t("rooms"), path: "/odalar"},
    { name: t("contact"), path: "/iletisim"},
    { name: t("aboutUs"), path: "/hakkimizda"},
    { name: t("gallery"), path: "/galeri"},
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const location = useLocation();

  const langDropdownRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangDropdownOpen(false);
  };

  const currentLang = (i18n.language || "tr").slice(0, 2);

  // change navbar style based on location
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10 || location.pathname !== "/");
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(e.target)
      ) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 bg-transparent backdrop-blur-md w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
          isScrolled
            ? "bg-zinc-800 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
            : "py-4 md:py-6"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={() => scrollTo(0,0)}>
          <p
            className={`logo text-xl md:text-2xl lg:text-3xl whitespace-nowrap text-white ${
              isScrolled ? "" : ""
            }`}
          >
            Konak Piano
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              className={`group flex flex-col gap-0.5 ${
                isScrolled ? "text-gray-100" : "text-white"
              }`}
            >
              {link.name}
              <div
                className={`${
                  isScrolled ? "bg-gray-700" : "bg-white"
                } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
              />
            </a>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Switch Button */}
          <div className="relative" ref={langDropdownRef}>
            <button
              onClick={() => setLangDropdownOpen((prev) => !prev)}
              className=" flex items-center gap-1 px-3 py-1 rounded text-white/80 bg-transparent hover:text-rose-500 cursor-pointer transition-all duration-300"
            >
              {currentLang.toUpperCase()}{" "}
              <IoIosArrowDown
                className={`${
                  langDropdownOpen ? "rotate-180" : ""
                } transition-all duration-500`}
              />
            </button>

            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-0 mt-2 w-32 bg-zinc-900 text-white/70 rounded shadow overflow-hidden z-40 "
                >
                  <button
                    onClick={() => changeLanguage("tr")}
                    className="block w-full px-4 py-3 hover:bg-zinc-700 text-left cursor-pointer"
                  >
                    <small>TR</small> Türkçe
                  </button>
                  <button
                    onClick={() => changeLanguage("en")}
                    className="block w-full px-4 py-3 hover:bg-zinc-700 text-left cursor-pointer"
                  >
                    <small>EN</small> English
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => setIsContactModalOpen(true)}
            className="bg-rose-700 border border-rose-700 hover:bg-transparent text-white px-8 py-2.5 rounded-full ml-4 transition-all cursor-pointer hover:scale-105"
          >
            {t("getInfoButton")}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Language Switch Button */}
          <div className="relative" ref={langDropdownRef}>
            <button
              onClick={() => setLangDropdownOpen((prev) => !prev)}
              className=" flex items-center gap-1 px-3 py-1 rounded text-white/80 bg-transparent hover:bg-gray-600 cursor-pointer"
            >
              {currentLang.toUpperCase()}{" "}
              <IoIosArrowDown
                className={`${
                  langDropdownOpen ? "rotate-180" : ""
                } transition-all duration-500`}
              />
            </button>

            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-0 mt-2 w-32 bg-zinc-900 text-white/70 rounded shadow overflow-hidden z-40 "
                >
                  <button
                    onClick={() => changeLanguage("tr")}
                    className="block w-full px-4 py-3 hover:bg-zinc-700 text-center cursor-pointer"
                  >
                    <small>TR</small> Türkçe
                  </button>
                  <button
                    onClick={() => changeLanguage("en")}
                    className="block w-full px-4 py-3 hover:bg-zinc-700 text-center cursor-pointer"
                  >
                    <small>EN</small> English
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <img
            src={assets.menuIcon}
            alt="menu-icon"
            // className={`${isScrolled && "invert"} h-4`}
            className={`h-4`}
            onClick={() => setIsMenuOpen(true)}
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-zinc-800/95 text-base flex flex-col lg:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 z-50 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 invert"
            onClick={() => setIsMenuOpen(false)}
          >
            <img src={assets.closeMenu} alt="close-menu" className="h-8" />
          </button>

          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              className="text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={() => {
              setIsMenuOpen(false);
              setIsContactModalOpen(true);
            }}
            className="bg-black/50 text-white px-8 py-2.5 rounded-full transition-all duration-500"
          >
            Bilgi Alın
          </button>
        </div>
      </nav>
      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};
export default Navbar;
