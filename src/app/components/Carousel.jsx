import React, { useState } from "react";
import Image from "next/image";

const Carousel = ({ imgSrc, description }) => {
  const readMore =
    "w-full text-center bg-opacity-60 text-center shadow-2xl shadow-black absolute bg-black h-full  py-12 text-white px-2";
  const readLess =
    "md:w-1/4 md:right-0 text-center shadow-2xl shadow-black absolute bg-black bg-opacity-20 h-full  py-12 text-white px-2";

  const [clamp, setClamp] = useState("line-clamp-5");
  const [read, setRead] = useState(readLess);

  const handleClick = () => {
    if (read === readLess) {
      setRead(readMore);
    } else {
      setRead(readLess);
    }
    if (clamp) {
      setClamp("");
    } else {
      setClamp("line-clamp-5");
    }
  };

  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <Image src={imgSrc} alt="carousel-image" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
