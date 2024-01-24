// RegistrationForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserRegister = () => {
    const [user, setUser] = useState({
        fullname: '',
        username: '',
        password: '',
        email: '',
        phoneNumber: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async () => {
        // Các điều kiện kiểm tra khác
        console.log('User details:', user); // In ra giá trị của user để kiểm tra
        if (user.password.length < 6) {
            setError('Mật khẩu phải có ít nhất 6 ký tự.');
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(user.email)) {
            setError('Định dạng email không hợp lệ.');
            return;
        }
        const hasNumber = /\d/;
        if (hasNumber.test(user.username)) {
            setError('Tên đăng nhập không được chứa số.');
            return;
        }
        const phoneNumberPattern = /^\d{10,}$/;
        if (!phoneNumberPattern.test(user.phoneNumber)) {
            setError('Số điện thoại phải có ít nhất 10 chữ số.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/api/users/register', user);
            console.log('Registration successful:', response.data);
            setError('');
            setSuccess(true);
        } catch (error) {
            console.error('Registration failed:', error);
    
            if (error.response && error.response.status === 500) {
                setError('Internal Server Error. Please try again later.');
            } else if (error.response && error.response.data) {
                if (error.response.data.includes('Tên đăng nhập đã tồn tại')) {
                    setError('Tên đăng nhập đã tồn tại. Vui lòng chọn một tên khác.');
                } else {
                    setError(`Đăng ký không thành công. ${error.response.data}`);
                }
            } else {
                setError('Đăng ký không thành công. Hãy thử lại.');
            }
    
            setSuccess(false);
        }
    };
    
    

    const handleChange = (e, field) => {
        setUser({ ...user, [field]: e.target.value });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Đăng Ký</h2>
                            <form>
                                <div className="form-group">
                                    <label>Họ và tên:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={user.fullname}
                                        onChange={(e) => handleChange(e, 'fullname')}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Tên đăng nhập:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={user.username}
                                        onChange={(e) => handleChange(e, 'username')}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Mật khẩu:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={user.password}
                                        onChange={(e) => handleChange(e, 'password')}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={user.email}
                                        onChange={(e) => handleChange(e, 'email')}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Số điện thoại:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={user.phoneNumber}
                                        onChange={(e) => handleChange(e, 'phoneNumber')}
                                    />
                                </div>
                                <p className="mt-3 text-center">
                                    Nếu bạn đã có tài khoản, vui lòng{' '}
                                    <span
                                        className="text-primary"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => navigate('/login')}
                                    >
                                        đăng nhập
                                    </span>
                                </p>
                                     {error && <p className="text-danger">{error}</p>}
                                {success && <p className="text-success">Đăng ký thành công!</p>}

                                <button type="button" className="btn btn-primary btn-block" onClick={handleRegister}>
                                    Đăng Ký
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserRegister;
