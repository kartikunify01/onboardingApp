'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
const CheckIn = () => {
  return (
    <Button 
        variant="outline"
        className='outline outline-[#3e16d9] outline-solid text-[#3e16d9] px-3 hover:bg-violet-100 hover:font-bold hover:text-[#3e16d9]'
    >Checked In Today?</Button>
  )
}

export default CheckIn