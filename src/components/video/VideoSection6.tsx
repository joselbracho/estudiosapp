"use client";
import React, { useState } from "react";
import VideoModal from "../modal/VideoModal";

const VideoSection6 = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <div className="rv-5-video rv-6-video text-center">
      <div className="container">
        <span>
          <a onClick={openVideoModal} style={{ cursor: "pointer" }}>
            <i className="fa-solid fa-sharp fa-play"></i>
          </a>
        </span>
      </div>
      <VideoModal
        videoUrl="https://www.youtube.com/embed/IibDkSDNL3Y?si=MYzPiMAw66BG0eAO"
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
      />
    </div>
  );
};

export default VideoSection6;
