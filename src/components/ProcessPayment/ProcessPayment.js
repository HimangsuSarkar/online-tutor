import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import SimpleCardForm from './SimpleCardForm';


const stripePromise = loadStripe('pk_test_51Ie19CCEuUqhRYSEhkjRZzdNK3Y0VlxJYGeZ3I0qUNaqu1QOsENxVl7LXAUUnxJw52fcmfsmzU8HF4ZN07mNdd3200xljGqaYu');
const ProcessPayment = ({ handlePayment }) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements >
    );
};

export default ProcessPayment;
