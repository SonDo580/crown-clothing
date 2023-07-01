import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(import.meta.env.STRIPE_PUBLISHABLE_KEY);
