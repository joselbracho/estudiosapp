"use client";
import React, { useState } from "react";
import BounceAnimatedBtn from "../utils/BounceAnimatedBtn";
import VideoModal from "../modal/VideoModal";

type Props = {
  innerPage?: boolean;
};

const VideoSection = ({ innerPage }: Props) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <div
      className={`rv-1-video ${innerPage ? "rv-project-details__video" : ""}`}
    >
      <div className="container">
        <div className="row gy-3 align-items-center">
          <div className="col-xl-9 col-lg-8">
            <div className="rv-1-video__txt">
              <h4 className="rv-1-video__title rv-1-section__title rv-text-anime">
                Live Streaming
              </h4>

              <p className="rv-1-video__descr">
                <span>
                  Event planners help clients organize and coordinate aspects of
                  events.
                </span>
              </p>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 text-end">
            <div className="rv-1-video__btn">
              <BounceAnimatedBtn>
                <a
                  className="video-play-btn"
                  role="button"
                  onClick={openVideoModal}
                >
                  <i className="fa-solid fa-sharp fa-play"></i>
                </a>
              </BounceAnimatedBtn>

              <span className="txt">Play Video</span>
            </div>
          </div>
        </div>
      </div>
      <VideoModal
        videoUrl="https://www.youtube.com/embed/TboWOSW7qCI?si=Tai9q8LZqyR5R9e6"
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
      />
    </div>
  );
};

export default VideoSection;
