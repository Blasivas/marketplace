import { RouterProvider } from 'react-router'

import { router } from './routes'
import { Toaster } from 'sonner'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/reactQuery'

export function App(){
    return (
      <>
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </>
    )
}