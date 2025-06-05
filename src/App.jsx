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
import ShoppingHome from './components/shopping-view/home'
import ShoppingListing from './components/shopping-view/listing'
import ShoppingAccount from './components/shopping-view/account'
import ShoppingCheckout from './components/shopping-view/checkout'
import CheckAuth from './components/common/check-auth'
import UnAuth from './pages/unauth-page'
function App() {
  const isAuthenticated=false;
  const user = null
 return (
    <>
<div className='flex flex-col overflow-hidden bg-white'>
  {/* common component */}
  <h1>Header components</h1>
  <Routes>
    {/* nested routing in auth  */}
    <Route path='/auth' element={
      <CheckAuth isAuthenticated={isAuthenticated} user={user}> 
        <AuthLayout/>
      </CheckAuth>
      }>
      <Route path='login' element={<AuthLogin/>}/>
      <Route path='register' element={<AuthRegister/>}/>   
    </Route>
    <Route path='/admin' element={
      <CheckAuth isAuthenticated={isAuthenticated} user={user}> 
        <AdminLayout/>
      </CheckAuth>}>
      <Route path='dashboard' element={<AdminDashboard />}/>
      <Route path='products' element={<AdminProducts/>}/>
      <Route path='features' element={<AdminFeatures/>}/>
      <Route path='orders' element={<AdminOrders/>}/>
    </Route>
    {/* <Route path='/shop' element={<ShoppingLayout/>}>
      
    </Route> */}
    <Route path='*' element={<NotFound/>}/>
    <Route path='/shop' element={
      <CheckAuth isAuthenticated={isAuthenticated} user={user}> 
      <ShoppingLayout/>
      </CheckAuth>
    }>
      <Route path='home' element={<ShoppingHome />}/>
      <Route path='listing' element={<ShoppingListing/>}/>
      <Route path='account' element={<ShoppingAccount/>}/>
      <Route path='checkout' element={<ShoppingCheckout/>}/>
    </Route>
    <Route path='unauth-page' element={<UnAuth/>}/>



  </Routes>
  </div>       

   
    </>
  )
}

export default App
