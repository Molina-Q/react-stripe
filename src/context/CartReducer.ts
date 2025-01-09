import { CartItemType, CartType, ProductType } from "../types";

const sumItems = (cartItems: CartItemType[]) => {
  const itemCount = cartItems.reduce(
    (total, product) => total + (product.quantity ?? 0),
    0
  );
  const total = cartItems.reduce(
    (total, product) => total + product.price * (product.quantity ?? 0),
    0
  );
  return { itemCount, total };
};

type CartAction = {
  type: string;
  payload?: ProductType;
};

const cartReducer = (state: CartType, action: CartAction): CartType => {
  switch (action.type) {
    case 'ADD_ITEM': {
      // If cartItems is undefined, give it an empty array
      if (!state.cartItems) {
        return {
          ...state,
          cartItems: [],
          ...sumItems([]),
        };
      }
      // Otherwise proceed with adding the item
      const existingItem = state.cartItems.find((item) => item.id === action.payload?.id);
      if (!existingItem && action.payload) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      };
    }

    case 'INCREASE': {
      if (!state.cartItems) {
        return {
          ...state,
          cartItems: [],
          ...sumItems([]),
        };
      }

      const newCartItems = state.cartItems.map(item => {
        if (item.id === action.payload?.id) {
          return { ...item, quantity: (item.quantity ?? 0) + 1 };
        }
        return item;
      });

      return {
        ...state,
        cartItems: newCartItems,
        ...sumItems(newCartItems),
      };
    }

    case 'DECREASE': {
      if (!state.cartItems) {
        return {
          ...state,
          cartItems: [],
          ...sumItems([]),
        };
      }

      const newCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload?.id && (item.quantity ?? 0) > 1) {
          return { ...item, quantity: (item.quantity ?? 0) - 1 };
        }
        return item;
      });

      return {
        ...state,
        cartItems: newCartItems,
        ...sumItems(newCartItems),
      };
    }

    case 'REMOVE_ITEM': {
      const updatedCartItems = state.cartItems?.filter(
        item => item.id !== action.payload?.id
      );

      if (!updatedCartItems) {
        return {
          ...state,
          cartItems: [],
          ...sumItems([]),
        };
      }

      return {
        ...state,
        cartItems: updatedCartItems,
        ...sumItems(updatedCartItems),
      };
    }


    default:
      return state;
  }
};

export default cartReducer;