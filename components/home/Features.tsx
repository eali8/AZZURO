"use client";
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import { Slide, Zoom } from "react-awesome-reveal";

const titleContent = (
  <>
    We know how to make <br />
    the best <span className="text-[#8D835E]">Italian food</span> in the city
  </>
);

export function Features() {
  return (
    <div className="grid grid-cols-12 gap-4 xl:gap-x-24 mb-20">
      <div className="col-span-12">
        <SectionTitle className="mt-28" title={titleContent} />
      </div>
      <div className="col-span-12 md:col-span-4">
        <Slide direction="left">
          <Image
            className="w-auto xl:w-full md:h-full mx-auto rounded-xl"
            src={"/food1.png"}
            alt="Logo"
            width={0}
            height={0}
            unoptimized
          />
          <p className="text-center my-2 font-montserrat">
            Only fresh ingredients
          </p>
        </Slide>
      </div>
      <div className="col-span-12 md:col-span-4">
        <Zoom>
          <Image
            className="w-auto xl:w-full md:h-full mx-auto rounded-xl"
            src={"/food2.png"}
            alt="Logo"
            width={0}
            height={0}
            unoptimized
          />
          <p className="text-center my-2 font-montserrat">
            50 years of experience
          </p>
        </Zoom>
      </div>
      <div className="col-span-12 md:col-span-4">
        <Slide direction="right">
          <Image
            className="w-auto xl:w-full md:h-full mx-auto rounded-xl"
            src={"/food3.png"}
            alt="Logo"
            width={0}
            height={0}
            unoptimized
          />
          <p className="text-center my-2 font-montserrat">
            Traditional recipes
          </p>
        </Slide>
      </div>
    </div>
  );
}
