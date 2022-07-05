import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import classnames from 'classnames';
import './header.scss';

const { Header } = Layout;

const HeaderC = () => {

    const [currentActive, setCurrentActive] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    const handleScroll = () => {
        let scrollTop = document.documentElement.scrollTop;
        (scrollTop > 64 ? setCurrentActive(true) : setCurrentActive(false));
    }

    return (
        <Header id="header" className={classnames({ 'fix': currentActive })}>
            <div className="logo"></div>
        </Header>
    );

};

export default HeaderC;