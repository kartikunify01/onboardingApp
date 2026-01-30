import { useLogout } from '@/app/hooks/useLogout'
import Image from 'next/image'

const Logout = () => {
  const logOut = useLogout();
  return (
    <button className='p-1.5' onClick={logOut}>
        <Image
            src={'/images/logout.svg'} 
            height={16}
            width={16}
            alt='logout'
        />
    </button>
  )
}

export default Logout