import { CardElement, CardNumberElement, useStripe, useElements, CardCvcElement, CardExpiryElement   } from '@stripe/react-stripe-js';
import Button from '../button/button.comp';
import './payment.form.styles.jsx'
import { PaymentContainer, FormContainer, Header, NameInput } from './payment.form.styles.jsx';
import { CartContext } from '../../contexts/cart.ctx';
import { useContext, useState } from 'react';



const PaymentForm = () => {

    const {cartItems, totalPrice} = useContext(CartContext)
    const [name, setName] = useState('')

  const stripe = useStripe();
  const elements = useElements();
  console.log(totalPrice)

  const PaymentHandler = async (e) => {
    e.preventDefault();

    if(!stripe || !elements) {
      return;
    }

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({amount: totalPrice * 100})
        }).then(res => res.json());

        const {paymentIntent: {client_secret}} = response;
        console.log(client_secret)

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: name,
            },
          }
        });
        if(paymentResult.error) {
          console.log(paymentResult.error.message)
        } else {
          if(paymentResult.paymentIntent.status === 'succeeded') {
            alert('Payment succeeded')
          }
        }
    };

    const getNameHandler = (event) => {
      setName(event.target.value)}

  return (
    <PaymentContainer>
      
      <FormContainer className='form-container' onSubmit={PaymentHandler}>
        <Header>Credit Card Payment</Header>
        <span>
          Name On Card
        </span>
        <NameInput onBlur={getNameHandler} type='text' placeholder='Name On Card'></NameInput>
        <span>Card Number</span>
        <CardNumberElement className='card-number'/>
        <div>
          <span>Valid</span>
          <CardExpiryElement/>
          <span>CCV</span>
          <CardCvcElement/> 
        </div>
        
      <Button>Pay Now</Button>
      </FormContainer>
    </PaymentContainer>
    
  );
}

export default PaymentForm;