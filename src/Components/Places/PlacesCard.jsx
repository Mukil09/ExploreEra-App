import React from "react";
import { IoLocationSharp } from "react-icons/io5";

function PlacesCard({
  img,
  title,
  location,
  description,
  price,
  type,
  handleOrderPopUp,
}) {
  return (
    <div
      className="shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer"
      onClick={handleOrderPopUp}
    >
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          className="mx-auto w-full h-[220px] object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="space-y-2 p-3">
        <h1 className="line-clamp-1 text-xl font-bold">{title}</h1>
        <div className="flex  items-center gap-2 opacity-70">
          <IoLocationSharp />
          <span>{location}</span>
        </div>
        <p className="line-clamp-2">{description}</p>
        <div className="flex items-center justify-between border-t-2 my-3 !mt-3">
          <div className="opacity-70">
            <p>{type}</p>
          </div>

          <div>
            <p className="text-xl">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlacesCard;
