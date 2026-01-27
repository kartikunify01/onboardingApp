import React from 'react'
import CalenItem from './CalenItem'

const Calender = () => {
  return (
    <div className="flex gap-4 overflow-x-auto p-4">
      <CalenItem dayNo={1} progress={100} />
      <CalenItem dayNo={2} progress={0} />
      <CalenItem dayNo={3} progress={60} />
      <CalenItem dayNo={4} progress={40} />
      <CalenItem dayNo={1} progress={20} />
      <CalenItem dayNo={2} progress={30} />
      <CalenItem dayNo={3} progress={50} />
      <CalenItem dayNo={4} progress={70} />
      <CalenItem dayNo={1} progress={90} />
      <CalenItem dayNo={2} progress={100} />
      <CalenItem dayNo={3} progress={60} />
      <CalenItem dayNo={4} progress={40} />
      <CalenItem dayNo={1} progress={100} />
      <CalenItem dayNo={2} progress={80} />
      <CalenItem dayNo={3} progress={60} />
      <CalenItem dayNo={4} progress={40} />
      <CalenItem dayNo={1} progress={100} />
      <CalenItem dayNo={2} progress={80} />
      <CalenItem dayNo={3} progress={60} />
      <CalenItem dayNo={4} progress={40} />
      <CalenItem dayNo={1} progress={100} />
      <CalenItem dayNo={2} progress={80} />
      <CalenItem dayNo={3} progress={60} />
      <CalenItem dayNo={4} progress={40} />
    </div>
  );
};


export default Calender