import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";

const fetchUsers = async () => {
    const { data } = await axiosInstance.get('/users');
    return data;
}

const useUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
    })
}

export default useUsers