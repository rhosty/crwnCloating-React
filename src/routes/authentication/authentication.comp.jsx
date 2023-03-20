import { useEffect } from 'react';
import SignUpForm from '../../comps/signupform/signupform.comp';
import {auth, signInWithGooglePopup,createUserDocFromAuth, signInWithGoogleRedirect } from '../../utills/firebase/firebase'
import SignInForm from '../../comps/sign in/signInForm.comp';
import './authentication.style.scss'



import { getRedirectResult } from 'firebase/auth';

const Authentication = () => {
    const handleRedirectResult = async () => {
      const result = await getRedirectResult(auth);
      if (result.user) {
        const userDocRef = await createUserDocFromAuth(result.user);
      }
    };
  
    useEffect(() => {
      handleRedirectResult();
    }, []);
  
 
  
    return (
      <div className='form-major-container'>
        <SignInForm />
        <SignUpForm />
      </div>
    );
  };
  
  export default Authentication;
  //this still working?