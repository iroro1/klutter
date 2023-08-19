"use client";
import { useState } from "react";
import db from "../assets/db.json";
const ListSection = () => {
  // console.log(db);
  const a = {
    Id: "selinazawacki-shirt",
    Maker: "selinazawacki",
    img: "https://user-images.githubusercontent.com/41929050/61567058-142c1c80-aa33-11e9-89fb-b4f30d84d69d.png",
    Url: "https://www.instagram.com/p/BEXlpiZCnJ3",
    Title: "Floppy Crop",
    Description: "Used up the Diskette fabric today to make 2 of these crops.",
    Ratings: null,
  };
  const categories = [
    "Mobile phones",
    "Game consoles",
    "Household furniture",
    "Home appliances",
    "Clothing",
  ];
  const [selectedCat, setSelectedCat] = useState(categories[0]);
  return (
    <div>
      <div className="container">
        <div className="py-3 text-[22px] font-[500]">Filters</div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <div
              className={`py-2 px-3 border cursor-pointer rounded-lg ${
                selectedCat === cat ? "bg-[#444888] text-white" : ""
              }`}
              key={cat}
              onClick={() => setSelectedCat(cat)}
            >
              {cat}
            </div>
          ))}
        </div>
        <div
          id="findItems"
          className="flex items-center gap-4 flex-wrap justify-center mt-[50px] border-t pt-[30px]"
        >
          {db.map((prd) => (
            <div
              key={prd.Id}
              className="h-[400px] w-[280px] border border-[#eee] shadow-md rounded-[8px] mb-[15px] flex flex-col justify-between"
            >
              <div className="h-[20%] px-3">
                <h5 className="text-[13px] font-[600] text-[#151f4c] text-center pt-[20px] px-1 leading-4">
                  {prd.Title}
                </h5>
                <p className="text-[12px] text-center text-neutral-500">
                  {prd.Maker}
                </p>
              </div>
              <img className="h-[60%] w-full" src={prd.img} alt={prd.Title} />
              <div className="px-3 h-[50px]">
                <div className="flex justify-between text-[12px] py-3 items-center">
                  <span className="h-[30px] bg-slate-500 flex justify-center items-center px-3 rounded-md text-[#fff]">
                    Ask For this.
                  </span>
                  {/* <span className="text-neutral-700">See More</span> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListSection;
