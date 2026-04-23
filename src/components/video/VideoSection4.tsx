"use client";
import React, { useState } from "react";
import VideoModal from "../modal/VideoModal";

const VideoSection4 = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <div className="rv-inner-video rv-10-infos__video">
      <div className="rv-5-video">
        <div className="container">
          <div className="outer-container">
            <span className="btn-wrapper">
              <a
                className="rv-5-video-btn"
                role="button"
                onClick={isVideoModalOpen ? undefined : openVideoModal}
              >
                <i className="fa-solid fa-sharp fa-play"></i>
              </a>
            </span>
            <h3>Health Care & Beauty.</h3>
          </div>
        </div>
      </div>
      <VideoModal
        videoUrl="https://www.youtube.com/embed/IibDkSDNL3Y?si=MYzPiMAw66BG0eAO"
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
      />
    </div>
  );
};

export default VideoSection4;
