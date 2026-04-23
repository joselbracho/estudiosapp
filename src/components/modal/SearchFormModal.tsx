"use client";
import React from "react";
import SearchForm from "../form/SearchForm";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const SearchFormModal = ({ isOpen, onClose }: Props) => {
  return (
    <div className={`rv-search-modal ${isOpen ? "active" : ""}`}>
      <SearchForm />
      <button className="rv-search-modal-close-btn" onClick={onClose}>
        <i className="fa-regular fa-xmark"></i>
      </button>
    </div>
  );
};

export default SearchFormModal;
