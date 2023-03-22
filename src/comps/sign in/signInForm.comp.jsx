import { async } from "@firebase/util";
import { useState } from "react"
import {createAuthUserWithEmailAndPassword, createUserDocFromAuth, 
        signInWithGooglePopup, signInAuthWithEmailAndPassword} from '../../utills/firebase/firebase'
import  FormInput  from '../form input/form.input.comp'
import './signin.styles.scss'
import Button from '../button/button.comp'
import {getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { findAllInRenderedTree } from "react-dom/test-utils";


const defaultForm = {
    
    email: '',
    password: '',
    
}

const SignInForm = () =>{
  
    const signInWithGoogle = async () => {
         await signInWithGooglePopup();
        
      };

    const [formFields, setFormFields] = useState(defaultForm);
    const { email, password, } = formFields; 
    
      
    const resetFormFields = () => {
        setFormFields(defaultForm)
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
           const {user} = await signInAuthWithEmailAndPassword(email, password);
           console.log(user)
          resetFormFields()
          
          
          
          
        } catch (error) {
           switch(error.code){
            case 'auth/wrong-password':
                alert('wrong Password')
                break
            case 'auth/user-not-found':
                alert('wrong email')
                break;
                default:
                    console.log(error)
           }
           
          }
        }
      


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
        
    }
    return (
      
        <div className="sign-up-container">
            <h2>Have An Account?</h2>
            <span>Sign In With Email And Password</span>
            <form onSubmit={handleSubmit}>   
                <FormInput label='Email' onChange={handleChange} name='email' type='email' required value={email}/>    
                <FormInput label='Password' onChange={handleChange} name='password' type='password' required value={password}/>
                <div className="buttons-container">
                    <Button type='submit'>Sign in</Button>
                    <Button type='button' onClick={signInWithGoogle} buttonType='google'>Google sing in</Button>
                </div>
                
            </form>
        </div>
    )
}

export default SignInForm