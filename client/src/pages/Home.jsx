import React, { lazy, Suspense } from "react";
import Hero from "../components/Hero";
import LazyLoadWrapper from "../components/LazyLoadWrapper";
import HeroSkeleton from "../components/skeletons/HeroSkeleton";

const FeaturedDestination = lazy(() =>
  import("../components/FeaturedDestination")
);
// import ExclusiveOffers from "../components/ExclusiveOffers";
const Testimonial = lazy(() => import("../components/Testimonial"));
const Services = lazy(() => import("../components/Services"));

const Home = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<HeroSkeleton />}>
       

        {/* <ExclusiveOffers /> */}

        <LazyLoadWrapper>
          <Services />
        </LazyLoadWrapper>

         <LazyLoadWrapper>
          <FeaturedDestination />
        </LazyLoadWrapper>

        <LazyLoadWrapper>
          <Testimonial />
        </LazyLoadWrapper>
      </Suspense>
    </>
  );
};

export default Home;
