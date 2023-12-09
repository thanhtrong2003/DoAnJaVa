import React from "react";
import background from '../../assets/images/banners/banner-banner1.jpg';
const Request = () => (
    
    <section class="padding-bottom">

        <header class="section-heading heading-line">
            <h4 class="title-section text-uppercase">Yêu cầu về giá</h4>
        </header>

        <div class="row">
            <div class="col-md-8">
                <div class="card-banner banner-quote overlay-gradient" style={{backgroundImage: `url(${background})`}}>
                    <div class="card-img-overlay white">
                        <h3 class="card-title">Một cách dễ dàng để gửi yêu cầu tới nhà cung cấp</h3>
                        <p class="card-text" style={{ width: "400px" }}>Lựa chọn giá cả hoặc mẫu mã theo yêu cầu
                            .</p>
                        <a href="http://localhost:3000/listinggrid" class="btn btn-info rounded-pill"> Xem thêm</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">

                <div class="card card-body">
                    <h4 class="title py-3">Một yêu cầu - Nhiều trích dẫn</h4>
                    <form>
                        <div class="form-group">
                            <input class="form-control" name="" placeholder="Bạn đang tìm kiếm điều gì ?" type="text" />
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <input class="form-control" placeholder="Số lượng" name="" type="text" />

                                <select class="custom-select form-control">
                                    <option>Pieces</option>
                                    <option>Litres</option>
                                    <option>Tons</option>
                                    <option>Gramms</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group text-muted">
                            <p>Chọn loại mẫu:</p>
                            <label class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" value="option1" />
                                <span class="form-check-label">Yêu cầu về giá</span>
                            </label>
                            <label class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" value="option2" />
                                <span class="form-check-label">Yêu cầu về mẫu</span>
                            </label>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-success">Gửi yêu cầu</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </section>
);
export default Request