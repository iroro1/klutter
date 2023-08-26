"use client";
import { useContext, useEffect, useState } from "react";
import StoreContext from "../context/StoreContext";
import Navbar from "./Navbar";

const Hero = ({ pressedCard }) => {
  const [showHero, setShowHero] = useState(true);
  const ctx = useContext(StoreContext);
  console.log(pressedCard, ctx);

  return (
    <div
      className={
        showHero
          ? "min-h-[500px] relative bgImage"
          : "min-h-[66px] relative bgImage "
      }
    >
      <Navbar showHero={showHero} setShowHero={setShowHero} />
      {showHero && (
        <div className="min-h-[500px]  bg-gradient-to-r from-[#040506] to-[#2716274a] z-10 flex items-center">
          <div className="container flex-col justify-start items-center ">
            <h1 className="text-[#fff] font-[500] text-[40px] mt-[50px] md:text-[54px] leading-[54px]">
              Buy and Sell <br />
              <span className="text-[#F90] font-[700]">Pre-Loved</span> Items
            </h1>
            <p className="text-[16px] font-[400] text-[#ccc] mt-5 max-w-[500px] mb-[42px]">
              Buying and selling pre-loved household materials made easy.
              Whether you're looking to give a new home to your gently used
              items or searching for affordable and unique pieces to refresh
              your living space
            </p>

            <button
              className="bg-[#f90] text-[#000] text-[14px] p-2 py-2 rounded-md "
              onClick={() => setShowHero(false)}
            >
              Buy Item
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
