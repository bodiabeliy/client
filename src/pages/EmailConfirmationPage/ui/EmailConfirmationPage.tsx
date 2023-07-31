import React from 'react';
import {LoginTabs} from "widgets/Tabs/ui/Tabs/Tabs"
import { LangSwitcher } from 'widgets/LangSwitcher';
import { PageDescription } from 'shared/ui/PageDescription';
import cls from "./EmailConfirmationPage.module.scss"
import { classNames } from 'shared/lib/helpers/classNames';
import { LoginForm } from 'widgets/Forms';


const EmailConfirmationPage = () => {
    return (<>
        <div className={classNames(cls.mainWrapper)}>  
            <div className={classNames(cls.mainContent)}>
                <div className={cls.textDescription}>
                    <PageDescription pageName={"userProfile"} />
                 </div>
                <div className={cls.form}>
                <LoginForm formType='emailConfirm' />
                </div>
            </div>          
        </div>
    </>
       
    );
};

export default EmailConfirmationPage;
