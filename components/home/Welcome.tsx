"use client";
import Image from "next/image";
import { AttentionSeeker, Fade } from "react-awesome-reveal";

export function Welcome() {
  return (
    <div className="flex flex-col-reverse lg:flex-row">
      <div className="w-full lg:w-3/5 xl:w-full xl:flex-1">
        <div className="bg-lead text-white py-16 lg:py-0 xl:py-16 flex flex-col items-start h-full">
          <div className="container h-full flex flex-col justify-center">
            <AttentionSeeker effect="headShake" triggerOnce={true}>
              <h2 className="text-3xl lg:text-2xl xl:text-3xl mb-12 lg:mb-5 xl:mb-12 font-italiana">
                Welcome to Azzuro Italian Kitchen
              </h2>
            </AttentionSeeker>
            <Fade direction="left" delay={200} triggerOnce={true}>
              <p className="text-lg lg:text-sm xl:text-lg font-montserrat leading-normal xxl:leading-relaxed">
                Celebrate a culinary journey through Italy with Azzuro Italian
                Kitchen re-entry into the heart of Vancouver. The
                Tuscan-inspired restaurant, located in Yaletown, is just steps
                away from the Yaletown Skytrain Station. <br />
                <br />
                With a Florentine-styled courtyard and sidewalk patio that
                graces the front of the restaurant, Azzuro carries guests
                through a traditional Tuscan adventure by experiencing the bold
                and rich flavours the Italian region is famous for. Its vaulted
                ceilings, wooden beams, Tuscan tiles, and hand-painted artwork
                are designed to symbolize the granaries of old and how they
                represent the storage of food, where every grain is sacred and
                protected. <br />
                <br /> Upon stepping inside, you will be transported to the
                beauty of Tuscany and the Mediterranean. The seasonal outdoor
                garden patio features fresh seasonal flowers and lush greens.
              </p>
            </Fade>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/5 xl:w-full xl:flex-1">
        <div>
          <Image
            className="w-full h-auto"
            src={"/home_about.png"}
            alt="Logo"
            width={0}
            height={0}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
