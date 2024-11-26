import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000, // Cache valid for 5 menit
            refetchOnWindowFocus: true,
            retry: 1, // Retry handa sekali
        }
    }
})

export default queryClient;