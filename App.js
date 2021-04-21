import React from 'react'
import MainNavigation from 'navigation/MainNavigation'
import { QueryClientProvider, QueryClient } from 'react-query'
import { FavProvider } from 'context/FavContext'

export const queryClient = new QueryClient()

const App = () => {
  
  return(
    <FavProvider>
      <QueryClientProvider client={queryClient}>
        <MainNavigation />
      </QueryClientProvider>
    </FavProvider>

  )
}

export default App
