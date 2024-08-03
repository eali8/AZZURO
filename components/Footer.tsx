"use client"
import Image from "next/image";
import { Zoom } from "react-awesome-reveal";

export default function Footer() {
  return (
    <footer className="container my-8">
      <Zoom triggerOnce={true}>
        <div className="flex justify-center lg:justify-between items-center lg:items-end flex-col lg:flex-row">
          <div className="flex-1">
            <p className="font-italiana text-center lg:text-left">
              + 1 778 682 3101
            </p>
            <p className="font-montserrat">
              or send us a message on What’s Up{" "}
            </p>
          </div>
          <div className="flex-1 py-10 lg:py-0">
            <p className="text-center">Mon - San: 12pm - 12am </p>
          </div>
          <ul className="flex-1 flex justify-end items-center">
            <li className="mr-3">
              <a href="#">
                <Image
                  src={"/icons/youtube_icon.png"}
                  width={25}
                  height={25}
                  alt="icon"
                />
              </a>
            </li>
            <li className="mr-3">
              <a href="#">
                <Image
                  src={"/icons/instagram_icon.png"}
                  width={25}
                  height={25}
                  alt="icon"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  src={"/icons/twitter_icon.png"}
                  width={25}
                  height={25}
                  alt="icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </Zoom>
    </footer>
  );
}
