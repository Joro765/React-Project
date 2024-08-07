import React, { createContext, useState, useEffect } from 'react';
import { logout } from '../api/auth-api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('accessToken');

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        if (storedToken) {
            setAccessToken(storedToken);
        }
    }, []);



    const setAuth = (userData) => {
        setUser(userData);
        setAccessToken(userData.accessToken);

        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('accessToken', userData.accessToken);
    };

    const logoutHandler = () => {
        setUser(null);
        setAccessToken(null);

        localStorage.removeItem('user');
        localStorage.removeItem('accessToken');
    };

    return (
        <AuthContext.Provider value={{ user, accessToken, isAuthenticated: !!accessToken, setAuth, logoutHandler }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };