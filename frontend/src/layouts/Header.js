import React, { useState, useEffect } from "react";
import { GET_ALL } from "../api/apiService";
import imgus from '../assets/images/logo.png';
import { useNavigate } from "react-router-dom";
import SearchCategoryResults from "./SearchCategoryResults";

function Header() {
    const [categories, setCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        GET_ALL(`categories`).then((item) => setCategories(item.data));
    }, []);

    useEffect(() => {
        const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(initialCartItems);
    }, []);

    const handleSearch = () => {
        const results = categories.filter(category => category.name.toLowerCase().includes(searchQuery.toLowerCase()));
        setSearchResults(results);
    };

    const getTotalQuantity = () => {
        // Kiểm tra xem cartItems có tồn tại và có phần tử không
        if (cartItems && cartItems.length > 0) {
          // Sử dụng reduce để tính tổng quantity của tất cả các sản phẩm trong giỏ hàng
          return cartItems.reduce((total, item) => {
            // Kiểm tra xem item có tồn tại và có thuộc tính quantity không
            if (item && item.quantity) {
              return total + item.quantity;
            }
            return total;
          }, 0);
        }
      
        return 0; // Trả về 0 nếu không có sản phẩm trong giỏ hàng
      };
      
    return (
        <header className="section-header">
            <section className="header-main border-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-3 col-md-12">
                            <a href="http://bootstrap-ecommerce.com" className="brand-wrap">
                                <img className="logo" src={imgus} />
                            </a>
                        </div>
                        <div className="col-xl-6 col-lg-5 col-md-6">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSearch();
                                }}
                                className="search-header btn-info"
                            >
                                <div className="input-group w-100">
                                    <select className="custom-select border-right" name="category_name">
                                        <option value="">All type</option>
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.name}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-info" type="submit">
                                            <i className="fa fa-search"></i> Search
                                        </button>
                                    </div>
                                </div>
                            </form>
                            {/* Hiển thị kết quả tìm kiếm */}
                            {searchResults.length > 0 && <SearchCategoryResults results={searchResults} />}
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="widgets-wrap float-md-right">
                                <div className="widget-header mr-3">
                                    <a href="http://localhost:3000/pagemain" className="widget-view">
                                        <div className="icon-area">
                                            <i className="fa fa-user"></i>
                                            <span className="notify">3</span>
                                        </div>
                                        <small className="text"> My profile </small>
                                    </a>
                                </div>
                                <div className="widget-header mr-3">
                                    <a href="http://localhost:3000/register" className="widget-view">
                                        <div className="icon-area">
                                            <i className="fa fa-comment-dots"></i>
                                            <span className="notify">1</span>
                                        </div>
                                        <small className="text"> Register </small>
                                    </a>

                                </div>
                                <div className="widget-header mr-3">
                                    <a href="http://localhost:3000/login" className="widget-view">
                                        <div className="icon-area">
                                            <i className="fa fa-users"></i>
                                            <span className="notify">1</span>
                                        </div>
                                        <small className="text"> Login </small>
                                    </a>

                                </div>
                                <div className="widget-header mr-3">
                                    <a href="http://localhost:3000/orders" className="widget-view">
                                        <div className="icon-area">
                                            <i className="fa fa-store"></i>
                                        </div>
                                        <small className="text"> Orders </small>
                                    </a>
                                </div>
                                <div className="widget-header">
                                    <a href="http://localhost:3000/shopping-cart" className="widget-view">
                                        <div className="icon-area">
                                            <i className="fa fa-shopping-cart"></i>
                                            <span className="notify">{getTotalQuantity()}</span>
                                        </div>
                                        <small className="text"> Cart </small>
                                    </a>
                                </div>
                                <div className="widget-header">
                                    <a href="http://localhost:3000" className="widget-view">
                                        <div className="icon-area">
                                            <i className="fa fa-home"></i>
                                        </div>
                                        <small className="text"> Home </small>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <nav className="navbar navbar-main navbar-expand pl-0">
                        <ul className="navbar-nav flex-wrap">
                            <li className="nav-item">
                                <a className="nav-link" href="http://localhost:3000/">

                                    Trang chủ
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"

                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >

                                    Danh sách sản phẩm

                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {categories.length >
                                        0 &&
                                        categories.map((row) => (
                                            <a
                                                class="dropdown-item"
                                                href={`/ListingGrid?categoryId=${row.id}`}
                                            >
                                                {row.name}
                                            </a>
                                        ))}

                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="/ListingGrid">

                                        Tất cả sản phẩm

                                    </a>
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Thời trang</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">

                                    Làm đẹp
                                </a>
                            </li>


                            <li className="nav-item">
                                <a className="nav-link" href="#">

                                    Khuyến mãi

                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">

                                    Dưới $10
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>




        </header>



    );
}
export default Header;