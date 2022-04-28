import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
const Login = () => {
    return (
      <div className='container bg-primary mt-5 py-4 px-5 text-white rounded' style={{width:'30rem'}}>
        <h2 className='text-center'>Please Login</h2>
        <hr className='border-2'/>
        <form className='w-75 mx-auto mt-3'>
  <div className="w-100">
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email"  placeholder='Enter Your Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" placeholder='Enter Your Password' className="form-control" id="exampleInputPassword1"/>
  </div>
  </div>
  <button type="submit" className="btn btn-light text-primary w-100 mb-3">Submit</button>
  <p>New to Genius Car? <Link to='register' className='text-warning'>Please Register</Link></p>
  <SocialLogin></SocialLogin>
</form>
</div>
    );
};

export default Login;