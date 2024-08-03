"use client";
import Booking from "@/components/common/Booking";
import Image from "next/image";
import { Slide, Zoom } from "react-awesome-reveal";

export default function Story() {
  return (
    <>
      <Zoom triggerOnce={true}>
        <div className="h-[calc(100vh-64px)] pt-8">
          <Image
            className="w-full h-full"
            src={"/story_thumb.png"}
            alt="Logo"
            width={0}
            height={0}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
            unoptimized
          />
        </div>
      </Zoom>
      <div className="flex flex-col sm:flex-row lg:items-end sm:pb-16 lg:-mt-16">
        <div className="w-1/4 mt-5 sm:-mt-20 lg:-mt-20">
          <Slide direction="left" triggerOnce={true}>
            <Image
              className="w-1/2 rounded-xl sm:rounded-none sm:w-full h-auto mx-auto"
              src={"/story_1.png"}
              alt="Logo"
              width={0}
              height={0}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
              unoptimized
            />
          </Slide>
        </div>
        <div className="w-2/4 m-10">
          <Slide direction="up" triggerOnce={true}>
            <h2 className="font-italiana text-xl md:text-3xl py-2 md:py-8">
              Our <span className="text-leadLight">restaurant’s </span> space
            </h2>
            <p className="text-sm md:text-lg font-montserrat">
              Indulge in an exquisite dining experience at Azzuro. Our vibrant
              space in the heart of the city offers tantalizing flavors,
              impeccable service, and unforgettable moments. Join us for a taste
              of perfection. <br />
              <br /> Immerse yourself in the rich aromas and vibrant colors of
              our carefully curated menu, featuring a fusion of traditional and
              contemporary flavors. Sip on handcrafted cocktails expertly
              prepared by our mixologists, or explore our extensive wine
              selection for the perfect pairing. <br />
              <br /> At Azzuro, we strive to create not just meals, but moments
              to cherish - a true feast for the senses.
            </p>
          </Slide>
        </div>
        <div className="w-1/4 sm:translate-y-1/2">
          <Slide direction="right" triggerOnce={true}>
            <Image
              className="w-1/2 rounded-xl sm:rounded-none sm:w-full h-auto mx-auto"
              src={"/story_2.png"}
              alt="Logo"
              width={0}
              height={0}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
              unoptimized
            />
          </Slide>
        </div>
      </div>
      <Booking className="lg:w-2/3 mb-52" />
    </>
  );
}
