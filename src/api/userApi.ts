import axiosInstance from '@/lib/axios';
import { User, CreateUser } from '@/types/user';

// Fungsi untuk mengambil daftar pengguna
export const fetchUsers = async (): Promise<User[]> => {
    const { data } = await axiosInstance.get('/users');
    return data;
};

// Fungsi untuk membuat pengguna baru
export const createUser = async (newUser: CreateUser): Promise<User> => {
    const { data } = await axiosInstance.post('/users', newUser);
    return data;
};
