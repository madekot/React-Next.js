import { LayoutProps } from './Layout.props';
import s from './Layout.module.css';
import cn from 'classnames';
import { Header } from '../Header';
import React from 'react';
// import { Sidebar } from '../Sidebar';
import { Footer } from '../Footer';
import { Sidebar } from "../Sidebar";

export const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className={s.wrapper}>
            <Header className={s.header} />
            <Sidebar className={s.sidebar} />
            <div className={s.body}>
                {children}
            </div>
            <Footer className={s.footer} />
        </div>
    );
};


