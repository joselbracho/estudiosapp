"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import NavSection from "../navigation/NavSection";
import SearchFormModal from "../modal/SearchFormModal";

const HeaderSection6 = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const openSidebar = () => {
    setIsSidebarOpen(true);
    setIsHeaderFixed(false);
  };

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200 && !isSidebarOpen) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSidebar]);

  return (
    <header
      className={`rv-6-header rv-1-header to-be-fixed ${
        isHeaderFixed ? "fixed" : ""
      }`}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-2 col-lg-3 col-6">
            <div className="rv-6-header__logo">
              <Link href="/estudiosapp/">
                <img src="/estudiosapp/assets/img/rv-6-logo.png" alt="Logo" />
              </Link>
            </div>
          </div>

          <div className="col-xl-8 col-7 order-2 order-lg-1">
            <div
              className={`rv-1-header-nav__sidebar ${
                isSidebarOpen ? "active" : ""
              }`}
              ref={sidebarRef}
            >
              <div className="sidebar-heading d-lg-none d-flex align-items-center justify-content-between">
                <Link href="/estudiosapp/" className="logo-container">
                  <img src="/estudiosapp/assets/img/rv-6-logo.png" alt="logo" />
                </Link>
                <button
                  className="rv-3-def-btn rv-1-header-mobile-menu-btn sidebar-close-btn"
                  onClick={closeSidebar}
                >
                  <i className="fa-regular fa-xmark"></i>
                </button>
              </div>

              <NavSection style="rv-1-header__nav rv-6-header__nav" />
            </div>
          </div>

          <div className="col-lg-2 col-6 order-1 order-lg-2 align-self-stretch">
            <div className="rv-6-header__right">
              <button
                className="rv-6-header__sidebar-btn d-lg-inline-block d-none"
                onClick={openSearchModal}
              >
                <i className="fa-regular fa-magnifying-glass"></i>
              </button>
              <button
                className="rv-1-header-mobile-menu-btn d-inline-block d-lg-none"
                id="rv-1-header-mobile-menu-btn"
                onClick={openSidebar}
              >
                <i className="fa-regular fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <SearchFormModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
    </header>
  );
};

export default HeaderSection6;
