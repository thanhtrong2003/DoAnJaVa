import React, { useState, useEffect } from "react";
import { GET_ALL, GET_PAGE } from "../api/apiService";
import imgus from '../assets/images/logo.png';
import { useNavigate } from "react-router-dom";
import SearchResults from "./SearchResults";
import { useCart } from "./CartContext";
import { useAuth } from "./AuthContext"; 
import axios from "axios";

function Header() {
    const { authState, dispatch } = useAuth();
    const [categories, setCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const { cartState } = useCart();
    const navigate = useNavigate();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        GET_ALL(`categories`).then((item) => setCategories(item.data));
    }, []);

    const handleSearchChange = async (event) => {
        try {
            setSearchQuery(event.target.value);
            if (!event.target.value.trim()) {
                setSearchResults([]);
                setDropdownOpen(false);
            } else {
                const nextPage = 1;

                const productResponse = await axios.get('http://localhost:8080/api/products', {
                    params: {
                        page: nextPage - 1,
                        size: 10,
                        title: event.target.value,
                    },
                });
                const products = productResponse.data;
                setSearchResults(products.filter((item) => item.title?.toLowerCase().includes(event.target.value.toLowerCase())));
                setDropdownOpen(true);
            }
        } catch (error) {
            console.error('Error during search:', error);
        }
    };

    const handleLoadMore = async () => {
        try {
            const nextPage = currentPage + 1;

            const productResponse = await axios.get('http://localhost:8080/api/products', {
                params: {
                    page: nextPage - 1,
                    size: 10,
                    title: searchQuery,
                },
            });

            const newProducts = productResponse.data;

            setSearchResults((prevResults) => [...prevResults, ...newProducts]);
            setCurrentPage(nextPage);
        } catch (error) {
            console.error('Error loading more:', error);
        }
    };
    const handleSearchSubmit = async (event) => {
		event.preventDefault(); // Ngăn chặn hành vi mặc định của form
	
		try {
		  // Fetch dữ liệu sản phẩm ngay tại đây
		  const nextPage = 1;
		  const productResponse = await GET_PAGE(
			'products',
			nextPage - 1,
			10,
			null,
			null,
			searchQuery
		  );
	
		  const products = productResponse.data;
	
		  // Thực hiện filter trên dữ liệu
		  const filteredProducts = products.filter((item) =>
			item.title?.toLowerCase().includes(searchQuery.toLowerCase())
		  );
	
		  setSearchResults(filteredProducts);
		 
	
		  // Chuyển hướng đến trang SearchPage với query
		  navigate(`/search-page?q=${searchQuery}`);
		  setDropdownOpen(false);
		} catch (error) {
		  console.error('Lỗi trong quá trình tìm kiếm:', error);
		}
	  };

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    };


    //soluong

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
                        <div class="col-xl-6 col-lg-5 col-md-6">
                         <form className="search-header" onSubmit={handleSearchSubmit}>
                <div className="input-group w-100">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Tìm kiếm sản phẩm"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-info" type="submit">
                            <i className="fa fa-search"></i> Tìm kiếm
                        </button>
                    </div>
                </div>
            </form>
            {isDropdownOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        zIndex: 100,
                        backgroundColor: 'white',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <SearchResults results={searchResults} onLoadMore={handleLoadMore} />
                </div>
                        )}

                    </div>


                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="widgets-wrap float-md-right">
                            {authState.isLoggedIn ? (
                                <>
                                    <div className="widget-header mr-3">
                                        <span className="widget-view" onClick={handleLogout}>
                                            <div className="icon-area">
                                                <i className="fa fa-sign-out-alt"></i>
                                            </div>
                                            <small className="text"> Đăng xuất </small>
                                        </span>
                                    </div>
                                    <div className="widget-header mr-3">
                                        <span className="widget-view">
                                            <div className="icon-area">
                                                <i className="fa fa-user"></i>
                                            </div>
                                            <small className="text">{authState.username}</small>
                                        </span>
                                    </div>
                                </>
                            ) : (
                                <div className="widget-header mr-3">
                                    <a href="http://localhost:3000/register" className="widget-view">
                                        <div className="icon-area">
                                            <i className="fa fa-comment-dots"></i>
                                            <span className="notify">1</span>
                                        </div>
                                        <small className="text"> Đăng ký </small>
                                    </a>
                                </div>
                            )}
                         
                                <div className="widget-header mr-3">
                                    <a href="http://localhost:3000/orders" className="widget-view">
                                        <div className="icon-area">
                                            <i className="fa fa-store"></i>
                                        </div>
                                        <small className="text"> Đơn hàng </small>
                                    </a>
                                </div>
                                <div className="widget-header">
                                    <a href="http://localhost:3000/shopping-cart" className="widget-view">
                                        <div className="icon-area">
                                            <i className="fa fa-shopping-cart"></i>
                                            <span className="notify">{cartState.totalQuantity}</span>
                                        </div>
                                        <small className="text"> Giỏ hàng </small>
                                    </a>
                                </div>
                                <div className="widget-header">
                                    <a href="http://localhost:3000" className="widget-view">
                                        <div className="icon-area">
                                            <i className="fa fa-home"></i>
                                        </div>
                                        <small className="text"> Trang chủ </small>
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
                                <a className="nav-link" href="/contact">
                                    Liên hệ</a>
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