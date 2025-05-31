import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'


// import { QueryClientProvider,QueryClient } from '@tanstack/react-query'
// const queryClient=new QueryClient({
//   defaultOptions:{
//     queries:{
//       refetchOnWindowFocus:false
//     }
//   }
// })

createRoot(document.getElementById('root')).render(
      <BrowserRouter>
  <StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
    <App />
    {/* </QueryClientProvider> */}
  </StrictMode>
  </BrowserRouter>
)
