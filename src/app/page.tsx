import Aboutus from '@/Components/Aboutus'
import EcoSystem from '@/Components/EcoSystem'
import Footer from '@/Components/Footer'
import LandingComponents from '@/Components/LandingComponents'
import Pricing from '@/Components/Pricing'
import SignUp from '@/Components/SignUp'
import Varsity from '@/Components/Varsity'
import React from 'react'

export default function page() {
  return (
    <div>
      <LandingComponents  />
      <EcoSystem/>
      <Pricing/>
      <Varsity/>
      <SignUp/>
      <Footer/>
      <Aboutus/>
    </div>
  )
}
