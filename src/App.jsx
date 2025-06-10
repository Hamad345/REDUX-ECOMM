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
// function App() {
//   const isAuthenticated=false;
//   const user = null
//  return (
    <>
    
{/* <div className='flex flex-col overflow-hidden bg-white'> */}
  {/* common component */}
  {/* <h1>Header components</h1> */}
  {/* <Routes> */}
    {/* nested routing in auth  */}
    {/* <Route path='/auth' element={
      <CheckAuth isAuthenticated={isAuthenticated} user={user}> 
        <AuthLayout/>
      </CheckAuth>
      }>
    
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
    </Route> */}
    {/* <Route path='/shop' element={<ShoppingLayout/>}>
      
    </Route> */}
    {/* <Route path='*' element={<NotFound/>}/>
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
  </div>        */}

   
    </>
//   )
// }

// export default App
import React, {  useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginWarning, setShowLoginWarning] = useState(false);
  const [formData, setFormData] = useState({
    amount: '',
    phoneNumber: '',
    description: ''
  });
  const navigate = useNavigate();

  // Check if user is logged in (you might have a different auth check)
  // useEffect(() => {
  //   const token = localStorage.getItem('authToken');
  //   setIsLoggedIn(!!token);
  // }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isLoggedIn) {
      setShowLoginWarning(true);
      navigate('/login');

      // Redirect to login page after 2 seconds
      setTimeout(() => {
       
      }, 2000);
      return;
    }
    
    // If user is logged in, proceed with EasyPaisa integration
    proceedToEasyPaisaPayment();
  };

  const proceedToEasyPaisaPayment = () => {
    // Here you would integrate with EasyPaisa API
    console.log('Proceeding to EasyPaisa payment with data:', formData);
    
    // This is a mock implementation - replace with actual API call
    // Example API call structure:
    /*
    fetch('https://easypaisa-api.com/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      // Handle payment response
      console.log('Payment response:', data);
      // Redirect to payment success/failure page based on response
    })
    .catch(error => {
      console.error('Payment error:', error);
    });
    */
    
    // For demo purposes, we'll just show an alert
    alert(`Payment request for ${formData.amount} to ${formData.phoneNumber} would be processed now.`);
  };

  return (
    <>    <div className="payment-form-container">
      <h2>EasyPaisa Payment</h2>
      
      {showLoginWarning && (
        <div className="alert alert-warning">
          You must be logged in to proceed with payment. Redirecting to login page...
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Amount (PKR)</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            required
            min="1"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phoneNumber">Mobile Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
            // pattern="03[0-9]{9}"
            placeholder="03XXXXXXXXX"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="3"
          />
        </div>
        
        <button type="submit" className="submit-btn">
          Proceed to Payment
        </button>
      </form>
     
    </div>
    {/* <Routes>
      <Route path='login' element={<AuthLogin/>}/>
      </Routes> */}
    </>

  );
};

export default PaymentForm;
