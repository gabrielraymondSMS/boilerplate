import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser, fetchUsers } from '@/api/userApi';
import { User } from '@/types/user';

export const useUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ['users'], // Key unik untuk cache
    queryFn: fetchUsers, // Fungsi pengambil data
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser, // Fungsi mutasi
    onSuccess: () => {
      console.log('User created successfully');
      queryClient.invalidateQueries({ queryKey: ['users'] }); // Invalidasi cache query 'users'
    },
    onError: (error: Error) => {
      console.error('Error creating user:', error.message);
    },
  });
};

