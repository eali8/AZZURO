"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { Slide, Zoom } from "react-awesome-reveal";
import toast from "react-hot-toast";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const resetForm = () => {
    (document.getElementById("contactForm") as HTMLFormElement)?.reset();
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);

    const response = await fetch("/api/contact", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    const res = await response.json();
    resetForm();
    setLoading(false);
    toast.success("Mail Sent Successfully!");
  };

  return (
    <div className="grid grid-cols-12 gap-5 py-36">
      <div className="col-span-12 sm:col-span-6">
        <Slide direction="left" className="flex items-center h-full" triggerOnce={true}>
          <Image
            className="w-full h-auto lg:h-full"
            src={"/contact_thumb.png"}
            alt="Contact Thumb"
            width={0}
            height={0}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
            unoptimized
          />
        </Slide>
      </div>
      <div className="col-span-12 sm:col-span-6 px-5 md:px-0">
        <div className="flex flex-col justify-between h-full">
          <Zoom triggerOnce={true}>
            <div className="flex flex-col items-center mb-20">
              <h2 className="font-italiana text-5xl text-center mb-5">
                Contact
              </h2>
              <p className="font-montserrat text-lg text-center">
                Let’s celebrate life and food together!
              </p>
            </div>
          </Zoom>
          <Slide direction="right" triggerOnce={true}>
            <form
              id="contactForm"
              className="border-2 px-2 md:px-10 py-16"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12">
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
                <div className="col-span-12">
                  <div className="bg-base-100 py-6">
                    <div className="relative bg-inherit">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="peer w-full bg-transparent placeholder-transparent p-2 focus:outline-none border-b-2"
                        placeholder="Email Address"
                      />
                      <label className="absolute cursor-text left-0 -top-4 text- bg-inherit px-1 peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:opacity-60 peer-focus:text-md transition-all">
                        Email Address
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
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
                        Phone Number
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="bg-base-100 py-4 mb-8">
                    <div className="relative bg-inherit">
                      <textarea
                        className="peer w-full bg-transparent placeholder-transparent p-2 focus:outline-none border-b-2 h-36"
                        placeholder="Your message"
                        name="message"
                      />
                      <label className="absolute cursor-text left-0 -top-4 text- bg-inherit px-1 peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:opacity-60 peer-focus:text-md transition-all">
                        Your Message
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="relative group overflow-hidden w-full h-16 border bg-[#8D835E] rounded-badge text-white text-xl font-normal"
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
                  <span className="relative z-10 duration-1000 ease-in">
                    Send
                  </span>
                )}
              </button>
            </form>
          </Slide>
        </div>
      </div>
    </div>
  );
}
