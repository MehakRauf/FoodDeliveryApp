import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPage from './components/LoginPage/LoginPage'
import Payment from './pages/PlaceOrder/Payment'
import ThanksNote from './pages/PlaceOrder/ThanksNote'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPage setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/cart/order' element={<PlaceOrder />} />
          <Route path='/cart/order/payment' element={<Payment />} />
          <Route path='/cart/order/payment/thanks' element={<ThanksNote />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App