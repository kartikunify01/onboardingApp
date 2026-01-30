'use client'

import { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const queryClient = new QueryClient();
const Providers = ({children} : {children : ReactNode}) => {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
        <ToastContainer /> 
    </QueryClientProvider>
  )
}

export default Providers