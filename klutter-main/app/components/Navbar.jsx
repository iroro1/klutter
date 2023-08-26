"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { ClickAwayListener } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [dark, setDark] = useState(false);
  console.log(props);
  const { showHero, setShowHero } = props;

  const listenScrollEvent = (e) => {
    if (window.scrollY > 400) {
      setDark(true);
    } else {
      setDark(false);
    }
  };
  useEffect(() => {
    listenScrollEvent();
  });

  console.log(dark);
  return (
    <div
      className={`min-w-full bg-gradient-to-r  h-[66px] fixed top-0 left-0 ${
        showHero
          ? "from-[#040506] to-[#2716274a]"
          : "from-[#040506] to-[#2716274a]"
      } z-[999]`}
    >
      <div className="w-[90%] mx-auto lg:[1440px] min-h-full flex items-center justify-between text-[12px] relative">
        <Logo />

        {!showHero && (
          <span
            onClick={() => setShowHero(true)}
            className="text-[#f90] text-[14px] font-[400] underline underline-offset-2 cursor-pointer"
          >
            You're in shopping mood. Tap to close
          </span>
        )}
        <div className="text-[#eee] hidden md:flex gap-4 items-center">
          {showHero ? (
            <>
              <Link href={"#findItems"}>Find Items</Link>
              <Link href={"#list"}>List Items</Link>
              <Link
                className="bg-[#f90] text-[#000] text-[12px] p-2 py-1 rounded-md"
                href={"#comingSoon"}
              >
                Download Apps
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <button
                className="bg-[#f90] w-[254px] text-[#000] text-[14px] p-2 rounded-md "
                onClick={() => setShowHero(false)}
              >
                Anonymous Shopper
              </button>
              <div className="text-[#f90] bg-white rounded-full font-[700] flex items-center justify-center h-[54px] w-[54px]">
                <span>AS</span>
              </div>
            </div>
          )}
        </div>

        <div className="md:hidden">
          {showMenu ? (
            <MenuOpenIcon
              onClick={() => setShowMenu(!showMenu)}
              className="text-[#fff] cursor-pointer"
            />
          ) : (
            <MenuIcon
              onClick={() => setShowMenu(!showMenu)}
              className="text-[#fff] cursor-pointer"
            />
          )}
        </div>
        {showMenu && (
          <ClickAwayListener onClickAway={() => setShowMenu(false)}>
            <div className="bg-[#fff] min-h-[150px] min-w-[200px] absolute right-1 top-[65px] shadow-md border border-[#eee] rounded-sm flex flex-col p-3">
              <Link
                onClick={() => setShowMenu(false)}
                className="py-3 px-2"
                href={"#findItems"}
              >
                Find Items
              </Link>
              <Link
                onClick={() => setShowMenu(false)}
                className="py-3 px-2"
                href={"#list"}
              >
                List Items
              </Link>
              <Link
                className="bg-[#f90] text-[#151f4c] py-3 px-2 rounded-md"
                href={"#comingSoon"}
              >
                Download Apps
              </Link>
            </div>
          </ClickAwayListener>
        )}
      </div>
    </div>
  );
};

export default Navbar;
