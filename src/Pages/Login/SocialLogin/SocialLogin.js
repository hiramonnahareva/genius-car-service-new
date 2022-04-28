import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import { auth } from '../../../Firebase.init';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate ()
    let errorElement ;
    if (error || error1) {
          errorElement = <div>
            <p className='text-warning'>Error: {error?.message}{error1?.massege}</p>
          </div>
      }
      if (loading || loading1) {
        return <p>Loading...</p>;
      }
      if (user || user1) {
        navigate ('/home') ;
      }

    return (
        <div>
        <div className='d-flex align-items-center'>
            <div style={{height:'1px'}} className='bg-white w-50'></div>
            <p className='mt-3 px-2'>OR</p>
            <div style={{height:'1px'}} className='bg-white w-50'></div>
        </div>
          {errorElement}
            <div className='gy-2'>
                <button
                 onClick={()=> signInWithGoogle()} 
                 className='btn d-block mx-auto btn-light w-75 mb-3 text-primary fw-bold'>
                    <img className='pe-2' style={{width:"35px"}} src={google} alt="" />
                    Google Sign In
                    </button>
                <button className='btn d-block mx-auto btn-light w-75 mb-3 text-primary fw-bold'>
                    <img className='pe-2' style={{width:"35px"}}  src={facebook} alt="" />
                    Facebook Sign In
                    </button>
                <button 
            
            onClick={()=> signInWithGithub()}
                className='btn d-block mx-auto btn-light w-75 text-primary fw-bold'>
                    <img className='pe-2' src={github} alt="" style={{width:"35px"}}/>
                    Github Sign In
                    </button>
            </div>
        </div>
    );
};

export default SocialLogin;