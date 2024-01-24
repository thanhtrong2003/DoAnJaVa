import React from "react";


const Contact = () => {
    return <section className="">
        <div className="container my-4">
        <h3 className="text-center">Liên hệ</h3>
        <div className="row">
        <div className="col-md-6">
        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.746707153166!2d106.77242407537976!3d10.830685758189913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752701a34a5d5f%3A0x30056b2fdf668565!2zVHLGsOG7nW5nIENhbyDEkOG6s25nIEPDtG5nIFRoxrDGoW5nIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1706005151127!5m2!1svi!2s"
        width="500" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="col-md-6">
            <h3>Điền thông tin liên hệ</h3>
            <form>
                <div className="mb-3">
                    <label><strong>Họ tên</strong></label>
                    <input placeholder="Nhập họ tên" type="text" id="name" className="form-control" />
                </div>
                <div className="mb-3">
                    <label><strong>Email</strong></label>
                    <input placeholder="Nhập email" type="text" id="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label><strong>Phone</strong></label>
                    <input placeholder="Nhập numberphone" type="text" id="phone" className="form-control" />
                </div>
                <div className="mb-3">
                    <label><strong>Tiêu đề</strong></label>
                    <input placeholder="Nhập tiêu đề" type="text" id="title" className="form-control" />
                </div>
                <div className="mb-3">
                    <label><strong>Nội dung</strong></label>
                    <textarea placeholder="Nhập nội dung" type="text" id="content" className="form-control"> </textarea>
                </div>
                <div className="mb-3">
                   <button type="submit" className="btn btn-success">Gửi liên hệ</button>
                </div>
            </form>
        </div>
        </div>
        </div>
    </section>;
}

export default Contact;