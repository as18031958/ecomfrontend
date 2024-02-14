import React,{useState} from 'react';
// import { setEmail, setPassword } from '../../Store/slice';
import Layout from '../../Components/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './Auth.css';

const Login = () => {
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
 const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://ecombackend-qgpr.onrender.com/api/login', { email, password });
      if (res.data.success) {
        toast.success(res.data && res.data.message);
        console.log(res.data.user); 
        localStorage.setItem("token", res.data.token);
        navigate('/');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error('user not available');
      navigate('/register')
    }
  };

  return (
    <Layout title="Login">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)} 
            required
            placeholder="Enter your password"
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </Layout>
  );
};

export default Login;


// import React  from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setEmail,setPassword } from '../../Store/slice';
// import Layout from '../../Components/Layout';
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import './Auth.css'

// const Login = () => {
//   const dispatch = useDispatch();
//   const {email, password} = useSelector((state) = state.user)
  
//   const navigate = useNavigate();
   

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try{
//       const res = await axios.post('/api/login',{email,password});
//       if(res.data.success){
//         toast.success(res.data && res.data.message)
//         console.log(state.user)
//         dispatch({
//            payload: { user: res.data.user, token: res.data.token },
//         });
//         navigate('/')
//       }
//       else{
//         toast.error(res.data.message)
//       }
//     }catch(error){
//    toast.error("something went wrong")
//     }

    

   
//   };

//   return (
//     <Layout title="Login">
        
//       <form onSubmit={handleSubmit}>
       
//        <div className="input-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={(e)=>dispatch(setEmail(e.target.value))}
//             required
//             placeholder="Enter your email address"
//           />
//         </div>

//         <div className="input-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e)=>dispatch(setPassword(e.target.value))}
//             required
//             placeholder="Enter your password"
//           />
//         </div>

//         <button type="submit">Login</button>
//       </form>
     
//     </Layout>
//   );
// };

// export default Login;
