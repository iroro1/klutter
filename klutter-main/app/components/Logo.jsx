import Link from "next/link";
import React from "react";
import klutter from "../assets/images/klutter.png";
import Image from "next/image";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="text-[#fff] font-[500] text-[22px] leading-[20px]"
    >
      {/* <Image src={klutter} className="max-h-[20px] max-w-[80px]" /> */}
      Klutt<span className="text-[#ccc] font-[100]">er</span>
      <p className="text-[9px] text-[#ccc]">Dont need it , Dont Keep It !</p>
    </Link>
  );
};

export default Logo;
