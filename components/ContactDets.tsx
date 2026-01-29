const ContactDets = () => {
  return (
    <div className="flex justify-center items-center gap-2">
        <div className='bg-[#5e37eb] h-8 w-8 rounded-full flex justify-center items-center'>
            <span className='text-white'>K</span>
        </div>
        <div className="flex flex-col">
            <p className='text-sm font-medium truncate'>Kartik Kumar</p>
            <p className='text-xs font-normal truncate'>karitk.kumar@unifyapps.com</p>
        </div>
    </div>
  )
}

export default ContactDets