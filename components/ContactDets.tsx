// import { EmployeeData } from "@/lib/types";
import { useUser } from "@/app/hooks/useUser";

const ContactDets = () => {
  const {data : user} = useUser();
  return (

    <div className="flex justify-center items-center gap-2">

        <div className='bg-[#5e37eb] h-8 w-8 rounded-full flex justify-center items-center'>
            <span className='text-white'>{user?.employee_name[0]}</span>
        </div>
        <div className="flex flex-col">
            <p className='text-sm font-medium truncate'>{user?.employee_name}</p>
            <p className='text-xs font-normal truncate'>{user?.email_id}</p>
        </div>
    </div>
  )
}

export default ContactDets