import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios';

interface User {
    name: string;
    email: string;
}

const useCreateUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (newUser: User) => {
            const response = await axiosInstance.post('/users', newUser);
            return response.data;
        },
        onSuccess: () => {
            // Invalidasi query users agar data terbaru di-fetch
            queryClient.invalidateQueries({ queryKey: ['usersasd'] });
        },
        onError: (error) => {
            console.error('Error creating user:', error);
        },
    });
};

export default useCreateUser;
