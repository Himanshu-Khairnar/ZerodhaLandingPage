import EcoSystem from '@/Components/EcoSystem'
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
    </div>
  )
}
