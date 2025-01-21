import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
export default function Varsity() {
  return (
    <div className="flex text-[#424242] px-[14%] py-[1.5%] gap-20">
      <Image
        src={"/varsity.svg"}
        alt="logo"
        width={1000}
        height={1000}
        className="w-[435px] m-5"
      />

      <div className='w-[528px] '>
        <h1 className='font-semibold text-[35px] mb-5'>Free and open market education</h1>
        <p className='mb-5'>
          Varsity, the largest online stock market education book in the world
          covering everything from the basics to advanced trading.
        </p>
        <Link
          href={"/"}
          className="hover:text-[#424242] text-[#387ED1] text-[16px] font-medium  "
        >
          {" "}
          Varsity &rarr;{" "}
        </Link>
        <p className='my-5'>
          {" "}
          TradingQ&A, the most active trading and investment community in India
          for all your market related queries.
        </p>
        <Link
          href={"/"}
          className="hover:text-[#424242] text-[#387ED1] text-[16px] font-medium "
        >
          {" "}
          TradingQ&A &rarr;{" "}
        </Link>
      </div>
    </div>
  );
}
