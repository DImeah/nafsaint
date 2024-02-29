import React from "react";
import Image from "next/image";

const HeroOverlay = ({ pageTitle, overlayURL }) => {
  return (
    <div className="h-[200px] w-full relative">
      <Image
        src={overlayURL}
        alt="Hero Overlay"
        height={250}
        width={1150}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-blue-500 bg-opacity-50 h-[200px] w-full flex items-center px-4">
        <h1 className="text-[30px] font-sans font-extrabold text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ">
          {pageTitle}
        </h1>
      </div>
    </div>
  );
};

export default HeroOverlay;
