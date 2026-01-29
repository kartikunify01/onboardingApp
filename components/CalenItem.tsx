import React from 'react'
interface CalenItemProps{
    dayNo:number,
    progress:number;
    selected:boolean;
    clicks:any;
}
const CalenItem = ({dayNo,progress,selected,clicks}:CalenItemProps) => {
  const hue = (progress * 130) / 100;

  return (
    <div className={'flex flex-col rounded-md border items-center px-5 py-1 bg-violet-500 border-[#d2c7f9] hover:bg-violet-100 cursor-pointer'}
      onClick={()=>{
        clicks(dayNo)
        console.log("clicked ",dayNo)
      }
      }
      style={selected ?{backgroundColor:"#dcd5f8ff"} : {}}
    >
        <span className='text-xs text-start font-normal whitespace-pre-line'>Day</span>
        <span className='text-xl text-start font-medium -mt-xxs whitespace-pre-line'>{dayNo+1}</span>
        <span style={{
            color:`hsl(${hue}, 100%, 40%)`,
          }} className="text-xs text-center font-bold ms-sm whitespace-pre-line"
          >{progress}%</span>
    </div>
  )
}

export default CalenItem