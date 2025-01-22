import React from "react";
import Image from "next/image";

import {
  FaXTwitter,
  FaSquareFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";
import Link from "next/link";

const CompanyItems = [
  { name: "About", link: "/" },
  { name: "Products", link: "/" },
  { name: "Pricing", link: "/" },
  { name: "Referral programme", link: "/" },
  { name: "Careers", link: "/" },
  { name: "Zerodha.tech", link: "/" },
  { name: "Open source", link: "/" },
  { name: "Press & media", link: "/" },
  { name: "Zerodha Cares (CSR)", link: "/" },
];
const SupportItems = [
  { name: "Contact us", link: "/" },
  { name: "Support portal", link: "/" },
  { name: "Z-Connect blog", link: "/" },
  { name: "List of charges", link: "/" },
  { name: "Downloads & resources", link: "/" },
  { name: "Videos", link: "/" },
  { name: "Market overview", link: "/" },
  { name: "How to file a complaint?", link: "/" },
  { name: "Status of your complaints", link: "/" },
];
const AccountItems =[
  { name: "Open an account", link: "/" },
  { name: "Fund transfer", link: "/" },
]

export default function Footer() {
  return (
    <div className="bg-[#fbfbfb] px-[14%] py-[1.5%] flex gap-28">
      <div className="flex flex-col  gap-5">
        <Image
          src="/logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-[152px] h-[20px]"
        />
        <p className="w-[242px] text-[#666666] text-[12px]">
          {" "}
          © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.{" "}
        </p>
        <div className="flex gap-4 text-[#424242] text-[22px]">
          <FaXTwitter className="hover:text-blue-500" />
          <FaSquareFacebook className="hover:text-blue-500" />
          <FaInstagram className="hover:text-blue-500" />
          <FaLinkedinIn className="hover:text-blue-500" />
        </div>

        <div className="flex gap-4 text-[#424242] text-[22px] pt-3 border-t-[1px]">
          <FaYoutube className="hover:text-blue-500" />
          <FaWhatsapp className="hover:text-blue-500" />
          <FaTelegram className="hover:text-blue-500" />
        </div>
      </div>
      <div>
        <h2 className="text-[18px] text-[#424242] font-medium mb-4">Company</h2>

        {CompanyItems.map((item, index) => (
          <div key={index} className="flex gap-2">
            <Link
              href={item.link}
              className="hover:text-blue-500 text-[#666666] text-[16px] font-medium "
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-[18px] text-[#424242] font-medium mb-4">Support</h2>

        {SupportItems.map((item, index) => (
          <div key={index} className="flex gap-2">
            <Link
              href={item.link}
              className="hover:text-blue-500 text-[#666666] text-[16px] font-medium"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-[18px] text-[#424242] font-medium mb-4">Account</h2>

        {AccountItems.map((item, index) => (
          <div key={index} className="flex gap-2">
            <Link
              href={item.link}
              className="hover:text-blue-500 text-[#666666] text-[16px] font-medium"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
