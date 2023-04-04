import { CardElement,   } from '@stripe/react-stripe-js';
import Button from '../button/button.comp';
import './payment.form.styles.scss'

const PaymentForm = () => {
  return (
    <div>
      <CardElement className='card-input-container' />
      <Button type='submit'>Pay Now</Button>
    </div>
  );
}

export default PaymentForm;