// Cart.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Cart from "../pages/shopping/Cart";
import { useCart } from "./CartContext";
const Shopping = () => {
  const location = useLocation();
  const cartItemsFromState = location.state && location.state.cartItems ? location.state.cartItems : [];
  const { cartState, removeFromCart } = useCart();
  // State để lưu trữ giỏ hàng
  const [cartItems, setCartItems] = useState(cartItemsFromState);

  // useEffect để cập nhật giỏ hàng từ localStorage khi component được tạo
  useEffect(() => {
    const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(initialCartItems);
  }, []);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    // Tìm chỉ mục của sản phẩm cần xóa trong mảng cartItems
    const itemIndex = cartItems.findIndex(item => item && item.id === productId);
  
    if (itemIndex !== -1) {
      // Tạo bản sao của mảng cartItems và loại bỏ sản phẩm tại chỉ mục itemIndex
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(itemIndex, 1);
  
      // Cập nhật state và lưu vào localStorage sử dụng giá trị mới nhất của state
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };
  
  const handleUpdateQuantity = (productId, newQuantity) => {
    // Cập nhật số lượng sản phẩm trong giỏ hàng
    const updatedCartItems = cartItems.map(item => {
      if (item && item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
  
    // Cập nhật giỏ hàng trong localStorage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  
    // Cập nhật state giỏ hàng
    setCartItems(updatedCartItems);
  };
  
  const handleOrderPlaced = () => {
    // Xóa giỏ hàng sau khi đặt đơn hàng
    setCartItems([]);
    localStorage.removeItem("cartItems");
    // Hiển thị thông báo đặt hàng thành công
    // ...
  };

  return (
    <div className="container">
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} onUpdateQuantity={handleUpdateQuantity} onOrderPlaced={handleOrderPlaced} />
      {/* ... */}
    </div>
  );
};

export default Shopping;