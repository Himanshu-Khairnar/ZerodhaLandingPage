import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
    return (
        <div className="flex items-center justify-between w-full container px-[14%] py-[1.5%] bg-white sticky top-0 text-[#666666]  shadow z-10" >
            
            <div className="flex items-center">
                <Image src="/logo.svg" alt="logo" width={100} height={100} className="w-[120px]" />
            </div>

            <div className="hidden md:flex gap-[40px] text-[16px] ">
                <Link href="/" className="hover:text-blue-500">
                    Signup
                </Link>
                <Link href="/" className="hover:text-blue-500">
                    About
                </Link>
                <Link href="/" className="hover:text-blue-500">
                    Products
                </Link>
                <Link href="/" className="hover:text-blue-500">
                    Pricing
                </Link>
                <Link href="/" className="hover:text-blue-500">
                    Support
                </Link>
                <Menu className="w-6 h-6 text-[#666666] " />
            </div>

            <div className="flex md:hidden">
                <Menu className="w-6 h-6 text-[#666666] " />
            </div>
        </div>
    );
}
