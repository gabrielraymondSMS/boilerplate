'use client'
import Table from '@/components/table/Table';
import { useUsers, useCreateUser } from '@/hooks/useUsers';
// import { useTenants } from '@/hooks/useTenants';
import React, { FormEvent, useEffect, useState } from 'react';
import { CreateUser } from '@/types/user';


// interface Tenant {
//     id: number;
//     name: string;
//     room: string;
//     paymentStatus: string;
// }

// const tenants: Tenant[] = [
//     { id: 1, name: 'John Doe', room: '101', paymentStatus: 'Paid' },
//     { id: 2, name: 'Jane Smith', room: '102', paymentStatus: 'Pending' },
//     { id: 3, name: 'Alice Johnson', room: '103', paymentStatus: 'Paid' },
// ];

interface TenantListProps {
    initialData: any;
}

const UserPage = ({ initialData }: TenantListProps) => {

    // react-query
    const { data: users, isLoading, error } = useUsers();
    const { mutate: createUser, isPending: isPosting } = useCreateUser();


    const [page, setPage] = useState<number>(1)

    const [newUser, setNewUser] = useState<CreateUser>({ name: '', email: '', password: '' });


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createUser(newUser, {
            onSuccess: () => setNewUser({ name: '', email: '', password: '' }), // Reset form
        });
    };


    // if (isLoading) return <p>Loading tenants...</p>;
    // if (error) return <p>Error loading tenants</p>;

    // const nextPage = () => setPage((old) => old + 1);
    // const prevPage = () => setPage((old) => old - 1);

    useEffect(() => { console.log(users) }, [users])

    return (
        <div className="p-4 bg-white rounded">
            <div>
                <h1 className='text-2xl font-bold'>User Management</h1>
                <form onSubmit={handleSubmit} className='mb-4'>
                    <input
                        type='text'
                        placeholder='Name'
                        value={newUser.name}
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                        className='border p-2 mr-2'
                        required
                    />
                    <input
                        type='email'
                        placeholder='Email'
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        className='border p-2 mr-2'
                        required
                    />
                    <button>
                        {isPosting ? 'Creating...' : 'Create User'}
                    </button>
                </form>
            </div>

            <h1 className="text-lg font-bold mb-4">User List</h1>
            {/* <Table
                columns={[
                    { key: 'id', header: 'ID' },
                    { key: 'name', header: 'Name' },
                    // { key: 'room', header: 'Room' },
                    // { key: 'paymentStatus', header: 'Payment Status' },
                ]}
                loading={isLoading}
                data={users}
                skeletonRowCount={10}
            /> */}

        </div>
    )
}

export default UserPage