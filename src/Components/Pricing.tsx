import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Pricing() {
  return (
    <div className="flex flex-col px-[14%] py-[5%] items-center justify-center m">
      <Image
        src={"/press-logos.png"}
        alt="logo"
        width={1000}
        height={1000}
        className="w-[710px] mb-28"
      />
      <div className="text-[#424242] flex items-center justify-center">
        <div className="w-[435px] flex flex-col gap-5">
          <h1 className="font-semibold text-[35px] text-[#424242] my-2 ">
            Unbeatable pricing
          </h1>

          <p className="">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <Link
            href={"/"}
            className="hover:text-[#424242] text-[#387ED1] text-[16px] font-medium "
          >
            {" "}
            See Pricing &rarr;{" "}
          </Link>
        </div>
        <div className="flex text-[10px] justify-between gap-20 text-[#666666]">
          <div className="flex relative ">
            <Image
              src={"/pricing-0.svg"}
              alt="logo"
              width={1000}
              height={1000}
              className="w-[120px]"
            />
            <p className="w-[64px] absolute bottom-5 left-24">
              Free account opening
            </p>
          </div>
          <div className="flex relative">
            <Image
              src={"/pricing-0.svg"}
              alt="logo"
              width={1000}
              height={1000}
              className="w-[120px]"
            />
            <p className="w-[111px] absolute bottom-5 left-24">
              Free equity delivery and direct mutual funds
            </p>
          </div>
          <div className="flex relative">
            <Image
              src={"/pricing-0.svg"}
              alt="logo"
              width={1000}
              height={1000}
              className="w-[120px]"
            />
            <p className="w-[64px] absolute bottom-5 left-24    ">
              Intraday and F&O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
