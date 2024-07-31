"use client";
import Booking from "@/components/common/Booking";
import Image from "next/image";
import { Slide, Zoom } from "react-awesome-reveal";

export default function About() {
  return (
    <div className="grid grid-cols-12 gap-5 py-24 bg-[url('/about_bg.png')] bg-no-repeat bg-center bg-contain">
      <div className="col-span-12">
        <Zoom>
          <h2 className="font-montserrat font-bold text-7xl text-center mb-20">
            About <span className="text-leadLight">Azzuro</span>
          </h2>
        </Zoom>
      </div>
      <div className="col-span-12 lg:col-span-6 sm:mb-96">
        <Slide direction="left">
          <div className="h-full flex items-center">
            <Image
              className="w-full h-auto"
              src={"/about_1.png"}
              alt="Contact Thumb"
              width={0}
              height={0}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
              unoptimized
            />
          </div>
        </Slide>
      </div>
      <div className="col-span-10 lg:col-span-5 col-start-3 lg:col-start-8 mb-28">
        <Slide direction="right">
          <p className="relative lg:text-lg xl:text-xl font-montserrat leading-normal xl:leading-relaxed">
            <span className="absolute -left-10 sm:-left-20 top-0">01</span>
            In front of the house, Gallego maintains an inviting dining room
            where conversation, great food and a hand-selected mix of music
            reigns supreme. Azzuro captures the swank of high end but brings it
            down to earth in the décor, the menu and the friendly service. It is
            Tellasol’s intention for guests to walk through the door and feel
            welcome. “It’s simple really -guests expect nice food in a
            comfortable place. We know what we like and how we want to be
            treated, so we re-created this for our guests when we built Azzuro”.
          </p>
          <br />
          <br />
          <p className="relative lg:text-lg xl:text-xl font-montserrat leading-normal xl:leading-relaxed">
            <span className="absolute -left-10 sm:-left-20 top-0">02</span>
            In addition, Tellasol brings his passion for the grape to the
            thoughtfully created wine list, which highlights his preference for
            Italian and BC favourites. Situated between Yaletown and the heart
            of Vancouver’s entertainment district, Azzuro mirrors the
            effervescent community where it’s housed, trendy and new with a
            little historical charm. Affordably priced and sourcing the best
            quality food and wine from BC and Europe, Azzuro offers a little
            something for everyone. Azzuro… keeping things decidedly fresh and
            cool on the edge of Yaletown.
          </p>
        </Slide>
      </div>
      <div className="col-span-12 lg:col-span-6 bg-lead text-white p-5 mb-28">
        <div className="grid grid-cols-6">
          <div className="col-span-5 col-start-2">
            <Slide direction="left">
              <p className="relative lg:text-lg xl:text-xl font-montserrat leading-normal xl:leading-relaxed">
                <span className="absolute -left-10 sm:-left-20 top-0">01</span>
                The menu is rooted in familiar dishes and Italian favorites but
                has a sense of adventure and extravagance that comes from
                Tellasol’s background in fine dining. There are no shortcuts
                when it comes to the food. In a humble and straightforward
                manner, Telassol uses the best local, seasonal ingredients and
                creates everything in-house- from hand-rolled breadsticks to
                freshly ground sausage to pillowy pasta dough. Each distinct
                element of a recipe is created as if it is the only ingredient
                being used Despite this attention to detail, you will not see a
                genealogy of your dish listed on the menu.
              </p>
              <br />
              <br />
              <p className="relative lg:text-lg xl:text-xl font-montserrat leading-normal xl:leading-relaxed">
                <span className="absolute -left-10 sm:-left-20 top-0">02</span>
                The food speaks for itself: quality ingredients, prepared well.
                Take for example the calamari, used in the Spaghetti Nero, which
                is braised for three hours before joining the ink squid pasta,
                the stuffed squid and the tomato soffritto. The extra touches
                are simply part of the package. With a knowing grin Perini says,
                “These little details are my advertising budget. If I feed my
                guests well, they come back for more”.
              </p>
            </Slide>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6 mb-28">
        <Slide direction="right">
          <div className="h-full flex items-center">
            <Image
              className="w-full h-auto"
              src={"/about_2.png"}
              alt="Contact Thumb"
              width={0}
              height={0}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
              unoptimized
            />
          </div>
        </Slide>
      </div>
      <div className="col-span-12">
        <Booking className="my-28" />
      </div>
    </div>
  );
}
