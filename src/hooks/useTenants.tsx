import { useQuery } from '@tanstack/react-query';
import { fetchTenants, Tenant } from '@/services/tenantService';

export function useTenants(initialData: Tenant[]) {
    return useQuery<Tenant[]>({
        queryKey: ['tenants'],
        queryFn: fetchTenants,
        initialData,
        staleTime: 5 * 60 * 1000,
    });
}
