import { useState } from 'react'

import { Routes,Route } from 'react-router'
import AuthLayout from './components/ui/auth/layout'
import AuthLogin from './pages/auth/login'
import AuthRegister from './pages/auth/register'
import AdminLayout from './components/admin-view/layout'
import AdminProducts from './pages/admin-view/products'
import AdminFeatures from './pages/admin-view/features'
import AdminOrders from './pages/admin-view/orders'
import AdminDashboard  from './pages/admin-view/dashboard'
import ShoppingLayout from './pages/shopping-view/layout'
import NotFound from './pages/not-found'
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
    <Route path='/admin' element={<AdminLayout/>}>
      <Route path='dashboard' element={<AdminDashboard />}/>
      <Route path='products' element={<AdminProducts/>}/>
      <Route path='features' element={<AdminFeatures/>}/>
      <Route path='orders' element={<AdminOrders/>}/>
    </Route>
    <Route path='/shop' element={<ShoppingLayout/>}>
      
    </Route>
    <Route path='*' element={<NotFound/>}/>



  </Routes>
  </div>       

   
    </>
  )
}

export default App
