"use client"
import Image from "next/image";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

export default function Hero({
  image,
  firstText,
  lastText,
}: {
  image: string;
  firstText: string;
  lastText: string;
}) {
  return (
    <div className="container lg:h-[calc(100vh-64px)] flex justify-center items-center">
      <h1 className="font-montserrat font-extrabold italic text-5xl sm:text-7xl md:text-9xl xl:text-[240px] flex justify-around items-center uppercase">
      <Slide direction="left"><span className="lg:mt-10">{firstText}</span></Slide>
        <Zoom>
          <Image
            className="w-auto h-[30vh] sm:h-[50vh] lg:h-[80vh] px-5"
            src={image}
            alt="Logo"
            width={0}
            height={0}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
            unoptimized
          />
        </Zoom>
        <Slide direction="right"><span className="lg:mt-10">{lastText}</span></Slide>
      </h1>
    </div>
  );
}
