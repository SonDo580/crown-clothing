import { useSelector } from "react-redux";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { currentUserSelector } from "../../redux/user/userSelectors";
import { totalCostSelector } from "../../redux/cart/cartSelectors";

import Button from "../../common/Button";
import { FormContainer, PaymentFormContainer } from "./paymentForm.style";

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const currentUser = useSelector(currentUserSelector);
  const totalCost = useSelector(totalCostSelector);

  const paymentHandler = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const response = await fetch("/.netlify/functions/createPaymentIntent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: totalCost * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(`${client_secret}`, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    console.log(paymentResult);
  };

  return (
    <PaymentFormContainer>
      <h2>Credit Card Payment</h2>
      <FormContainer onSubmit={paymentHandler}>
        <CardElement />
        <Button>Pay now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
}
