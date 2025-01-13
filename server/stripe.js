import stripe from 'stripe';

export default stripe(process.env.SECRET_KEY);