// OrderForm.jsx
import React, { useState } from "react";
import axios from "axios";
import styles from './OrderForm.module.css';
import momoLogo from '../../assets/images/MoMo_Logo.png';
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
    payment_method: "cash", // Default to "cash"
  });
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData({
      ...orderData,
      [name]: value,
    });
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    setOrderData({
      ...orderData,
      payment_method: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/api/orders", orderData)
      .then(response => {
        console.log(response.data);
        alert("Đơn hàng đặt thành công!");
        setIsOrderPlaced(true);
        onOrderPlaced();
      })
      .catch(error => {
        console.error(error);
        console.error(error.response);
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
        <form className={styles['order-form']} onSubmit={handleSubmit}>
          <div className={styles['form-left']}>
            <label className={styles['form-label']}>Họ và tên:</label>
            <input className={styles['form-input']} type="text" name="fullname" value={orderData.fullname} onChange={handleInputChange} required />
         
            <label className={styles['form-label']}>Email:</label>
            <input className={styles['form-input']} type="email" name="email" value={orderData.email} onChange={handleInputChange} required />

            <label className={styles['form-label']}>Địa chỉ:</label>
            <input className={styles['form-input']} type="text" name="address" value={orderData.address} onChange={handleInputChange} required />

            <label className={styles['form-label']}>Số điện thoại:</label>
            <input className={styles['form-input']} type="text" name="phone_number" value={orderData.phone_number} onChange={handleInputChange} required />
          </div>

          <div className={styles['form-right']}>
            <label className={styles['form-label']}>Ghi chú:</label>
            <textarea className={styles['form-textarea']} name="note" value={orderData.note} onChange={handleInputChange} />

            <label className={styles['form-label']}>Đơn hàng :</label>
            <input className={styles['form-input']} type="text" name="order_date" value={orderData.order_date} onChange={handleInputChange} readOnly />

            <label className={styles['form-label']}>Tổng tiền:</label>
            <input
              className={styles['form-input']}
              type="text"
              name="total_money"
              value={`${totalPrice.toLocaleString()}000VND`}
              readOnly
            />

            <div className={styles['payment-method-options']}>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={handlePaymentMethodChange}
              />
              Thanh toán bằng tiền mặt
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="momo"
                checked={paymentMethod === "momo"}
                onChange={handlePaymentMethodChange}
              />
              Thanh toán bằng <img src={momoLogo} alt="Momo Logo" />
            </label>
          </div>
          </div>
          <button className={styles['form-button']} type="submit">Đặt hàng</button>
        </form>
      )}
    </div>
  );
};

export default OrderForm;
