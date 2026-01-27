import Body from '@/components/Body'
import ButtonUsage from '@/components/Button'
import SimpleAlert from '@/components/check/Temp'
import CheckInForm from '@/components/CheckInForm'
import CustomTextWidget from '@/components/CustomForm'
// import CustomForm from '@/components/CustomForm'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
      // <CustomTextWidget />
      <div className='flex flex-col h-screen'>
        <Navbar />
        <Body />
        {/* <div>
          <CheckInForm />
        </div> */}
        
      </div>
  )
}

export default page

