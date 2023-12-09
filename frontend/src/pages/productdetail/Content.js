


import React, { useEffect, useState } from "react";
import { GET_ID } from "../../api/apiService";
import axios from 'axios';
import { useLocation } from "react-router-dom";
const cardTextStyle = {
    maxWidth: "80%",
};

const Content = ({ onAddToCart, setCartItems, cartItems }) => {

    
    const [product, setProduct] = useState({});
    const location = useLocation();
     // Use useNavigate instead of useHistory
    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get("productId");
  
    const [quantity, setQuantity] = useState(1);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    // Thời gian để tự động ẩn thông báo sau khi hiển thị (ví dụ: 3 giây)
    const AUTO_HIDE_DELAY = 3000;

    // Effect để tự động ẩn thông báo sau khi hiển thị
    useEffect(() => {
        let timeout;
        if (showSuccessMessage) {
            timeout = setTimeout(() => {
                setShowSuccessMessage(false);
            }, AUTO_HIDE_DELAY);
        }
        return () => clearTimeout(timeout);
    }, [showSuccessMessage]);


    useEffect(() => {
      GET_ID(`products`, productId).then((item) => setProduct(item.data));
      
    }, [productId]);
  
    const handleAddToCart = () => {
        const existingItemIndex = cartItems ? cartItems.findIndex(item => item && item.id === product.id) : -1;

        if (existingItemIndex !== -1) {
            // Sử dụng giá trị mới của quantity từ hàm setState
            const updatedQuantity = cartItems[existingItemIndex].quantity + quantity;
        
            // Cập nhật quantity của sản phẩm trong giỏ hàng
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity = updatedQuantity;
        
            setCartItems(updatedCartItems);
            localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        } else {
            const cartItem = {
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: quantity,
                thumbnail: product.thumbnail,
            };
        
            // Cập nhật quantity của sản phẩm trong giỏ hàng khi thêm mới
            const updatedCartItems = [...cartItems, cartItem];
            setCartItems(updatedCartItems);
            localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        }
        
        setShowSuccessMessage(true);
        setQuantity(1);  // Đặt lại giá trị quantity về 1 sau khi thêm vào giỏ hàng
    };

    
    return (
        <section>
            <section className="py-3 bg-light">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a>Home</a>
                        </li>
                        <li className="breadcrumb-item">

                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            {product.title}
                        </li>
                    </ol>
                </div>
            </section>
            <section class="section-content bg-white padding-y">
                <div class="container">
                    <div class="row">
                        <aside class="col-md-6">
                            <div class="card">
                                <article class="gallery-wrap">
                                    <div class="img-big-wrap">
                                        <div>
                                            <a href="#">
                                                <img src={`./images/items/${product.thumbnail}`} />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="thumbs-wrap">
                                        <a href="#" class="item-thumb">
                                            <img src={`./images/items/${product.thumbnail}`} />
                                        </a>
                                        <a href="#" class="item-thumb">
                                            <img src={`./images/items/${product.thumbnail}`} />
                                        </a>
                                        <a href="#" class="item-thumb">
                                            <img src={`./images/items/${product.thumbnail}`} />
                                        </a>
                                        <a href="#" class="item-thumb">
                                            <img src={`./images/items/${product.thumbnail}`} />
                                        </a>
                                    </div>
                                </article>
                            </div>
                        </aside>
                        <main class="col-md-6">
                            <article class="product-info-aside">
                                <h2 class="title mt-3">{product.title} </h2>
                                <div class="rating-wrap my-3">
                                    <ul class="rating-stars">
                                        <li style={cardTextStyle} class="stars-active">
                                            <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </li>
                                    </ul>
                                    <small class="label-rating text-muted">132 reviews</small>
                                    <small class="label-rating text-success">
                                        <i class="fa fa-clipboard-check"></i> 154 orders{" "}
                                    </small>
                                </div>
                                <div class="mb-3">
                                    <h5 class="title mt-3 text-danger">{product.price}$ </h5>
                                    {/* <span class="text-muted">USD 562.65 incl. VAT</span> */}
                                </div>
                                <p>
                                    {product.description}{" "}

                                </p>
                                <dl class="row">
                                    <dt class="col-sm-3">Nhà sản xuất</dt>
                                    <dd class="col-sm-9">
                                        <a href="#">1Four</a>
                                    </dd>
                                    <dt class="col-sm-3">Bảo hành</dt>
                                    <dd class="col-sm-9">24 tháng</dd>
                                    <dt class="col-sm-3">Thời gian nhận hàng:</dt>
                                    <dd class="col-sm-9">3-4 ngày</dd>
                                    <dt class="col-sm-3">Tình trạng</dt>
                                    <dd class="col-sm-9">Còn hàng</dd>
                                </dl>
                                <div class="form-row mt-4">
                                  
                                    <div class="form-group col-md">
                                    
                                        <input  class="btn  btn-info "
                                        type="number" 
                                        value={quantity} 
                                        onChange={(e) => setQuantity(e.target.value)} 
                                    />
                                    <button  class="fas fa-shopping-cart btn  btn-info"  onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
                                    </div>
                                </div>
                                 {/* Hiển thị thông báo thành công */}
            {showSuccessMessage && (
                <div className="alert alert-success mt-3" role="alert">
                    Sản phẩm đã được thêm vào giỏ hàng thành công!
                </div>
            )}
                            </article>
                        </main>
                    </div>
                </div>
            </section>
        </section>
    );
};
export default Content;
