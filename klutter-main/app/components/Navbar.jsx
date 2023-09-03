"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Logo from "./Logo";
import { ClickAwayListener } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { motion } from "framer-motion";
import { AppCtx } from "../context/StoreContext";

const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [dark, setDark] = useState(false);
  console.log(props);
  const { showHero, setShowHero } = props;
  const ctx = useContext(AppCtx);
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
    <motion.div
      initial={{
        background: "linear-gradient(to right, #040506, #2716274a)",
      }}
      animate={{
        background: "linear-gradient(to right, #040506, #2716274a)",
      }}
      className={`min-w-full bg-gradient-to-r  h-[66px] fixed top-0 left-0 z-[999]`}
    >
      <div className="w-[90%] mx-auto lg:[1440px] min-h-full flex items-center justify-between text-[12px] relative">
        <Logo />

        {!showHero && (
          <span
            onClick={() => {
              setShowHero(true);
              ctx.setStore({ ...ctx.store, showHero: false });
            }}
            className="text-[#f90] text-[12px] md:text-[14px] font-[400] underline underline-offset-2 cursor-pointer"
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

              <div className="flex items-center gap-3 mt-4">
                <button
                  className="bg-[#f90] w-[200px] text-[#000] text-[14px] p-2 rounded-md "
                  onClick={() => setShowHero(false)}
                >
                  Anonymous Shopper
                </button>
                <div className="text-[#f90] bg-[#ccc] rounded-full font-[700] flex items-center justify-center h-[54px] w-[54px]">
                  <span>AS</span>
                </div>
              </div>
            </div>
          </ClickAwayListener>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
