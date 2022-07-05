import React, { useState, useEffect } from 'react';
import { Routes, Route, useMatch, useNavigate } from "react-router-dom";
import { message } from 'antd';
import Register from './src/register';
import Home from './src/home';
import Login from './src/login';
import ItemView from './src/itemView';
import Remind from './src/remind';
import Menu from "./src/shared/menu";
import NotFound from './src/shared/NotFound';
import AuthContext from "./src/contexts";
import { getMe } from "./src/WebAPI";
import { getAuthToken, getUserName } from "./src/utils";
import './src/shared/main.scss';

const Main = () => {

    document.body.classList.add('Colleen');
    const root = '/Colleen';
    const login = useMatch(root + '/login') !== null;
    const register = useMatch(root + '/register') !== null;
    // user 有東西就代表有登入
    const [user, setUser] = useState(null);
    const userName = getUserName();
    const navigate = useNavigate();


    useEffect(() => {
        //未登入導回登入頁
        if (!login && !register) {
            if (userName === null) {
                message.error('尚未登入', 1);
                navigate('/Colleen/login');
            }
        }
        // 以 getAuthToken 從 localStorage 讀取 token
        if (getAuthToken()) {
            // 有 token 才 call API
            getMe().then((response) => {
                if (response.ok) {
                    setUser(response.data);
                }
            });
        }
    }, []);// eslint-disable-line react-hooks/exhaustive-deps


    const MenuShow = () => {
        if (login || register) { return false; } else { return true; }
    }

    return (<>
        <AuthContext.Provider value={{ user, setUser }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="Register" element={<Register />} />
                <Route path="itemView" element={<ItemView />} />
                <Route path="remind" element={<Remind />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </AuthContext.Provider>
        {MenuShow() ? <Menu /> : ''}
    </>)

}


export default Main;