"use client";
import { ClickAwayListener } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext, useState } from "react";
import ad1 from "../assets/images/ad1.svg";
import { AppCtx } from "../context/StoreContext";

const nameVariant = {
  visible: { x: 50, y: 150, transition: { delay: 5, duration: 2 } },
  hidden: { x: 450, y: 250 },
};
const ListSection = ({ setShowHero }) => {
  const db = [
    {
      id: 1,
      title: "Hisense LED TV 65 Inches",
      cost: "65,000.00",
      interestCount: 982,
      img: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "This is a neatly used TV with all feature working + remote. Used for 6 months only. I am giving it out becase i bought a bigger tv set.",
      NumOfYearsUsed: 0.5,
      sellersDetail: {
        address: "6 Alex McQueen St, Lagos",
        phone: "+234 8983765783",
      },
      pickUpAddress: "6 Alex McQueen St, Lagos",
    },
    {
      id: 2,
      title: "Hisense LED TV 65 Inches",
      cost: "65,000.00",
      interestCount: 982,
      img: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "This is a neatly used TV with all feature working + remote. Used for 6 months only. I am giving it out becase i bought a bigger tv set.",
      NumOfYearsUsed: 0.5,
      sellersDetail: {
        address: "6 Alex McQueen St, Lagos",
        phone: "+234 8983765783",
      },
      pickUpAddress: "6 Alex McQueen St, Lagos",
    },
    {
      id: 3,
      title: "Hisense LED TV 65 Inches",
      cost: "65,000.00",
      interestCount: 982,
      img: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "This is a neatly used TV with all feature working + remote. Used for 6 months only. I am giving it out becase i bought a bigger tv set.",
      NumOfYearsUsed: 0.5,
      sellersDetail: {
        address: "6 Alex McQueen St, Lagos",
        phone: "+234 8983765783",
      },
      pickUpAddress: "6 Alex McQueen St, Lagos",
    },
    {
      id: 4,
      title: "Hisense LED TV 65 Inches",
      cost: "65,000.00",
      interestCount: 982,
      img: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "This is a neatly used TV with all feature working + remote. Used for 6 months only. I am giving it out becase i bought a bigger tv set.",
      NumOfYearsUsed: 0.5,
      sellersDetail: {
        address: "6 Alex McQueen St, Lagos",
        phone: "+234 8983765783",
      },
      pickUpAddress: "6 Alex McQueen St, Lagos",
    },
    {
      id: 5,
      title: "Hisense LED TV 65 Inches",
      cost: "65,000.00",
      interestCount: 982,
      img: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "This is a neatly used TV with all feature working + remote. Used for 6 months only. I am giving it out becase i bought a bigger tv set.",
      NumOfYearsUsed: 0.5,
      sellersDetail: {
        address: "6 Alex McQueen St, Lagos",
        phone: "+234 8983765783",
      },
      pickUpAddress: "6 Alex McQueen St, Lagos",
    },
    {
      id: 6,
      title: "Hisense LED TV 65 Inches",
      cost: "65,000.00",
      interestCount: 982,
      img: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "This is a neatly used TV with all feature working + remote. Used for 6 months only. I am giving it out becase i bought a bigger tv set.",
      NumOfYearsUsed: 0.5,
      sellersDetail: {
        address: "6 Alex McQueen St, Lagos",
        phone: "+234 8983765783",
      },
      pickUpAddress: "6 Alex McQueen St, Lagos",
    },
    {
      id: "ad1",
      showAd: true,
    },
    {
      id: 7,
      title: "Hisense LED TV 65 Inches",
      cost: "65,000.00",
      interestCount: 982,
      img: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "This is a neatly used TV with all feature working + remote. Used for 6 months only. I am giving it out becase i bought a bigger tv set.",
      NumOfYearsUsed: 0.5,
      sellersDetail: {
        address: "6 Alex McQueen St, Lagos",
        phone: "+234 8983765783",
      },
      pickUpAddress: "6 Alex McQueen St, Lagos",
    },
    {
      id: 8,
      title: "Hisense LED TV 65 Inches",
      cost: "65,000.00",
      interestCount: 982,
      img: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "This is a neatly used TV with all feature working + remote. Used for 6 months only. I am giving it out becase i bought a bigger tv set.",
      NumOfYearsUsed: 0.5,
      sellersDetail: {
        address: "6 Alex McQueen St, Lagos",
        phone: "+234 8983765783",
      },
      pickUpAddress: "6 Alex McQueen St, Lagos",
    },
    {
      id: 9,
      title: "Hisense LED TV 65 Inches",
      cost: "65,000.00",
      interestCount: 982,
      img: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "This is a neatly used TV with all feature working + remote. Used for 6 months only. I am giving it out becase i bought a bigger tv set.",
      NumOfYearsUsed: 0.5,
      sellersDetail: {
        address: "6 Alex McQueen St, Lagos",
        phone: "+234 8983765783",
      },
      pickUpAddress: "6 Alex McQueen St, Lagos",
    },
    {
      id: 10,
      title: "Hisense LED TV 65 Inches",
      cost: "65,000.00",
      interestCount: 982,
      img: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "This is a neatly used TV with all feature working + remote. Used for 6 months only. I am giving it out becase i bought a bigger tv set.",
      NumOfYearsUsed: 0.5,
      sellersDetail: {
        address: "6 Alex McQueen St, Lagos",
        phone: "+234 8983765783",
      },
      pickUpAddress: "6 Alex McQueen St, Lagos",
    },
    {
      id: 11,
      title: "Hisense LED TV 65 Inches",
      cost: "65,000.00",
      interestCount: 982,
      img: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "This is a neatly used TV with all feature working + remote. Used for 6 months only. I am giving it out becase i bought a bigger tv set.",
      NumOfYearsUsed: 0.5,
      sellersDetail: {
        address: "6 Alex McQueen St, Lagos",
        phone: "+234 8983765783",
      },
      pickUpAddress: "6 Alex McQueen St, Lagos",
    },
    {
      id: 12,
      title: "Hisense LED TV 65 Inches",
      cost: "65,000.00",
      interestCount: 982,
      img: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "This is a neatly used TV with all feature working + remote. Used for 6 months only. I am giving it out becase i bought a bigger tv set.",
      NumOfYearsUsed: 0.5,
      sellersDetail: {
        address: "6 Alex McQueen St, Lagos",
        phone: "+234 8983765783",
      },
      pickUpAddress: "6 Alex McQueen St, Lagos",
    },
  ];
  const ctx = useContext(AppCtx);
  console.log(ctx);
  const categoriesMain = ["All (Paid and Free)", "Paid Items", "Free Items"];
  const [selectedCategory, setSelectedCategory] = useState(categoriesMain[0]);
  const [showDD, setShowDD] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [detail, setDetail] = useState(false);
  const onSearchFn = () => {};
  return (
    <motion.div>
      <div className="container pt-10">
        <div className="md:flex w-full items-center gap-8">
          <div className="relative md:w-[200px]">
            <div
              onClick={() => setShowDD(!showDD)}
              className="relative w-full md:w-[200px] rounded-lg text-[#1c1c1c] h-[57px] p-1 border flex items-center justify-center cursor-pointer bg-white z-10"
            >
              {selectedCategory}
            </div>
            {showDD && (
              <ClickAwayListener onClickAway={() => setShowDD(false)}>
                <div className="absolute z-[99]  p-1 border w-full md:w-[200px] items-center justify-center cursor-pointer top-[50px] md:z-0 pt-4 bg-white rounded-b-lg">
                  {categoriesMain.map((cat, i) => (
                    <div
                      className={`flex py-2 items-center ${
                        i < 2 && "border-b"
                      } pl-4`}
                      key={i}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setShowDD(false);
                      }}
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              </ClickAwayListener>
            )}
          </div>
          <div className="mt-[20px] md:mt-0 relative w-full border h-[52px] flex items-center rounded-lg mr-[60px]">
            <input
              type="text"
              placeholder="Search for items"
              className="h-[50px] w-full rounded-lg pl-2 outline-[#f90]"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              onClick={onSearchFn}
              className="bg-black text-white z-20 h-[52px] w-[160px] ml-[-60px] rounded-[8px]"
            >
              Search
            </button>
          </div>
        </div>
        <div
          id="findItems"
          className="flex items-start gap-6 flex-wrap justify-center mt-[50px]  pt-[30px]"
        >
          {db.map((prd) =>
            prd?.showAd ? (
              <>
                <div className="bg-[#3C947A] p-7 lg:p-0 flex items-center min-h-[252px] w-full  my-3">
                  <div className="relative hidden lg:block  w-[325px]">
                    <Image
                      className="absolute bottom-[-122px] left-0 h-[300px] w-[325px] translate-x-[80] "
                      src={ad1}
                    />
                  </div>
                  <div className="text-white w-[544px]">
                    <h3 className="text-[26px] md:text-[32px] font-[700]">
                      Klutter P2P Charity and Commerce
                    </h3>
                    <p className="text-[16px] font[400]">
                      We have cracked the p2p charity and commerce code. Browse
                      through the product catalog or contact your favorite
                      sellers
                    </p>
                    <button className="bg-[#f90] text-[#000] text-[14px] p-2 py-2 rounded-md mt-2  ">
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <motion.div
                onClick={() => {
                  ctx.setStore({ ...ctx.store, showHero: false });
                  setDetail(prd.id);
                }}
                key={prd.id}
                className="min-h-[151px] cursor-pointer w-[308px] border border-[#eee] shadow-md rounded-[8px] mb-[15px] flex flex-col justify-between overflow-hidden bg-black"
              >
                <img className="h-[60%] w-full" src={prd.img} alt={prd.title} />
                <div className=" pt-[14px] px-[28px]">
                  <div className="flex items-center justify-between text-[#f90]">
                    <span className="text-[15px] font-[600]">N{prd.cost}</span>
                    <span className="text-[12px] font-[700]">
                      {prd.interestCount}{" "}
                      <span className="text-white font-[400]">
                        showed interest{" "}
                      </span>{" "}
                    </span>
                  </div>
                  {detail === prd.id ? (
                    <ClickAwayListener onClickAway={() => setDetail(false)}>
                      <motion.div
                        animate={{
                          minHeight: "200px",
                          transition: {
                            duration: 1,
                            delay: 1,
                          },
                        }}
                        initial={{
                          transition: {
                            duration: 1,
                            delay: 1,
                          },
                        }}
                        className="mt-[13px] text-white pb-[37px]"
                      >
                        <h4 className="text-[18px] font-[700]">{prd.title}</h4>
                        <p className="mt-[6px] text-[14px] font-extralight">
                          {prd.description}
                        </p>
                        <h5 className="text-[18px] font-[700] mt-[27px]">
                          Number of Years used
                        </h5>
                        <p className="text-[14px] font-extralight">
                          {prd.NumOfYearsUsed} Years
                        </p>
                        <h5 className="text-[18px] font-[700] mt-4">
                          Seller’s Details
                        </h5>
                        <p className="text-[14px] font-extralight">
                          Address - {prd.sellersDetail.address}
                        </p>
                        <p className="text-[14px] font-extralight">
                          Phone number: {prd.sellersDetail.phone}
                        </p>

                        <h5 className="text-[18px] font-[700] mt-[27px]">
                          Pickup Address
                        </h5>
                        <p className="text-[14px] font-extralight">
                          {prd.pickUpAddress}
                        </p>
                      </motion.div>
                    </ClickAwayListener>
                  ) : (
                    <div className="mt-[13px] text-white pb-[37px]">
                      <h4 className="text-[18px] font-[700]">{prd.title}</h4>
                      <p className="mt-[6px]">{prd.description.slice(0, 60)}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ListSection;
