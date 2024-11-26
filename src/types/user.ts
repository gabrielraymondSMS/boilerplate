// Tipe data untuk User yang mencakup informasi dasar pengguna
export interface User {
    id: number;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}

// Tipe data untuk User yang digunakan saat registrasi atau pembuatan user baru
export interface CreateUser {
    name: string;
    email: string;
    password: string;
}

// Tipe data untuk User yang digunakan saat update data pengguna
export interface UpdateUser {
    name?: string;
    email?: string;
    password?: string;
}
