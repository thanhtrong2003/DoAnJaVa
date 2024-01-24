import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { useAuth } from '../../layouts/AuthContext';

const UserLogin = () => {
    const [user, setUser] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { dispatch } = useAuth();
    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', user);
            console.log('Login successful:', response.data);
            // Set the login status to true
            dispatch({ type: 'LOGIN', username: user.username });
            // Redirect to the home page after successful login
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
            setError('Tên đăng nhập hoặc mật khẩu không chính xác. Hãy thử lại.');
        }
    };

    const responseGoogle = async (response) => {
        try {
            console.log('Google login response:', response);
            // Send the Google token to your server for verification
            const googleResponse = await axios.post('http://localhost:8080/api/users/login/google', {
                googleToken: response.tokenId,
            });
            console.log('Server response:', googleResponse.data);
            // Set the login status to true
        
            // Redirect to the home page after successful Google login
            navigate('/');
        } catch (error) {
            console.error('Google login failed:', error);
            //setError('Đăng nhập bằng Google thất bại. Hãy thử lại.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Đăng Nhập</h2>
                            <form>
                                <div className="form-group">
                                    <label>Tên đăng nhập:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        value={user.username}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Mật khẩu:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={user.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                {error && <p className="text-danger">{error}</p>}
                                <button type="button" className="btn btn-primary btn-block" onClick={handleLogin}>
                                    Đăng Nhập
                                </button>
                                <div className="mt-3 text-center">
                                    <p>hoặc</p>
                                    <GoogleLogin
                                        clientId="633459100957-k4q8qjig5lkja13ngbpbmdt28p37hs7e.apps.googleusercontent.com"
                                        buttonText="Đăng nhập với Google"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                    />
                                </div>
                                <div className="mt-3 text-center">
                                    <p>Nếu bạn chưa có tài khoản, vui lòng <a href="/register">đăng ký</a>.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
