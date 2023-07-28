import React, { Suspense } from 'react';
import {Link} from 'react-router-dom';
import './styles/index.scss';
import { classNames } from 'shared/lib/helpers/classNames';
import useTheme from './providers/ThemeProvider/lib/useTheme';
import { AppRouter } from './router';
import { SideBar } from 'widgets/SideBar';
import { Layout, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Footer, Header } from 'antd/es/layout/layout';

const App = () => {
   const {theme, switchTheme} = useTheme()
    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback={<div>Loading...</div>}>
      <Sider  width={600}>
        <SideBar />
      </Sider>
        <AppRouter />
        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer> */}
            </Suspense>
        </div>
    );
};

export default App;
