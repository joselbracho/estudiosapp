"use client";
import React from "react";

type Props = {
  videoUrl: string;
  isOpen: boolean;
  onClose: () => void;
};

const VideoModal = ({ videoUrl, isOpen, onClose }: Props) => {
  return (
    <>
      <div
        className={`rv-modal-overlay ${isOpen ? "active" : ""}`}
        role="button"
        onClick={onClose}
      ></div>
      <div
        className={`rv-modal-container video-modal-container ${
          isOpen ? "active" : ""
        }`}
      >
        <div className="rv-modal-body">
          {isOpen && (
            <iframe
              src={videoUrl}
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </>
  );
};

export default VideoModal;
