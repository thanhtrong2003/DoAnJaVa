import React, { useState, useEffect } from "react";
import { GET_ALL } from "../api/apiService";
import imgus from '../assets/images/logo.png';
import { useNavigate } from "react-router-dom";
import SearchResults from "./SearchResults";
import { useCart } from "./CartContext";
import axios from "axios";

function Header({ isLoggedIn }) {
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
			// Reset currentPage to 1 when a new search query is entered
			const nextPage = 1;
	  
			const productResponse = await axios.get('http://localhost:8080/api/products', {
			  params: {
				page: nextPage -1,
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
			  page: nextPage-1,
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
                        <form className="search-header" >
                            <div className="input-group w-100">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-info" type="submit">
                                        <i className="fa fa-search"></i> Search
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
                                        {isLoggedIn ? (
                                            <small className="text">{/* Display username or user-related text */}</small>
                                        ) : (
                                            <small className="text"> Login </small>
                                        )}
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
                                            <span className="notify">{cartState.totalQuantity}</span>
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