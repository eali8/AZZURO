"use client";
import Image from "next/image";
import Link from "next/link";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

export default function MenuItem({
  name,
  reverse = false,
  page,
}: {
  name: String;
  reverse?: Boolean;
  page?: "home" | "menu";
}) {
  const menuItems = {
    appetizers: {
      icon: "/appetizers_icon.png",
      thumbnail: "/appetizers.png",
      thumbnailMenu: "/appetizer_menu.png",
      items: [
        {
          name: "Carpaccio of Beef Tenderlion",
          description: "Homemade served with Honey Mustard Dressing",
          price: "$18.00",
        },
        {
          name: "Proscuitto di Parma",
          description: "Served with Parmigiano Reggiano & Cipollino Onion",
          price: "$21.00",
        },
        {
          name: "Fried Breaded Mozzarella Di Bufala",
          description: "Served with Tomato Arrabiata Sauce",
          price: "$21.00",
        },
        {
          name: "Diced Pacific Ahu Tuna",
          description: "Served with Avocado, Grape Tomato Medley",
          price: "$23.00",
        },
      ],
    },
    pasta: {
      icon: "icons/pasta_icon.png",
      thumbnail: "/pasta.png",
      thumbnailMenu: "/pasta_menu.png",
      items: [
        {
          name: "Spaghettini Carbonara",
          description: "Tossed with Pancetta, Egg Yolk & Fresh Pecorino",
          price: "$26.00",
        },
        {
          name: "Gluten Free Pasta",
          description:
            "Served with green Asparagus, Sun dried  Tomato & Goat Cheese",
          price: "$29.00",
        },
        {
          name: "Classic Lasagna",
          description: "al Forno Beef Ragu & Bechamel Sauce",
          price: "$31.00",
        },
        {
          name: "Tagliolini",
          description: "with Rock Prawns & Saffron, Julien Zucchini",
          price: "$37.00",
        },
      ],
    },
    pizza: {
      icon: "icons/pizza_icon.png",
      thumbnail: "/pizza_home.png",
      thumbnailMenu: "/pizza_menu.png",
      items: [
        {
          name: "Pepperoni & Basil",
          description: "Azzuro’s pepperoni, buratta, basil, red sauce",
          price: "$28.00",
        },
        {
          name: "Quatro Formaggio",
          description:
            "Buratta, parmezan, blue cheese, mascarpone, basil, red sauce",
          price: "$21.00",
        },
        {
          name: "Mushrooms Azzuro",
          description: "Shitake Mushrooms, black garlic, green onions, mozz",
          price: "$23.00",
        },
        {
          name: "Prosciutto di Parmi",
          description: "Prosciutto, Burrata, Rucola, Parmesan",
          price: "$33.00",
        },
      ],
    },
    dessert: {
      icon: "icons/dessert_icon.png",
      thumbnail: "/dessert_home.png",
      thumbnailMenu: "/dessert_menu.png",
      items: [
        {
          name: "Gelato",
          description: "Mango, Raspberry, Pistachio, Chocolate, Vanilla",
          price: "$13.00",
        },
        {
          name: "Panna Cotta",
          description:
            "Velvety, Vanilla-Infused, Italian Dessert Topped with a Berry Compote",
          price: "$15.00",
        },
        {
          name: "Italian Almond Tart",
          description:
            "Buttery Almond Cream Filling, Decorated with Toasted Almond",
          price: "$17.00",
        },
        {
          name: "Tiramisu ",
          description:
            "Coffee, Egg Yolk, Heavy Cream, Cocoa Powder, Dark Chocolate, Mascarpone Cheese",
          price: "$19.00",
        },
      ],
    },
  };

  return (
    <div className="grid grid-cols-12 mb-36">
      <div className="col-span-12">
        <div className="grid grid-cols-12">
          <div
            className={`col-span-12 sm:col-span-5 ${
              !reverse && "sm:col-start-8"
            }`}
          >
            <Zoom>
              <div className="flex flex-col items-center">
                <Image
                  className="w-16 lg:w-24 h-auto"
                  src={menuItems[name as keyof typeof menuItems].icon}
                  alt="Logo"
                  width={0}
                  height={0}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                  unoptimized
                />
                <h3 className="font-italianno text-4xl mb-8 capitalize">
                  {name}
                </h3>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
      <div
        className={`col-span-12 sm:col-span-5 xl:col-span-4 ${
          reverse && "sm:col-start-8 xl:col-start-9 order-2"
        }`}
      >
        <div className="flex items-center h-full">
          <Slide direction={!reverse ? "left" : "right"}>
            <Image
              className="w-full h-auto"
              src={
                page
                  ? menuItems[name as keyof typeof menuItems].thumbnailMenu
                  : menuItems[name as keyof typeof menuItems].thumbnail
              }
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
      <div
        className={`col-span-12 sm:col-span-5 ${
          reverse ? "order-1" : "sm:col-start-8"
        } relative`}
      >
        <div>
          <Fade direction={reverse ? "left" : "right"} cascade damping={0.1}>
            <ul className=" last:border-b-2">
              {menuItems[name as keyof typeof menuItems].items
                .slice(
                  0,
                  !page
                    ? 3
                    : menuItems[name as keyof typeof menuItems].items.length
                )
                .map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-between border-t-2 pt-8 pb-16 lg:pb-28"
                  >
                    <div>
                      <h4 className="font-italiana text-lg lg:text-xl mb-2">
                        {item.name}
                      </h4>
                      <p className="text-sm xl:text-lg font-montserrat font-medium">
                        {item.description}
                      </p>
                    </div>
                    <span className="font-italiana w-1/3 text-lg lg:text-xl text-end">
                      {item.price}
                    </span>
                  </li>
                ))}
            </ul>
          </Fade>
        </div>
        {!page && (
          <Link
            className="flex items-center text-xl py-5 text-[#8D835E] absolute bottom-0"
            href={"/"}
          >
            <span className="mr-2">View More</span>
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
        )}
      </div>
    </div>
  );
}
