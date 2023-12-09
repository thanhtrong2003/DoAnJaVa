import React from "react";
import background from '../../assets/images/banners/banner-banner1.jpg'
import background1 from '../../assets/images/items/3.jpg'
const Deal = () => (
    <section class="section-content bg-white padding-y">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="card-banner overlay-gradient" 
                    style={{backgroundImage: `url(${background})`,height:"350px"}} >

                    <div class="card-img-overlay white">
                        <h3 class="card-title">Great Bundle only for 99$ <h4> It is hassle free </h4></h3>
                        <p class="card-text" style={{width: "400px"}}>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod
                            tempor incididunt.</p>
                        <a href="" class="btn btn-warning">Learn more</a>
                    </div>
                </div> 
            </div> 
            <div class="col-md-4">
                <div class="card-banner"
                          style={{backgroundImage: `url(${background1})`,height:"350px"}} >
                    <article class="caption bottom">
                        <h5 class="card-title">Perfume SexyMan</h5>
                        <p>No matter how far along you are in your sophistication as an amateur.</p>
                    </article>
                </div>
            </div>
        </div> 

        

        <div class="row">
            <div class="col-md-3">
                <article class="card card-product-grid">
                    <div class="img-wrap">
                        <b class="badge badge-danger mr-1">SAVE %10</b>
                        <img  src = {require("../../assets/images/items/1.jpg")}/>
                    </div>
                    <div class="info-wrap">
                        <a href="#" class="title">Great Smartwatch</a>
                        <div class="price-wrap my-2">
                            <span class="price">$45</span>
                            <del class="price-old">$90</del>
                        </div> 
                        <a href="#" class="btn btn-block btn-primary">Order now</a>
                    </div>
                </article>
            </div> 
            <div class="col-md-3">
                <article class="card card-product-grid">
                    <div class="img-wrap">
                        <b class="badge badge-danger mr-1">SAVE %20</b>
                        <img  src = {require("../../assets/images/items/3.jpg")}/>
                    </div>
                    <div class="info-wrap">
                        <a href="#" class="title">Cheap and Best demo cloth</a>
                        <div class="price-wrap my-2">
                            <span class="price">$45</span>
                            <del class="price-old">$90</del>
                        </div> 
                        <a href="#" class="btn btn-block btn-primary">Order now</a>
                    </div>
                </article>
            </div> 
            <div class="col-md-3">
                <article class="card card-product-grid">
                    <div class="img-wrap">
                        <b class="badge badge-danger mr-1">SAVE %10</b>
                        <img  src = {require("../../assets/images/items/4.jpg")}/>
                    </div>
                    <div class="info-wrap">
                        <a href="#" class="title">Great book name</a>
                        <div class="price-wrap my-2">
                            <span class="price">$45</span>
                            <del class="price-old">$90</del>
                        </div> 
                        <a href="#" class="btn btn-block btn-primary">Order now</a>
                    </div>
                </article>
            </div> 
            <div class="col-md-3">
                <article class="card card-product-grid">
                    <div class="img-wrap">
                        <b class="badge badge-danger mr-1">SAVE %10</b>
                        <img  src = {require("../../assets/images/items/5.jpg")}/>
                    </div>
                    <div class="info-wrap">
                        <a href="#" class="title">Great book name</a>
                        <div class="price-wrap my-2">
                            <span class="price">$45</span>
                            <del class="price-old">$90</del>
                        </div>
                        <a href="#" class="btn btn-block btn-primary">Order now</a>
                    </div>
                </article>
            </div> 
            <div class="col-md-3">
                <article class="card card-product-grid">
                    <div class="img-wrap">
                        <b class="badge badge-danger mr-1">SAVE %10</b>
                        <img  src = {require("../../assets/images/items/7.jpg")}/>
                    </div>
                    <div class="info-wrap">
                        <a href="#" class="title">Great book name</a>
                        <div class="price-wrap my-2">
                            <span class="price">$45</span>
                            <del class="price-old">$90</del>
                        </div>
                        <a href="#" class="btn btn-block btn-primary">Order now</a>
                    </div>
                </article>
            </div> 
            <div class="col-md-3">
                <article class="card card-product-grid">
                    <div class="img-wrap">
                        <b class="badge badge-danger mr-1">SAVE %10</b>
                        <img  src = {require("../../assets/images/items/8.jpg")}/>
                    </div>
                    <div class="info-wrap">
                        <a href="#" class="title">Great product name</a>
                        <div class="price-wrap my-2">
                            <span class="price">$65</span>
                            <del class="price-old">$190</del>
                        </div> 
                        <a href="/" class="btn btn-block btn-primary">Order now</a>
                    </div>
                </article>
            </div> 
            <div class="col-md-3">
                <article class="card card-product-grid">
                    <div class="img-wrap">
                        <b class="badge badge-danger mr-1">SAVE %10</b>
                        <img  src = {require("../../assets/images/items/9.jpg")}/>
                    </div>
                    <div class="info-wrap">
                        <a href="..." class="title">Great Headset stereo music</a>
                        <div class="price-wrap my-2">
                            <span class="price">$245</span>
                            <del class="price-old">$390</del>
                        </div> 
                        <a href="..." class="btn btn-block btn-primary">Order now</a>
                    </div>
                </article>
            </div> 
            <div class="col-md-3">
                <article class="card card-product-grid">
                    <div class="img-wrap">
                        <b class="badge badge-danger mr-1">SAVE %10</b>
                        <img  src = {require("../../assets/images/items/10.jpg")}/>
                    </div>
                    <div class="info-wrap">
                        <a href="..." class="title">Amazing Speaker</a>
                        <div class="price-wrap my-2">
                            <span class="price">$45</span>
                            <del class="price-old">$90</del>
                        </div> 
                        <a href="..." class="btn btn-block btn-primary">Order now</a>
                    </div>
                </article>
            </div> 
        </div>
    </div> 

</section>
);
export default Deal