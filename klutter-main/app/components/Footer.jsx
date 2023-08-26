import React from "react";
import Logo from "./Logo";
import Image from "next/image";
const Footer = () => {
  const reviews = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Alex Betty",
      comment: `I got Kate’s TV (LG SMART LED 65”) two weeks ago and at first I wasn’t exactly sure how it was gonna turn out but it turned out to be seamless and easy more than typical commerce. And Kate was really nice`,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Alex Betty",
      comment: `I got Kate’s TV (LG SMART LED 65”) two weeks ago and at first I wasn’t exactly sure how it was gonna turn out but it turned out to be seamless and easy more than typical commerce. And Kate was really nice`,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Alex Betty",
      comment: `I got Kate’s TV (LG SMART LED 65”) two weeks ago and at first I wasn’t exactly sure how it was gonna turn out but it turned out to be seamless and easy more than typical commerce. And Kate was really nice`,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Alex Betty",
      comment: `I got Kate’s TV (LG SMART LED 65”) two weeks ago and at first I wasn’t exactly sure how it was gonna turn out but it turned out to be seamless and easy more than typical commerce. And Kate was really nice`,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Alex Betty",
      comment: `I got Kate’s TV (LG SMART LED 65”) two weeks ago and at first I wasn’t exactly sure how it was gonna turn out but it turned out to be seamless and easy more than typical commerce. And Kate was really nice`,
    },
  ];
  return (
    <div className="bg-[#000] py-[61px] min-h-[200px] text-[#fff] mt-6">
      <div className="container">
        <h3 className="text-[#f90] font-[500] text-[40px]  md:text-[54px] leading-[54px]">
          Cheaper
          <span className="text-[#fff] font-[700] ml-2">and</span> <br />{" "}
          Tested!
        </h3>
        <p className="mt-[26px] md:w-[550px]">
          For electronics, body care, clothes, hair, office items, bedroom items
          plants and so on, all can be found on Klutter!
        </p>

        <h5 className="mt-[66px]">Reviews</h5>
      </div>
      <div className="flex ml-[5%] mt-[21px] overflow-auto gap-[32px] scroll-hide pr-[100px]">
        {reviews.map((user) => (
          <div
            className="p-[24px]  min-w-[417px] max-w-[417px] bg-[#3C947A] rounded-[5px]"
            key={user.id}
          >
            <div className="flex min-h-[43px] items-center gap-4">
              <Image
                width={33}
                height={33}
                className="rounded-full"
                src={user.img}
              />
              <h5>{user.name}</h5>
            </div>
            <p>{user.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
