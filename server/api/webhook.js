const stripeAPI = require('../stripe.js');

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

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
    }
}

module.exports = webhook;