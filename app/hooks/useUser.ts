import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation";

export const useUser = ()=>{
    const router = useRouter();
    return useQuery({
        queryKey:["getMe"],
        queryFn:async ()=>{
            const storedUser = localStorage.getItem("token");
            if(!storedUser){
                return router.push('/login');
            }
            return JSON.parse(storedUser);
        }
    })
}