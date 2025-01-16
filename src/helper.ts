import { auth } from "./firebase/firebase";
import { CartItemType, ProductType } from "./types";

export const isInCart = (product: ProductType, cart: CartItemType[] | undefined) => {
    if (!cart) return false;
    return cart.find((item) => item.id === product.id);
}

const API = 'http://localhost:8080';

interface FetchOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: any;
}

export async function fetchFromAPI(endpoint: string, opts?: FetchOptions): Promise<any> {
    const { method, body } = { method: 'POST', body: null, ...opts };
    const user = auth.currentUser;
    const token = user && (await user.getIdToken());

    const res = await fetch(`${API}/${endpoint}`, {
        method,
        ...(body && { body: JSON.stringify(body) }),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    });

    if (res.status === 200) {
        return res.json();
    } else {
        throw new Error(res.statusText);
    }
}