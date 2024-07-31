import Link from "next/link";

export default function MobileMenu({
  router,
  toogleMenu,
  open,
}: {
  router: any;
  toogleMenu: any;
  open: boolean;
}) {
  return (
    <div
      className={`sm:hidden fixed bg-white left-0 -top-2 -bottom-2 h-screen duration-700 z-50 ${
        !open && "!-left-full"
      }`}
    >
      <ul
        tabIndex={0}
        className="flex flex-col overflow-hidden items-center p-4 shadow w-screen h-screen"
      >
        <div className="w-full h-8 relative flex justify-end mb-8">
          <button
            onClick={toogleMenu}
            className={`absolute right-8 top-0 text-3xl text-right delay-500 duration-500 ${
              !open && "!-top-[60px]"
            }`}
          >
            x
          </button>
        </div>
        <li
          className={`mb-5 opacity-100 transition-all duration-1000 ${
            !open && "mt-[100vh] opacity-0"
          }`}
        >
          <Link onClick={toogleMenu} href={"/"} className={`relative px-2 after:absolute ${router == "/" ? "after:w-full" : "after:w-0"} after:h-3/5 after:left-0 after:bottom-0 after:-z-10 after:bg-[#EBC981] after:hover:w-full after:duration-500`}>
            WELCOME
          </Link>
        </li>
        <li
          className={`mb-5 opacity-100 transition-all duration-1000 ${
            !open && "mt-[100vh] opacity-0"
          }`}
        >
          <Link onClick={toogleMenu} href={"/about"} className={`relative px-2 after:absolute ${router == "/about" ? "after:w-full" : "after:w-0"} after:h-3/5 after:left-0 after:bottom-0 after:-z-10 after:bg-[#EBC981] after:hover:w-full after:duration-500`}>
            ABOUT US
          </Link>
        </li>
        <li
          className={`mb-5 opacity-100 transition-all duration-1000 ${
            !open && "mt-[100vh] opacity-0"
          }`}
        >
          <Link onClick={toogleMenu} href={"/menu"} className={`relative px-2 after:absolute ${router == "/menu" ? "after:w-full" : "after:w-0"} after:h-3/5 after:left-0 after:bottom-0 after:-z-10 after:bg-[#EBC981] after:hover:w-full after:duration-500`}>
            MENU
          </Link>
        </li>
        <li
          className={`mb-5 opacity-100 transition-all duration-1000 ${
            !open && "mt-[100vh] opacity-0"
          }`}
        >
          <Link onClick={toogleMenu} href={"/story"} className={`relative px-2 after:absolute ${router == "/story" ? "after:w-full" : "after:w-0"} after:h-3/5 after:left-0 after:bottom-0 after:-z-10 after:bg-[#EBC981] after:hover:w-full after:duration-500`}>
            STORY
          </Link>
        </li>
        <li
          className={`mb-5 opacity-100 transition-all duration-1000 ${
            !open && "mt-[100vh] opacity-0"
          }`}
        >
          <Link onClick={toogleMenu} href={"/contact"} className={`relative px-2 after:absolute ${router == "/contact" ? "after:w-full" : "after:w-0"} after:h-3/5 after:left-0 after:bottom-0 after:-z-10 after:bg-[#EBC981] after:hover:w-full after:duration-500`}>
            CONTACT
          </Link>
        </li>
        <li
          className={`mb-5 opacity-100 transition-all duration-1000 ${
            !open && "mt-[100vh] opacity-0"
          }`}
        >
          <Link onClick={toogleMenu} href={"/reservation"} className={`relative px-2 after:absolute ${router == "/reservation" ? "after:w-full" : "after:w-0"} after:h-3/5 after:left-0 after:bottom-0 after:-z-10 after:bg-[#EBC981] after:hover:w-full after:duration-500`}>
            RESERVATIONS
          </Link>
        </li>
      </ul>
    </div>
  );
}
