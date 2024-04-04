import React, { useState } from "react";
import NatureVideo from "../Assets/video/main.mp4";
import HeroPage from "../Components/HeroPage/HeroPage";
import Places from "../Components/Places/Places";
import BannerImg from "../Components/BannerImg/BannerImg";
import Banner1 from "../Assets/cover-women.jpg";
import Banner2 from "../Assets/travel-cover2.jpg";
import Blogs from "./Blogs";
import Banner from "../Components/Banner/Banner";
import Testimonials from "../Components/Testimonial/Testimonials";
import Popup from "../Components/Popup/Popup";

function Home() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopUp = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div>
        <div className="relative h-[600px]">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-full w-full object-cover z-[-1]"
          >
            <source src={NatureVideo} type="video/mp4" />
          </video>
          <HeroPage />
        </div>
        <Places handleOrderPopUp={handleOrderPopUp} />
        <BannerImg img={Banner1} />
        <Blogs />
        <Banner />
        <BannerImg img={Banner2} />
        <Testimonials />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
}

export default Home;
