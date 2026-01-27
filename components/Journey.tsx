import React from 'react'
import PlanDetails from './PlanDetails'
import { basicOnb } from '@/lib/basicOnboarding';

const Journey = () => {
  return (
    <div className='w-[70%] flex flex-col'>
        <div className="flex flex-col">
            <h5 className='text-3xl items-start whitespace-pre font-medium'>Your Onboarding Journey</h5>
            <p className='items-start whitespace-pre font-normal text-base'>Please find your day wise tasks below</p>
        </div>
        <PlanDetails />
    </div>
  )
}

export default Journey