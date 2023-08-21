import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";

import { currentUserSelector } from "@/redux/user/userSelectors";
import { totalCostSelector } from "@/redux/cart/cartSelectors";

import Button from "@/common/Button";
import { CARD_ELEMENT_OPTIONS } from "./cardElementOptions";
import {
  ButtonContainer,
  FormContainer,
  PaymentFormContainer,
} from "./paymentForm.style";

export default function PaymentForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const stripe = useStripe();
  const elements = useElements();
  const currentUser = useSelector(currentUserSelector);
  const totalCost = useSelector(totalCostSelector);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (event) => {
    event.preventDefault();

    if (!currentUser) {
      return navigate("/auth", {
        state: {
          prevPath: location.pathname,
        },
      });
    }

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
              name: currentUser.displayName,
            },
          },
        }
      );

      if (error) {
        throw new Error(error);
      }

      if (paymentIntent && paymentIntent.status === "succeeded") {
        toast.success("Payment successful!");
      }
    } catch (error) {
      toast.error(error.message);
    }

    setIsProcessingPayment(false);
  };

  return (
    <PaymentFormContainer>
      <h2>Credit Card Payment</h2>
      <FormContainer onSubmit={paymentHandler}>
        <CardElement options={CARD_ELEMENT_OPTIONS} />
        <ButtonContainer>
          <Button isLoading={isProcessingPayment}>Pay now</Button>
        </ButtonContainer>
      </FormContainer>
    </PaymentFormContainer>
  );
}
