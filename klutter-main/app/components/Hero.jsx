import React from "react";

// https://plus.unsplash.com/premium_photo-1673548916754-aefad0c0955a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80

const Hero = () => {
  return (
    <div className="min-h-[500px] bg-slate-100 bg-gradient-to-r from-[#333333] to-blue-950 pt-[80px]">
      <div className="container flex justify-center items-center min-h-[400px]">
        <h1 className="text-[#fff] font-[500] text-[52px] leading-[30px]">
          Klutt<span className="text-[#ccc] font-[100]">er</span>
          <p className="text-[20px] text-[#ccc] mt-5">
            Unveil a Realm of Complimentary Delights: Your Definitive Stop for
            Free Goodies!
          </p>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
