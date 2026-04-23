"use client";
import React, { useState } from "react";
import VideoModal from "../modal/VideoModal";

const VideoSection7 = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <div className="rv-14-video text-center">
      <div className="container">
        <a onClick={openVideoModal} style={{ cursor: "pointer" }}>
          <i className="fa-thin fa-sharp fa-play">
            <span className="stroke-1"></span>
            <span className="stroke-2"></span>
            <span className="stroke-3"></span>
          </i>
        </a>
      </div>
      <VideoModal
        videoUrl="https://www.youtube.com/embed/TboWOSW7qCI?si=Tai9q8LZqyR5R9e6"
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
      />
    </div>
  );
};

export default VideoSection7;
