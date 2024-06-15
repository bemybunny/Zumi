import React, { useContext, useState} from 'react'
import { RxCross2 } from "react-icons/rx";
import '../CSS/login.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ShopContext } from '../../Context/ShopContext';
import { BASE_URL } from '../../helper';

const Login = () => {

    const navigate = useNavigate();
    const {getUser} = useContext(ShopContext);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      // console.log(email);
      // console.log(password);
      try {
        
        const response = await axios.post(`${BASE_URL}/login`, {
          email: email,
          password: password,
        });

        const responseData = response.data;
        //console.log(responseData);
        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            await getUser();
            navigate('/');
           
        }else {
          console.log('Login unsuccessful:', responseData.message);
        }
      } catch (error) {
        console.log({ error: "occur in frontend" , details: error });
      }
    };

  return (
    <div className="Signup-container">
        <div className="Signcontainer">
        <div className="signup">
            <h1>Log in</h1>
            <RxCross2 onClick={()=>navigate('/')}/>
        </div>
        <form onSubmit = {(e)=>handleSubmit(e)} className="form">
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
        <p className="loginsignup-login"> Create an account? <span><Link to ="/signup" style={{ textDecoration: 'none', color:'rgba(81, 32, 255, 0.877) '}}>Click here</Link></span></p> 
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
        </div>
    </div>
  )
}

export default Login
