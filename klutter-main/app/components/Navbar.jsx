"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { ClickAwayListener } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="min-w-full bg-[#151f4c] h-[65px] fixed top-0 left-0">
      <div className="w-[90%] mx-auto lg:[1440px] min-h-full flex items-center justify-between text-[12px] relative">
        <Logo />

        <div className="text-[#eee] md:flex gap-4 hidden">
          <a href={"#findItems"}>Find Items</a>
          <a href={"#list"}>List Items</a>
        </div>
        <div className="text-[#eee] hidden md:block">
          <a
            className="bg-[#eee] text-[#151f4c] p-2 rounded-md"
            href={"#comingSoon"}
          >
            Download Apps
          </a>
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
              <a
                onClick={() => setShowMenu(false)}
                className="py-3 px-2"
                href={"#findItems"}
              >
                Find Items
              </a>
              <a
                onClick={() => setShowMenu(false)}
                className="py-3 px-2"
                href={"#list"}
              >
                List Items
              </a>
              <a
                className="bg-[#eee] text-[#151f4c] py-3 px-2 rounded-md"
                href={"#comingSoon"}
              >
                Download Apps
              </a>
            </div>
          </ClickAwayListener>
        )}
      </div>
    </div>
  );
};

export default Navbar;
