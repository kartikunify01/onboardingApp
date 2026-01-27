import Image from 'next/image'
import React from 'react'

const Logout = () => {
  return (
    <div className='p-1.5'>
        <Image
            src={'/images/logout.svg'} 
            height={16}
            width={16}
            alt='logout'
        />
    </div>
  )
}

export default Logout