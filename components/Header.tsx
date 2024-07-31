"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import MobileMenu from "./MobileMenu";
import { Slide, Zoom } from "react-awesome-reveal";

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = usePathname();

  const toogleMenu = () => {
    setOpen(!open);
  };

  // useEffect(() => {
  //   const header = document.getElementById("header");
  //   const navbar = document.getElementById("navbar");
  //   function checkScroll() {
  //     if (window.scrollY > 50) {
  //       header.classList.add("bg-base-100");
  //       navbar.classList.add("md:px-24");
  //       navbar.classList.remove("container", "md:px-40");
  //     }
  //     if (window.scrollY < 50) {
  //       header.classList.remove("bg-base-100");
  //       navbar.classList.add("container", "md:px-40");
  //       navbar.classList.remove("md:px-24");
  //     }
  //   }
  //   window.addEventListener("scroll", checkScroll);
  // }, []);

  return (
    <header className="container">
      <nav className="grid grid-cols-12 gap-5 static">
        <div className="col-span-12">
          <div className="sm:hidden flex justify-between items-center">
            <Link href={"/"}>
              <Image
                className="w-10 h-auto p-1"
                src={logo}
                alt="Logo"
                width={0}
                height={0}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </Link>
            <div onClick={toogleMenu} role="button" className="sm:hidden p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </div>
          <ul className="hidden sm:flex items-center justify-between h-16 font-italiana">
            <Slide
              direction="right"
              className="origin-left -rotate-45 -skew-x-[30deg] scale-75 opacity-0"
            >
              <li>
                <Link href={"/"} className={`relative md:px-2 after:absolute ${router == "/" ? "after:w-full" : "after:w-0"} after:h-3/5 after:left-0 after:bottom-0 after:-z-10 after:bg-[#EBC981] after:hover:w-full after:duration-500`}>WELCOME</Link>
              </li>
              <li>
                <Link href={"/about"}  className={`relative md:px-2 after:absolute ${router == "/about" ? "after:w-full" : "after:w-0"} after:h-3/5 after:left-0 after:bottom-0 after:-z-10 after:bg-[#EBC981] after:hover:w-full after:duration-500`}>ABOUT US</Link>
              </li>
              <li>
                <Link href={"/menu"}  className={`relative md:px-2 after:absolute ${router == "/menu" ? "after:w-full" : "after:w-0"} after:h-3/5 after:left-0 after:bottom-0 after:-z-10 after:bg-[#EBC981] after:hover:w-full after:duration-500`}>MENU</Link>
              </li>
            </Slide>
            <Zoom>
              <li>
                <Link href={"/"}>
                  <Image
                    className="w-10 h-auto"
                    src={logo}
                    alt="Logo"
                    width={0}
                    height={0}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                </Link>
              </li>
            </Zoom>
            <Slide
              direction="left"
              className="origin-right rotate-45 skew-x-[30deg] scale-75 opacity-0"
            >
              <li>
                <Link href={"/story"} className={`relative md:px-2 after:absolute ${router == "/story" ? "after:w-full" : "after:w-0"} after:h-3/5 after:left-0 after:bottom-0 after:-z-10 after:bg-[#EBC981] after:hover:w-full after:duration-500`}>STORY</Link>
              </li>
              <li>
                <Link href={"/contact"} className={`relative md:px-2 after:absolute ${router == "/contact" ? "after:w-full" : "after:w-0"} after:h-3/5 after:left-0 after:bottom-0 after:-z-10 after:bg-[#EBC981] after:hover:w-full after:duration-500`}>CONTACT</Link>
              </li>
              <li>
                <Link href={"/reservation"} className={`relative md:px-2 after:absolute ${router == "/reservation" ? "after:w-full" : "after:w-0"} after:h-3/5 after:left-0 after:bottom-0 after:-z-10 after:bg-[#EBC981] after:hover:w-full after:duration-500`}>RESERVATIONS</Link>
              </li>
            </Slide>
          </ul>
          <MobileMenu router={router} toogleMenu={toogleMenu} open={open} />
        </div>
      </nav>
    </header>
  );
}
