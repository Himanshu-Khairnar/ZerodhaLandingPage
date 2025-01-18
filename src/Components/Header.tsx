import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const links = [
  {
    name: "Signup",
    href: "/login",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Support",
    href: "/support",
  },
]
export default function Header() {
  return (
    <div className='px-32 w-full gap-28  flex justify-between items-center    shadow '>
      <div>
        <Image src={'/logo.svg'} width={100} height={100} className='w-32 text-[16px]' alt='logo' />

      </div>

      <div className='flex items-center text-[14.4px] gap-2 pl-32' >
       
        {
          links.map((link) => {
            return (
              <Link href={link.href} className='mx-3 hover:text-[#387ED1]'>{link.name}</Link>
            )
          })
          
        }
        <div className='gap-3'>
          <Menu/>
        </div>

      </div>
      <div>

      </div>
    </div>

  )
}
