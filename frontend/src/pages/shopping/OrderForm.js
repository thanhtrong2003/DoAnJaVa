// OrderForm.js
import React, { useState } from "react";
import axios from "axios";
import styles from './OrderForm.module.css';

const OrderForm = ({ totalPrice, onOrderPlaced }) => {
  const [orderData, setOrderData] = useState({
    address: "",
    email: "",
    fullname: "",
    note: "",
    order_date: new Date().toISOString(),
    phone_number: "",
    status: 0,
    total_money: totalPrice,
  });
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData({
      ...orderData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/api/orders", orderData)
      .then(response => {
        console.log(response.data);
        alert("Đơn hàng đặt thành công!");
        setIsOrderPlaced(true);
        onOrderPlaced(); // Gọi hàm callback để thông báo component cha (Cart) rằng đơn hàng đã được đặt thành công
      })
      .catch(error => {
        console.error(error);
        console.error(error.response); // Log response từ server
        alert("Failed to place order. Please try again.");
      });
  };

  return (
    <div className={styles['order-form-container']}>
      {isOrderPlaced ? (
        <div>
          <h2 className={styles['order-form-title']}>Đặt đơn hàng</h2>
          <p>Đơn hàng đã được đặt thành công!</p>
        </div>
      ) : (
        <div>
          <h2 className={styles['order-form-title']}>Đặt đơn hàng</h2>
          <form className={styles['order-form']} onSubmit={handleSubmit}>
            <label className={styles['form-label']}>Họ và tên:</label>
            <input className={styles['form-input']} type="text" name="fullname" value={orderData.fullname} onChange={handleInputChange} required />

            <label className={styles['form-label']}>Email:</label>
            <input className={styles['form-input']} type="email" name="email" value={orderData.email} onChange={handleInputChange} required />

            <label className={styles['form-label']}>Địa chỉ:</label>
            <input className={styles['form-input']} type="text" name="address" value={orderData.address} onChange={handleInputChange} required />

            <label className={styles['form-label']}>Số điện thoại:</label>
            <input className={styles['form-input']} type="text" name="phone_number" value={orderData.phone_number} onChange={handleInputChange} required />

            <label className={styles['form-label']}>Ghi chú:</label>
            <textarea className={styles['form-textarea']} name="note" value={orderData.note} onChange={handleInputChange} />

            <label className={styles['form-label']}>Đơn hàng :</label>
            <input className={styles['form-input']} type="text" name="order_date" value={orderData.order_date} onChange={handleInputChange} readOnly />
            
            <label className={styles['form-label']}>Tổng tiền:</label>
            <input className={styles['form-input']} type="number" name="total_money" value={totalPrice} readOnly />
            
            <button className={styles['form-button']} type="submit">Đặt hàng</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
