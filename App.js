import React from 'react'
import MainNavigation from 'navigation/MainNavigation'
import { QueryClientProvider, QueryClient } from 'react-query'

export const queryClient = new QueryClient()

const App = () => {
  return(
    <QueryClientProvider client={queryClient}>
      <MainNavigation />
    </QueryClientProvider>
  )
}

export default App
