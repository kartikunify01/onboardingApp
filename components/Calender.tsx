import React from 'react'
import CalenItem from './CalenItem'
import { basicOnb } from '@/lib/basicOnboarding';

const Calender = ({selected,clicks} : {selected:number,clicks:any}) => {
  return (
    <div className="flex gap-4 overflow-x-auto p-4">
      {
        basicOnb.map((item,idx)=>{
          return <CalenItem key={idx} dayNo={idx} progress={100} selected={idx === selected} clicks={clicks}/>
        })
      }
    </div>
  );
};


export default Calender