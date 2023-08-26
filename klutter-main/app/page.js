"use client";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ListSection from "./components/ListSection";

export default function Home() {
  const [showHero, setShowHero] = useState(true);
  useEffect(() => {
    setShowHero(false);
  });
  return (
    <main>
      {<Hero pressedCard={showHero} />}
      <ListSection setShowHero={setShowHero} />
      {/* <Appreciations /> */}
      <Footer />
    </main>
  );
}
