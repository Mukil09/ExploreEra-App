import React from "react";
import PlacesCard from "./PlacesCard";
import Img1 from "../../Assets/places/boat.jpg";
import Img2 from "../../Assets/places/tajmahal.jpg";
import Img3 from "../../Assets/places/water.jpg";
import Img4 from "../../Assets/places/place4.jpg";
import Img5 from "../../Assets/places/place5.jpg";
import Img6 from "../../Assets/places/place6.jpg";

const placesData = [
  {
    img: Img1,
    title: "Boat",
    location: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 1700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Underwater",
    location: "US",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 8200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 2700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United states",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Los Vegas",
    location: "California",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6200,
    type: "Cultural Relax",
  },
];

function Places({ handleOrderPopUp }) {
  return (
    <div className="bg-gray-50 py-10 font-poppins">
      <div className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Best Places to visit
        </h1>
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {placesData.map((place, index) => {
            return (
              <PlacesCard
                handleOrderPopUp={handleOrderPopUp}
                key={index}
                {...place}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Places;
