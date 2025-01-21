import React from 'react'

export default function SignUp() {
  return (
    <div className="flex flex-col gap-6 px-[14%] py-[1.5%] justify-center items-center" >
      <h1 className="font-semibold text-[35px] text-[#424242]">
        {" "}
        Open a Zerodha account
      </h1>
      <p className="text-[#666666] text-[16px]">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <button className="px-8 py-2  text-[19px] font-semibold text-white bg-blue-500 rounded hover:bg-gray-800">
        Sign up for free
      </button>
    </div>
  );
}
