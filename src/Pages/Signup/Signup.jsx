import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import '../CSS/login.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ShopContext } from '../../Context/ShopContext';
import { BASE_URL } from '../../helper';
import { useContext } from 'react';
const Signup = () => {

    const navigate = useNavigate();
    const {getUser}  = useContext(ShopContext);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

  
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            const response = await axios.post(`${BASE_URL}/postData`,{
                name:name,email:email,password:password
            })
            
            if (response.data.success) {
                localStorage.setItem('auth-token', response.data.token);
                navigate('/');
                getUser();
            } else {
                alert(response.data.errors);
            }
            } catch (error) {
            console.error('Axios error:', error.message);
        }
    }
   
  return (
    <div className="Signup-container">
        <div className="Signcontainer">
        <div className="signup">
            <h1>Sign up</h1>
            <RxCross2 onClick={()=>navigate('/')}/>
        </div>
        <form onSubmit = {handleSubmit} className="form">
            <input 
                value={name} 
                placeholder='Enter you Name'
                onChange={(e)=>{setName(e.target.value)}}
                required 
            />
            <input 
                value={email} 
                placeholder='Enter you Email'
                onChange={(e)=>{setEmail(e.target.value)}}
                required 
            />
            <input 
                value={password} 
                placeholder='Enter you Password'
                onChange={(e)=>{setPassword(e.target.value)}}
                required 
            />
            <button type="submit">Continue</button>
        </form>
        <p className="loginsignup-login"> Already have an account? <span><Link to ="/login" style={{ textDecoration: 'none', color:'rgba(81, 32, 255, 0.877) '}}>Login here</Link></span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
        </div>
    </div>
  )
}

export default Signup
