"use client";

import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({
  containerStyles,
  btnStyles,
  iconStyles,
}: {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
}) => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (!swiper) return;

    // Set initial state
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);

    // Listen for slide changes
    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", handleSlideChange);

    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <div className={containerStyles}>
      <button
        className={`${btnStyles} ${isBeginning ? "opacity-40 cursor-not-allowed" : ""}`}
        onClick={() => {
          if (!isBeginning) swiper.slidePrev();
        }}
        disabled={isBeginning}
      >
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button
        className={`${btnStyles} ${isEnd ? "opacity-40 cursor-not-allowed" : ""}`}
        onClick={() => {
          if (!isEnd) swiper.slideNext();
        }}
        disabled={isEnd}
      >
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
