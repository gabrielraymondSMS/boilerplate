import { useQuery } from '@tanstack/react-query';
import { fetchTenants, Tenant } from '@/services/tenantService';

export function useTenants(initialData: any) {
    return useQuery<any>({
        queryKey: ['tenants'],
        queryFn: fetchTenants,
        initialData,
        staleTime: 5 * 60 * 1000,
    });
}
