"use client";

import AboutApp from "./AboutApp";
import AppFeatures from "./AppFeatures";
import Footer from "./Footer";
import Hero from "./Hero";
import Insights from "./Insights";
import Navbar from "./Navbar";

export default function HomePageElements() {
  return (
    <div className="w-full overflow-hidden text-black bg-gray-100">
      <Navbar />
      <div className="relative">
        <Hero />
        <div className="gradient-03 z-0" />
        <AboutApp />
      </div>
      <div className="relative">
        <AppFeatures />
        <div className="gradient-04 z-0" />
        <Insights />
      </div>
      <Footer />
    </div>
  );
}
