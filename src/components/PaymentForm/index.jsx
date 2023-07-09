import { useState } from "react";
import { useSelector } from "react-redux";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";

import { currentUserSelector } from "../../redux/user/userSelectors";
import { totalCostSelector } from "../../redux/cart/cartSelectors";

import Button from "../../common/Button";
import { FormContainer, PaymentFormContainer } from "./paymentForm.style";

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const currentUser = useSelector(currentUserSelector);
  const totalCost = useSelector(totalCostSelector);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    try {
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

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        `${client_secret}`,
        {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: currentUser ? currentUser.displayName : "Guest",
            },
          },
        }
      );

      setIsProcessingPayment(false);

      if (error) {
        throw new Error(error);
      }

      if (paymentIntent && paymentIntent.status === "succeeded") {
        toast.success("Payment successful!");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <PaymentFormContainer>
      <h2>Credit Card Payment</h2>
      <FormContainer onSubmit={paymentHandler}>
        <CardElement />
        <Button isLoading={isProcessingPayment}>Pay now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
}
