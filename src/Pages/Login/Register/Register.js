import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../Firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState (false);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }
  const handleRegister = event => {
    const name = event.target.name.value ;
    const email = event.target.email.value ;
    const password = event.target.value ;
    const agree = event.target.terms.checked;
    if (agree) {
        createUserWithEmailAndPassword (email, password) ;
    }
  }
    return (
        <div>
            <div className='container bg-primary mt-5 py-4 px-5 text-white rounded' style={{width:'30em'}}>
        <h2 className='text-center'>Please Register</h2>
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
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="confirm-password" placeholder='Enter Your Password' className="form-control" id="exampleInputPassword1"/>
  </div>
  <div>
  <input onClick={()=> setAgree (!agree)} type="checkbox" className='mt-2' name="" id="" />
 <label className={`d-inline ps-2 ${agree ? '' : 'text-warning'}`} htmlFor="trems">Accept Genius Car Trams And Conditions</label>
  </div>
  </div>
  <input 
  disabled = {!agree}
  type="submit" 
  className="btn btn-light text-primary w-100 my-3"/>
  <p>New to Genius Car? <span className='text-warning'>Please Register</span></p>
  <SocialLogin></SocialLogin>
</form>
</div>
        </div>
    );
};

export default Register;