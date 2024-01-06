import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'RESTORE_CART':
      return { ...state, cartItems: action.payload.cartItems, totalQuantity: action.payload.totalQuantity };
    case 'ADD_TO_CART':
      const updatedCartItems = [...state.cartItems, action.payload.product];
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

      const updatedTotalQuantity = state.totalQuantity + 1;

      return {
        ...state,
        cartItems: updatedCartItems,
        totalQuantity: updatedTotalQuantity,
      };
    case 'REMOVE_FROM_CART':
      const removedItemId = action.payload.productId;
      const updatedItems = state.cartItems.filter(item => item.id !== removedItemId);
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));

      return {
        ...state,
        cartItems: updatedItems,
        totalQuantity: state.totalQuantity - 1,
      };
    // Các case khác nếu cần
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [], totalQuantity: 0 });

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totalQuantity = storedCartItems.reduce((total, item) => {
      if (item && item.quantity) {
        return total + 1;
      }
      return total;
    }, 0);
    dispatch({ type: 'RESTORE_CART', payload: { cartItems: storedCartItems, totalQuantity } });
  }, []);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product } });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { productId } });
  };

  return (
    <CartContext.Provider value={{ cartState: state, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
