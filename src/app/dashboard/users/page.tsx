'use client'
import Table from '@/components/table/Table';
import { useTenants } from '@/hooks/useTenants';
import React, { useEffect, useState } from 'react'

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

    const { data, isLoading, error } = useTenants(initialData);
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        console.log(data)
    }, [data])

    // if (isLoading) return <p>Loading tenants...</p>;
    // if (error) return <p>Error loading tenants</p>;

    const nextPage = () => setPage((old) => old + 1);
    const prevPage = () => setPage((old) => old - 1);


    return (
        <div className="p-4 bg-white rounded">
            <h1 className="text-lg font-bold mb-4">Tenant List</h1>
            <Table
                columns={[
                    { key: 'id', header: 'ID' },
                    { key: 'firstName', header: 'Name' },
                    // { key: 'room', header: 'Room' },
                    // { key: 'paymentStatus', header: 'Payment Status' },
                ]}
                loading={isLoading}
                data={data?.users}
                skeletonRowCount={10}
            />
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={prevPage}
                    disabled={page === 1}
                    className="px-4 py-2 bg-gray-500 text-white disabled:opacity-50"
                >
                    Previous
                </button>
                <span>Page {page}</span>
                <button
                    onClick={nextPage}
                    className="px-4 py-2 bg-gray-500 text-white"
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default UserPage