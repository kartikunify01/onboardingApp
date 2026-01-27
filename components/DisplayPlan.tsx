import React from 'react'
import Calender from './Calender'
import TaskAndMeet from './TaskAndMeet'
import { basicOnb } from '@/lib/basicOnboarding';
import { TaksMeetProps } from '@/lib/types';

const DisplayPlan = () => {
  const planTask = basicOnb;
  const tasksAndMeets:TaksMeetProps[][] = planTask.map((item)=> Object.values(item)[0]);
  console.log(tasksAndMeets)
  const day = 2;
  return (
    <div className='flex flex-col flex-1'>
      <Calender />
      <TaskAndMeet tasksAndMeets={tasksAndMeets[day-1]} />
    </div>
  )
}

export default DisplayPlan