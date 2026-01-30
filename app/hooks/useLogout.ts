import { useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation";

export const useLogout = ()=>{
    const queryClient = useQueryClient();
    const router = useRouter();
    const logOut = () =>{
        localStorage.removeItem("token");
        queryClient.removeQueries({queryKey:["getMe"]});
        router.push('/login');
    }
    return logOut;
}