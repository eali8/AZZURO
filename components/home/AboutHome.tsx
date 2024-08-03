"use client"
import Image from "next/image";
import Link from "next/link";
import { Slide, Zoom } from "react-awesome-reveal";

export function AboutHome() {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="flex-1 items-center">
        <div className="h-full flex items-center">
      <Slide direction="left" triggerOnce={true}>
          <Image
            className="w-auto md:w-full"
            src={"/about_fork.png"}
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
      <div className="flex-1">
        <div className="flex flex-col items-start h-full">
          <div className="h-full flex flex-col justify-center">
            <Zoom>
              <h2 className="text-3xl md:text-2xl lg:text-3xl mb-5 lg:mb-12 font-italiana">
                About <span className="text-[#8D835E]">Us</span>
              </h2>
            </Zoom>
            <Slide direction="right">
              <p className="text-lg md:text-sm lg:text-lg font-montserrat leading-normal lg:leading-relaxed">
                Finding a collaborator in the workplace -someone you
                instinctively understand, share values and seek the same ideals
                as- is next to impossible in the restaurant industry. Yet that’s
                just what happened when Pedrino Tellasol and Daniel Gallego
                first worked together at Villa Del Lupo, one of Vancouver’s most
                beloved Italian restaurants. Telassol hired Gallego in what
                would become Gallego’s first fine dining post. <br />
                <br /> There, at Tellasol’s posh eatery where Holywood came to
                dine while in Vancouver, he set the standards of excellence and
                intensity that proved the foundation for Gallego’s continued
                career.
              </p>
              <Link
                className="flex items-center text-xl py-5 text-[#8D835E]"
                href={"/"}
              >
                <span className="mr-2">Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
}
