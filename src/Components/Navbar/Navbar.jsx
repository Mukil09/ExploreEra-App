import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Assets/mainlogo.png";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const dropdownLinks = [
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
];

function Navbar({ handleOrderPopUp }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="fiex font-poppins text-base top-0 right-0 w-full bg-white text-black shadow-md z-[99999]">
        <div className="bg-gradient-to-r from-primary to-secondary  text-white">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex justify-between">
              <p>20% off on next booking</p>
              <p>Contact no: 91+ 1234567890</p>
            </div>
          </div>
        </div>

        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            {/* logo */}
            <div>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="logo" className="h-16" />
              </Link>
            </div>
            {/* Nav links */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                <li className="py-4">
                  <NavLink
                    to="/"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    to="/blogs"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    to="/places"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    to="/about"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    About
                  </NavLink>
                </li>

                {/* Dropdown */}

                <li className="py-4 relative group cursor-pointer">
                  <div className="dropdown flex items-center">
                    <span>Quick Links</span>
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </div>
                  <div className="absolute top-[60px] -left-9 z-[1] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2">
                    <ul>
                      {dropdownLinks.map((data, index) => {
                        return (
                          <li key={data.name}>
                            <a
                              href={data.link}
                              className="inline-block w-full rounded-md p-2 hover:bg-primary/20 cursor-pointer"
                            >
                              {data.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            {/* button */}
            <div className="flex items-center gap-4">
              <button
                className="rounded-lg px-3 py-1 bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-500 text-white round"
                onClick={handleOrderPopUp}
              >
                Book Now
              </button>

              {/* Mobile view */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
    </>
  );
}

export default Navbar;
