"use client" 
import { useState } from 'react'
import Calender from './Calender'
import TaskAndMeet from './TaskAndMeet'
import { basicOnb } from '@/lib/basicOnboarding';
import { TaksMeetProps } from '@/lib/types';

const DisplayPlan = () => {
  const planTask = basicOnb;
  const tasksAndMeets:TaksMeetProps[][] = planTask.map((item)=> Object.values(item)[0]);
  console.log(tasksAndMeets)
  const [day,setDay] = useState(0);
  async function handleDateChange(new_day : number){
    setDay(new_day);
  }
  return (
    <div className='flex flex-col flex-1'>
      <Calender selected = {day} clicks = {handleDateChange}/>
      <TaskAndMeet tasksAndMeets={tasksAndMeets[day]} />
    </div>
  )
}

export default DisplayPlan