"use client";
import SelectTime from "@/components/common/SelectTime";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { Slide, Zoom } from "react-awesome-reveal";
import toast from "react-hot-toast";

export default function Reservation() {
  const [loading, setLoading] = useState(false);
  const resetForm = () => {
    (document.getElementById("reservationForm") as HTMLFormElement)?.reset();
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);

    const response = await fetch("/api/reservation", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    const res = await response.json();
    resetForm();
    setLoading(false);
    toast.success("Reservation request sent successfully!");
  };

  return (
    <div className="grid grid-cols-12 gap-5 py-36">
      <div className="col-span-12 sm:col-span-7">
        <div className="flex flex-col justify-between px-5">
          <Zoom triggerOnce={true}>
            <div className="flex flex-col items-center mb-20">
              <h2 className="font-italiana text-5xl text-center mb-5">
                Make a <span className="text-leadLight">Reservation</span>
              </h2>
            </div>
          </Zoom>
          <Slide direction="left" triggerOnce={true}>
            <form
              id="reservationForm"
              className="border-2 px-10 py-16 font-montserrat"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-12 gap-4 lg:gap-10">
                <div className="col-span-12 lg:col-span-6">
                  <div className="bg-base-100 py-6">
                    <div className="relative bg-inherit">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="peer w-full bg-transparent placeholder-transparent p-2 focus:outline-none border-b-2"
                        placeholder="Your Name"
                      />
                      <label className="absolute cursor-text left-0 -top-4 text- bg-inherit px-1 peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:opacity-60 peer-focus:text-md transition-all">
                        Your Name
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="bg-base-100 py-6">
                    <div className="relative bg-inherit">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="peer w-full bg-transparent placeholder-transparent p-2 focus:outline-none border-b-2"
                        placeholder="Your Phone"
                      />
                      <label className="absolute cursor-text left-0 -top-4 text- bg-inherit px-1 peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:opacity-60 peer-focus:text-md transition-all">
                        Your Phone
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-4">
                  <label className="w-full">
                    <div className="relative py-2 bg-base-100">
                      <select
                        className="peer py-4 w-full bg-transparent placeholder-transparent px-2 ring-neutral/60 border-b focus:outline-none focus:ring-base-100 focus:border-base-content/60"
                        name="person"
                        id="person"
                      >
                        <option className="first:hidden"></option>
                        <option value="1 person">1 person</option>
                        <option value="2 person">2 person</option>
                        <option value="3 person">3 person</option>
                        <option value="4 person">4 person</option>
                        <option value="5 person">5 person</option>
                      </select>
                      <span className="absolute cursor-text left-0 top-5 bg-inherit px-1 peer-placeholder-shown:text-black peer-placeholder-shown:top-0 peer-focus:!-top-2 peer-focus:opacity-60 peer-has-[:checked:empty]:top-5 peer-has-[:checked]:-top-2 peer-has-[:checked]:text-base-content/60 peer-has-[:checked:empty]:text-base-content peer-focus:!text-base-content/60 transition-all peer-has-[:checked:empty]:text-base">
                        Select Person
                      </span>
                    </div>
                  </label>
                </div>
                <div className="col-span-12 lg:col-span-4">
                  <div className="py-1">
                    <div className="relative bg-inherit">
                      <input
                        type="date"
                        id="date"
                        name="date"
                        className="peer w-full bg-transparent placeholder-transparent p-2 py-4 focus:outline-none border-b-2"
                        placeholder="Date"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-4">
                  <label className="w-full">
                    <div className="relative py-2 bg-base-100">
                      <SelectTime />
                      <span className="absolute cursor-text left-0 top-5 bg-inherit px-1 peer-placeholder-shown:text-black peer-placeholder-shown:top-0 peer-focus:!-top-2 peer-focus:opacity-60 peer-has-[:checked:empty]:top-5 peer-has-[:checked]:-top-2 peer-has-[:checked]:text-base-content/60 peer-has-[:checked:empty]:text-base-content peer-focus:!text-base-content/60 transition-all peer-has-[:checked:empty]:text-base">
                        Select Time
                      </span>
                    </div>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="relative group mt-10 overflow-hidden w-full h-16 border bg-[#8D835E] rounded-badge text-white text-xl font-normal"
              >
                {loading ? (
                  <span className="flex w-full justify-center items-center z-10 duration-1000 ease-in mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 animate-spin mr-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="relative z-10 duration-1000 ease-in uppercase">
                    Book A Table
                  </span>
                )}
              </button>
            </form>
          </Slide>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-5">
        <div className="h-full flex items-center">
          <Slide direction="right" triggerOnce={true}>
            <Image
              className="w-full h-auto my-auto"
              src={"/reservation_thumb.png"}
              alt="Reservation Thumb"
              width={0}
              height={0}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
              unoptimized
            />
          </Slide>
        </div>
      </div>
    </div>
  );
}
