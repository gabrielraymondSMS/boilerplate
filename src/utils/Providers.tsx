"use client"

import { ReactNode } from "react"
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import queryClient from "@/lib/queryClient"

export default function Provider({ children }: { children: ReactNode }) {
    // const [queryClient] = useState(() => new QueryClient())
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}