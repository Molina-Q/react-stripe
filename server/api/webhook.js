const stripeAPI = require('../stripe.js');

const webhookHandlers = {
    'checkout.session.completed': (data) => {
        console.log('Checkout session completed!');
        const session = data.object;
    },
    'payment_intent.succeeded': (data) => {
        console.log('Payment was successful!');
    },
    'payment_intent.payment_failed': (data) => {
        console.log('Payment failed!');
    }
}

function webhook(req, res) {
    const sig = req.headers['stripe-signature'];

    let event;

    try {
        event = stripeAPI.webhooks.constructEvent(
            req.rawBody, 
            sig, 
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        console.error(err);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (webhookHandlers[event.type]) {
        webhookHandlers[event.type](event.data.object);
        const session = event.data.object;
        console.log(session);
    }
}

module.exports = webhook;