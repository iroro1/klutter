"use client";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ListSection from "./components/ListSection";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [showHero, setShowHero] = useState(true);
  useEffect(() => {
    setShowHero(false);
  });
  const [ref, inView] = useInView();
  console.log(inView);

  return (
    <motion.main
      animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
      initial={{ opacity: 0 }}
      className="duration-1000"
    >
      {<Hero pressedCard={showHero} />}
      <div>
        <ListSection setShowHero={setShowHero} />
      </div>
      {/* <Appreciations /> */}
      <Footer />
    </motion.main>
  );
}
