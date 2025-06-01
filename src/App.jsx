import { useState } from 'react'

import { Routes,Route } from 'react-router'
import AuthLayout from './components/ui/auth/layout'
import AuthLogin from './pages/auth/login'
import AuthRegister from './pages/auth/register'
function App() {
 return (
    <>
<div className='flex flex-col overflow-hidden bg-white'>
  {/* common component */}
  <h1>Header components</h1>
  <Routes>
    {/* nested routing in auth  */}
    <Route path='/auth' element={<AuthLayout/>}>
      <Route path='login' element={<AuthLogin/>}/>
      <Route path='register' element={<AuthRegister/>}/>
    
    </Route>
  </Routes>
  </div>       

   
    </>
  )
}

export default App
