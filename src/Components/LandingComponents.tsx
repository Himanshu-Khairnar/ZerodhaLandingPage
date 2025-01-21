import Image from 'next/image'
import React from 'react'

export default function LandingComponents() {
  return (
    <div className='flex flex-col  justify-center items-center m-10'>
      <Image src="/landing.png" alt="logo" width={1000} height={1000} className="w-[800px] m-5"  />

      <div className='flex flex-col justify-center items-center m-10 text-[#424242]'>
        <h1 className="font-semibold text-[47px] ">Invest in everything</h1>
        <p className=' text-[20px] m-1'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className='px-8 py-2 m-10 text-[19px] font-semibold text-white bg-blue-500 rounded hover:bg-gray-800'>
          Sign up for free
        </button>
      </div>
    </div>
  )
}
