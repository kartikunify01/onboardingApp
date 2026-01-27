import React from 'react'
import Journey from './Journey'
import RmDetails from './RmDetails'
import { basicOnb } from '@/lib/basicOnboarding';

const Body = () => {
  const planTask = basicOnb;
  return (
    <div className='flex flex-1 px-6 py-4 gap-4'>
        <Journey />
        <RmDetails />
    </div>
  )
}

export default Body