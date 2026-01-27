import { onboardingPlans } from '@/lib/assets'
import React from 'react' 
import { Button } from './ui/button';

const PlanChooser = () => {
  return (
    <div className='flex gap-2'>
      {onboardingPlans.map((item)=>{
        return (
          <Button
            className='' 
            variant={'outline'}
            key={item.id}>
            {item.title}
          </Button>
        );
      })}
    </div>
  )
}

export default PlanChooser