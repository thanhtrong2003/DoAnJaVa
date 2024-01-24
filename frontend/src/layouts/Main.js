import React from "react";
import Home from "./Home";
import {Routes,Route} from 'react-router-dom';
import ProductDetail from "./ProductDetail";
import Offers from "./Offfers";
import Shopping from "./Shopping";
import Register from "./Register";
import Login from "./Login";
import Category from "./Category";
import Payment from "./Payment";
import Content from "./Content";
import Starter from "./Starter";

import Setting from "./Setting";
import Seller from "./Seller";
import Orders from "./Orders";
import PageMain from "./PageMain";
import Address from "./Address";
import ListingLarge from "./ListingLarge";
import ListingGrid from "./ListingGrid";
import SearchResultsPage from "./SearchResultsPage";
import Contact from "../pages/contact/Contact";



const Main = () => (
 
    <main>
        <Routes>
            <Route  path="/" element={<Home/>} />
             <Route  path="product-detail" element={<ProductDetail/>} />
             <Route  path="offers" element={<Offers/>} />
             <Route  path="shopping-cart" element={<Shopping/>} />
             <Route  path="register" element={<Register/>} />
             <Route  path="login" element={<Login/>} />
             <Route  path="payment" element={<Payment/>} />
             <Route  path="category" element={<Category/>} />
             <Route  path="content" element={<Content/>} />
             <Route  path="starter" element={<Starter/>} />
             <Route  path="contact" element={<Contact/>} />
             <Route  path="setting" element={<Setting/>} />
             <Route  path="seller" element={<Seller/>} />
             <Route  path="orders" element={<Orders/>} />
             <Route  path="pagemain" element={<PageMain/>} />
             <Route  path="address" element={<Address/>} />
             <Route path="search-page" element={<SearchResultsPage />} />
             <Route  path="listinglarge" element={<ListingLarge/>} />
             <Route  path="listinggrid" element={<ListingGrid/>} />
        </Routes>
    </main>

)
 
export default Main;