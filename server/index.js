const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const createCheckoutSession = require("./api/checkout");
const webhook = require("./api/webhook");
const paymentIntent = require("./api/paymentIntent");

const app = express();
const port = 8080;

app.use(
	express.json({
		verify: (req, res, buffer) => (req["rawBody"] = buffer),
	})
);

const corsOptions = {
	origin: (origin, callback) => {
		const allowedOrigins = [
			"http://localhost:5173",
			"http://127.0.0.1:5173",
			"https://product.wave-auth.com",
		];
		if (!origin || allowedOrigins.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
	methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
	allowedHeaders: ["Content-Type"],
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.post("/create-checkout-session", createCheckoutSession);

app.post("/create-payment-intent", paymentIntent);

app.post("/webhook", webhook);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
