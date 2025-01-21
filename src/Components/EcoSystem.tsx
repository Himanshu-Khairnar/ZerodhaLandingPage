import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const data = [
    {
        heading: 'Customer-first always',
        desc: 'That why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.'
    },
    {
        heading: 'No spam or gimmicks',
        desc: 'No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.'
    },
    {
        heading: 'The Zerodha universe',
        desc: 'Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.'
    },
    {
        heading: 'Do better with money  ',
        desc: 'With initiatives like ,<span>Nudge and Kill Switch , we do not just facilitate transactions, but actively help you do better with your money.'
    },
]
export default function EcoSystem() {
  return (
    <div className='flex container items-center justify-center  flex-col lg:flex-row'>
      <div className="w-[450px]">
              <h1 className='font-semibold text-[35px] text-[#424242] mb-10'>Trust with confidence </h1>
              {
                  data.map((item,index) => (
                      <div key={index}>
                          <h1 className='font-semibold text-[22px] text-[#424242] my-2'>{item.heading}</h1>
                          <p className='text-[#666666] text-[18px] mb-[20px]'>{item.desc}</p>
                      </div>
                  ))
              }
      </div>
      <div className='w-[623px]'>
        <Image src={'/ecosystem.png'} alt="logo" width={1000} height={1000} className="w-[800px] m-5"   />
              <div className='flex gap-10 text-[#387ED1] text-[16px] items-center justify-center font-medium'>
                  <Link href={'/'} className='hover:text-[#424242]'> Explore our products &rarr; </Link>
                  <Link href={'/'} className='hover:text-[#424242]'>Try Kite demo &rarr;</Link>
              </div>
              
      </div>
    </div>
  )
}
