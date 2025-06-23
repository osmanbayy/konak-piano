import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import { assets } from "./assets/assets";
import { useTranslation } from "react-i18next";
import AllRoomsSkeleton from "./components/skeletons/AllRoomsSkeleton";
import RoomDetailsSkeleton from "./components/skeletons/RoomDetailsSkeleton";
import AboutSkeleton from "./components/skeletons/AboutSkeleton";
import GallerySkeleton from "./components/skeletons/GallerySkeleton";
import RoomsByCategorySkeleton from "./components/skeletons/RoomsByCategorySkeleton";
import HeroSkeleton from "./components/skeletons/HeroSkeleton";
import ContactSkeleton from "./components/skeletons/ContactSkeleton";

const Home = lazy(() => import("./pages/Home"));
const Gallery = lazy(() => import("./pages/Gallery"));
const AllRooms = lazy(() => import("./pages/AllRooms"));
const RoomDetails = lazy(() => import("./pages/RoomDetails"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const RoomsByCategory = lazy(() => import("./pages/RoomsByCategory"));

const App = () => {
  const location = useLocation();
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div className="min-h-[70vh]">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <Suspense fallback={<HeroSkeleton />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/odalar"
              element={
                <Suspense fallback={<AllRoomsSkeleton />}>
                  <AllRooms />
                </Suspense>
              }
            />
            <Route
              path="/odalar/kategori/:category"
              element={
                <Suspense fallback={<RoomsByCategorySkeleton />}>
                  <RoomsByCategory />
                </Suspense>
              }
            />
            <Route
              path="/odalar/:id"
              element={
                <Suspense fallback={<RoomDetailsSkeleton />}>
                  <RoomDetails />
                </Suspense>
              }
            />
            <Route
              path="/hakkimizda"
              element={
                <Suspense fallback={<AboutSkeleton />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/iletisim"
              element={
                <Suspense fallback={<ContactSkeleton />}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="/galeri"
              element={
                <Suspense fallback={<GallerySkeleton />}>
                  <Gallery />
                </Suspense>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>

      <a
        href="https://wa.me/905447990039"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 md:bottom-10 md:right-10 z-40 flex items-center gap-2"
      >
        {/* Tooltip sadece ikonun hover'ında görünür */}
        <div className="relative group">
          <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 bg-green-500 text-white py-2 px-4 rounded-lg text-sm whitespace-nowrap">
            {t("contactWp")}
          </span>

          <div className="p-1 md:p-3 w-14 h-14 md:w-20 md:h-20 backdrop-blur-md rounded-full flex justify-center items-center bg-white/20">
            <img
              src={assets.whatsappIcon}
              alt="WhatsApp ile İletişime Geçin"
              className="w-10 h-10 md:w-14 md:h-14 transition-all duration-300 group-hover:rotate-45"
            />
          </div>
        </div>
      </a>

      <Footer />
    </>
  );
};

export default App;
