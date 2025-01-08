export interface CartItemType {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    quantity?: number;
}

export type CartType = {
    cartItems?: CartItemType[];
    itemCount: number;
    total: number;
};

export interface ProductType {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    quantity?: number;
}