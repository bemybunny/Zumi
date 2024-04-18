import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Footer from './components/Footer/Footer';
import Dishes from './Pages/Dishes.jsx'
import Cart from './Pages/Cart.jsx';
import GoogleMap from './GooglMap.jsx';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/googleMap" element={<GoogleMap/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dish/:productId" element={<Dishes/>}>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
