import React from 'react';
import {LoginTabs} from "widgets/Tabs/ui/Tabs/Tabs"
import { LangSwitcher } from 'widgets/LangSwitcher';
import { PageDescription } from 'shared/ui/PageDescription';
import cls from "./MainPage.module.scss"
import { classNames } from 'shared/lib/helpers/classNames';


const MainPage = () => {
    return (<>
        <LangSwitcher />
        <div className={classNames(cls.mainWrapper)}>  
            <div className={classNames(cls.mainContent)}>
                <div className={cls.textDescription}>
                    <PageDescription pageName={"main"} />
                 </div>
                <div className={cls.form}>
                    <LoginTabs />
                </div>
            </div>          
        </div>
    </>
       
    );
};

export default MainPage;
