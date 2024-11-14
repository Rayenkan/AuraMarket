import { Separator } from "@/components/ui/separator";
import React from "react";
export function Footer({}) {
  return (
    <div className="relative flex flex-col px-16 my-10 h-fit w-full">
      <div className="flex flex-row space-x-56 justify-center">
        <div className="flex items-start justify-start flex-col">
          <p className="text-[24px] font-bold items-start">AuraMarket </p>
          <div className="flex flex-col text-gray-400 mt-10 mb-24">
            <p>
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>
        </div>
        <div className="flex items-start justify-start flex-col">
          <p className="text-gray-400 font-bold items-start">Link</p>
          <div className="flex flex-col mt-10 mb-24 space-y-12 [&>*]:font-medium">
            <p>Home</p>
            <p>Shop</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="flex items-start justify-start flex-col">
          <p className="text-gray-400 font-bold items-start">Help </p>
          <div className="flex flex-col mt-10 mb-24 space-y-12 [&>*]:font-medium">
            <p>Payment options</p>
            <p>returns</p>
            <p>privacy policy</p>
          </div>
        </div>
        <div className="flex items-start justify-start flex-col">
          <p className="text-gray-400 font-bold items-start">NewsLetter </p>
          <div className="flex flex-row space-x-4 mt-10 mb-24  ">
            <input
              type="text"
              name=""
              id=""
              className="border-b-2 border-black p-2 "
              placeholder="enter your email"
            />
            <button className="border-b-2 p-2 border-black text-black font-semibold">
              {" "}
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-[95%]">
        <Separator />
        <p className="my-4 text-[16px] w-full text-left ">
          2024 AuraMarket, All rights reserved
        </p>
      </div>
    </div>
  );
}
