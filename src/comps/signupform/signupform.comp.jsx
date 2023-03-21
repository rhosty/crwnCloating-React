import { async } from "@firebase/util";
import { useState } from "react"
import {createAuthUserWithEmailAndPassword, createUserDocFromAuth} from '../../utills/firebase/firebase'
import  FormInput  from '../form input/form.input.comp'
import './signupfrom.style.scss'
import Button from '../button/button.comp'
const defaultForm = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}




const SignUpForm = () =>{

    const [formFields, setFormFields] = useState(defaultForm);
    const {displayName, email, password, confirmPassword} = formFields; 
    const resetFormFields = () => {
        setFormFields(defaultForm)
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
          alert('Passwords do not match');
          return
        }
      
        try {
          
          const { user } = await createAuthUserWithEmailAndPassword(email, password,);
          
          await createUserDocFromAuth(user, {displayName})
          resetFormFields()
        


        } catch (error) {
          console.error('Error creating user:', error);
          if(error.code === 'auth/email-already-in-use'){
            alert('email already in use')
          }
        }
      };


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
        
    }
        
   

    return (
      
        <div className="sign-up-container">
            <h2>No Account?</h2>
            <span>Sign Up with you email an password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' onChange={handleChange} name='displayName' type='text' required value={displayName}/>    
                <FormInput label='Email' onChange={handleChange} name='email' type='email' required value={email}/>    
                <FormInput label='Password' onChange={handleChange} name='password' type='password' required value={password}/>
                <FormInput label='Confirm Password' onChange={handleChange} name='confirmPassword' type='password' required value={confirmPassword}/>
                <Button>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm