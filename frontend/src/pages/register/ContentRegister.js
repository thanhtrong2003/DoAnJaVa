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
    const [success, setSuccess] = useState(false); // Thêm state cho thông báo thành công
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/users', user);
            console.log('Registration successful:', response.data);
            // Hiển thị thông báo thành công
            setSuccess(true);
            // Chuyển hướng đến trang chủ sau khi đăng ký thành công
            //navigate('/login');
        } catch (error) {
            console.error('Registration failed:', error.response.data);
            setError('Đăng ký không thành công. Hãy thử lại.');
        }
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
                                        onChange={(e) => setUser({ ...user, fullname: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Tên đăng nhập:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={user.username}
                                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                <label>Mật khẩu:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                />
                            </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={user.email}
                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Số điện thoại:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={user.phoneNumber}
                                        onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                                    />
                                </div>
                          
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
