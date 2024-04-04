import React, { useState } from "react";

function HeroPage() {
  const [priceValue, setPriceValue] = useState(400);
  return (
    <div className="bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          {/* Text container */}
          <div className="text-white">
            <p>Our packages</p>
            <p className="text-4xl font-bold">Search your Destination</p>
          </div>
          {/* Form section */}
          <div className="space-y-4 bg-white rounded-md p-4 relative">
            <div className="grid grid-cols-1 sm:grid-cols-3 py-3">
              <div className="mx-2">
                <label htmlFor="destinaiton" className="opacity-70">
                  Destination
                </label>
                <input
                  type="text"
                  name="destinaiton"
                  id="destinaiton"
                  placeholder="Dubai"
                  className="w-full bg-gray-100 my-2 cursor-pointer range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                />
              </div>
              <div className="mx-2">
                <label htmlFor="destinaiton" className="opacity-70">
                  Date{" "}
                </label>
                <input
                  type="date"
                  name="destinaiton"
                  id="destinaiton"
                  placeholder="Dubai"
                  className="w-full bg-gray-100 cursor-pointer my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                />
              </div>
              <div className="mx-2">
                <label htmlFor="destinaiton" className="opacity-70 block">
                  <div className="w-full flex justify-between items-center">
                    <p>Max Price</p>
                    <p className="font-bold text-xl">${priceValue}</p>
                  </div>
                </label>
                <div className="bg-gray-100 rounded-full p-2 flex items-center justify-center">
                  <input
                    type="range"
                    name="destinaiton"
                    id="destinaiton"
                    className="appearance-none cursor-pointer w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-3"
                    placeholder="Dubai"
                    min="500"
                    max="10000"
                    value={priceValue}
                    step="10"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* button */}

            <button className=" bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2  rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2">
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
