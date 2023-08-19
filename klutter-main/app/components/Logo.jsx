import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <a href={"/"} className="text-[#fff] font-[500] text-[22px] leading-[20px]">
      Klutt<span className="text-[#ccc] font-[100]">er</span>
      <p className="text-[9px] text-[#ccc]">Dont need it , Dont Keep It !</p>
    </a>
  );
};

export default Logo;
