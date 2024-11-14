'use client'
import TenantTable from "@/components/table/TenantTable";
import { useTenants } from "@/hooks/useTenants";
import { Tenant } from '@/services/tenantService';
import { useEffect } from "react";


interface TenantListProps {
    initialData: any;
}


export default function TenantsPage({ initialData }: TenantListProps) {
    const { data, isLoading, error } = useTenants(initialData);

    useEffect(() => {
        console.log(data)
    }, [data])

    if (isLoading) return <p>Loading tenants...</p>;
    if (error) return <p>Error loading tenants</p>;



    return (
        <div>
            <h1>{data[0].name}</h1>
        </div>
    )
}