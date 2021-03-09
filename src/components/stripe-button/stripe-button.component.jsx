import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_CXAWk43rxhyqtLdb4STee1Ob';

    const onToken = token => {
        console.log('token', token);
        alert('payment')
    }

    return (
        <StripeCheckout 
            label="PAY NOW"
            name="CRWN Clothing Ltd"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is: $${price}`}
            amount={priceForStripe}
            panelLabel="Pay now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;