import Image from 'next/image'
import Link from 'next/link'

const Logout = () => {
  return (
    <Link className='p-1.5' href={'/login'}>
        <Image
            src={'/images/logout.svg'} 
            height={16}
            width={16}
            alt='logout'
        />
    </Link>
  )
}

export default Logout