import React from "react";

const Appreciations = () => {
  const givers = [
    { e: "ojigboleo@gmail.com", count: 13 },
    { e: "ojigbo.pro@gmail.com", count: 7 },
    { e: "tomlee4real@gmail.com", count: 3 },
  ];
  return (
    <div className="border-t">
      <div className="container py-4">
        <h2 className="font-[600] mb-4">Highest Givers this week</h2>

        <div>
          {givers.map((giver, i) => (
            <div
              key={giver.e}
              className={`py-2 ${
                i % 2 === 0
                  ? "bg-[#eee] md:bg-transparent md:text-[#333]"
                  : "bg-[#999] text-[#fff] md:bg-transparent md:text-[#333]"
              } flex items-center px-4 rounded-sm justify-between md:bg-transparent md:text-[#333] md:max-w-[500px] md:pl-0`}
            >
              <span>{giver.e}</span>
              <span className="font-[700]">{giver.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appreciations;
