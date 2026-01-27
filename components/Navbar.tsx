import Image from 'next/image'
import React from 'react'
import LogoImage from './LogoImage'
import NameImage from './NameImage'
import CheckIn from './CheckIn'
import ContactDets from './ContactDets'
import { Separator } from "@/components/ui/separator"
import Logout from './Logout'

const Navbar = () => {
  return (
    <div className='flex bg-white justify-between items-center px-6 py-4 border-b'>
        <div className="flex items-center gap-2">
            <LogoImage />
            <NameImage />
            <div className="h-10 w-[.5] bg-black" />
            <h6 className='text-[#3e16d9] font-semibold text-start text-2xl'>Employee Onboarding</h6>
        </div>
        <div className="flex items-center justify-end gap-4">
            <CheckIn />
            <ContactDets />
            <Logout />
        </div>
    </div>
  )
}

export default Navbar