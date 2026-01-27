import React from 'react'
import { TaksMeetProps } from '@/lib/types'
import DispTasks from './DispTasks';
import DispMeets from './DispMeets';

const TaskAndMeet = ({tasksAndMeets} : {tasksAndMeets:TaksMeetProps[]}) => {
  console.log("ins : ",tasksAndMeets)
  const meets = tasksAndMeets.filter((item)=>{
    return item.type == "Meeting"
  });
  const tasks:TaksMeetProps[] = tasksAndMeets.filter((item)=>{
    return item.type != "Meeting"
  });
  // tasks.reverse();
  // meets.reverse();
  return (
    <div className="flex flex-col md:flex-row bg-[#f7f6fe] p-6 gap-6 rounded-lg">
      <div className="flex-1 min-w-0 bg-white rounded-xl p-4 max-h-[500px] overflow-y-auto">
        <DispTasks todos={tasks} />
      </div>
      <div className="flex-1 min-w-0 bg-white rounded-xl p-4 max-h-[500px] overflow-y-auto">
            <DispMeets todos = {meets}/>
        </div>
    </div>
  )
}

export default TaskAndMeet