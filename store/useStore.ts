import { create } from "zustand";

type CartItem = ProductData & { quantity: number };

type Store = {
  decreaseQuantity: any;
  increaseQuantity: any;
  cart: CartItem[];
  addToCart: (product: ProductData) => void;
  removeFromCart: (productId: string) => void;
};
type Order = {
  orderId: string | null;
  setOrderId: (id: string | null) => void;
};
export const useStore = create<Store>((set) => {
  function getInitialCart() {
    try {
      const cart =
        typeof localStorage !== "undefined"
          ? localStorage.getItem("cart")
          : null;
      return cart ? JSON.parse(cart) : [];
    } catch (error) {
      console.error("Error parsing cart data from localStorage:", error);
      return [];
    }
  }
  const initialCart = getInitialCart();

  return {
    cart: initialCart,
    addToCart: (product) =>
      set((state) => {
        const productExists = state.cart.find((item) => item.id === product.id);
        let newCart;
        if (productExists) {
          newCart = state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          newCart = [...state.cart, { ...product, quantity: 1 }];
        }
        localStorage.setItem("cart", JSON.stringify(newCart));
        return { cart: newCart };
      }),
    removeFromCart: (productId) =>
      set((state) => {
        const newCart = state.cart.filter(
          (product) => product.id !== productId
        );
        localStorage.setItem("cart", JSON.stringify(newCart));
        return { cart: newCart };
      }),
    increaseQuantity: (id: string) =>
      set((state) => {
        const newCart = state.cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        localStorage.setItem("cart", JSON.stringify(newCart));
        return { cart: newCart };
      }),
    decreaseQuantity: (id: string) =>
      set((state) => {
        const newCart = state.cart.map((item) =>
          item.id === id && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        localStorage.setItem("cart", JSON.stringify(newCart));
        return { cart: newCart };
      }),
  };
});


export const useOrder = create<Order>((set) => ({
  orderId: null,
  setOrderId: (id) => set({ orderId: id }),
}));