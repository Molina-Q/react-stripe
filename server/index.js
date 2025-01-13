import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv';

import { createCheckoutSession } from './api/checkout';

dotenv.config();

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors({
    origin: 'true'
}));

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.post('/create-checkout-session', createCheckoutSession);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});