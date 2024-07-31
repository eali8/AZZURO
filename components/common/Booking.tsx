"use client";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";

export default function Booking({ className }: { className?: string }) {
  return (
    <Slide direction="down">
      <div className={`flex flex-col items-center my-16 ${className ?? ""}`}>
        <h3 className="font-italiana text-2xl md:text-3xl text-center mb-5">
          Call us and book your table for tonight
        </h3>
        <Link
          href="/reservation"
          className="relative group mt-10 overflow-hidden px-10 py-2 border bg-[#8D835E] rounded-badge text-white text-xl font-normal"
        >
          <span className="relative z-10 duration-1000 ease-in">
            Book A Table
          </span>
        </Link>
      </div>
    </Slide>
  );
}
