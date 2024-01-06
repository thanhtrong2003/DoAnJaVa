import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

const UserLogin = ({ setLoggedIn }) => {
    const [user, setUser] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', user);
            console.log('Login successful:', response.data);
            // Set the login status to true
            setLoggedIn(true);
            // Redirect to the home page after successful login
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error.response);
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
            setLoggedIn(true);
            // Redirect to the home page after successful Google login
            navigate('/');
        } catch (error) {
            console.error('Google login failed:', error.response);
            setError('Đăng nhập bằng Google thất bại. Hãy thử lại.');
        }
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
                                {error && <p className="text-danger">{error}</p>}
                                <button type="button" className="btn btn-primary btn-block" onClick={handleLogin}>
                                    Đăng Nhập
                                </button>
                                <div className="mt-3 text-center">
                                    <p>hoặc</p>
                                    <GoogleLogin
                                        clientId="810882291695-tjjpk133phohjsorsukgupuptbuhmp4k.apps.googleusercontent.com"
                                        buttonText="Đăng nhập với Google"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                    />
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
