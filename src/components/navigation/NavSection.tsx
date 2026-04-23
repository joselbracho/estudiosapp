"use client";
import React, { useState } from "react";
import Navlink from "../utils/Navlink";
type Props = {
  style: string;
  logo?: string;
};
type DropdownState = {
  home: boolean;
  pages: boolean;
  service: boolean;
  blog: boolean;
};
const NavSection = ({ style, logo }: Props) => {
  const [dropdown, setDropdown] = useState<DropdownState>({
    home: false,
    pages: false,
    service: false,
    blog: false,
  });

  const handleToggleDropdown = (dropdownName: keyof DropdownState) => {
    if (window.innerWidth < 992) {
      setDropdown((prevState) => ({
        ...prevState,
        [dropdownName]: !prevState[dropdownName],
      }));
    }
  };

  return (
    <div className={style}>
      <ul className="justify-content-center">
        <li>
          <Navlink href="/">Home</Navlink>

        </li>

        <li>
          <Navlink href="/about">About</Navlink>
        </li>

        
        {logo && (
          <li className="d-none d-lg-block">
            <Navlink href="/" className="rv-5-logo">
              <img src={logo} alt="logo" />
            </Navlink>
          </li>
        )}
        <li>
          <Navlink href="/#">Services</Navlink>
        </li>

        <li>
          <Navlink href="/#">Contact</Navlink>
        </li>
      </ul>
    </div>
  );
};

export default NavSection;
