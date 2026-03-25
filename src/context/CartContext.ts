import { createContext } from 'react';
import type { Comic } from '../data/comics';

export interface CartItem {
  comic: Comic;
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (comic: Comic) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);