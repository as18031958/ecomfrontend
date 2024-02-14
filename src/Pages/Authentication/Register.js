import React, { useState } from 'react';
import Layout from '../../Components/Layout';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './Auth.css'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState(''); 
  const [address, setAddress] = useState('');
  const navigate = useNavigate();
   

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post('https://ecombackend-qgpr.onrender.com/api/register',{name,email,password,phone,address});
      if(res.data.success){
        toast.success(res.data && res.data.message)
        localStorage.setItem("token", res.data.token);
        navigate('/login')
      }
      else{
        toast.error(res.data.message)
      }
    }catch(error){
   toast.error("something went wrong")
    }

    

   
  };

  return (
    <Layout title="Register">
        
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
            placeholder="Enter your full name"
          />
        </div>
        

        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            placeholder="Enter your email address"
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>

        {/* Optional phone input */}
        <div className="input-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            placeholder="Enter your phone number (optional)"
          />
        </div>

        {/* Optional address input */}
        <div className="input-group">
          <label htmlFor="address">Address:</label>
          <input
            id="address"
            name="address"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
            placeholder="Enter your address (optional)"
          ></input>
        </div>

        <button type="submit">Register</button>
      </form>
     
    </Layout>
  );
};

export default Register;
