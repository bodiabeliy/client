import React, { Suspense } from 'react';
import {Link} from 'react-router-dom';
import './styles/index.scss';
import { classNames } from 'shared/lib/helpers/classNames';
import useTheme from './providers/ThemeProvider/lib/useTheme';
import { AppRouter } from './router';
import { SideBar } from 'widgets/SideBar';

const App = () => {
   const {theme, switchTheme} = useTheme()
    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback={<div>Loading...</div>}>
                <SideBar />
               <AppRouter />
            </Suspense>
        </div>
    );
};

export default App;
