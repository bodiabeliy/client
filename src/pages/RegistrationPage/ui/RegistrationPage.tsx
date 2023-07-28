import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from "./Registration.module.scss"
import { PageDescription } from 'shared/ui/PageDescription';
const RegistrationPage = () => {
    return (
        <div className={classNames(cls.mainWrapper)}>  
        <div className={classNames(cls.mainContent)}>
            <div className={cls.textDescription}>
                <PageDescription pageName={"registration"} />
             </div>
            <div className={cls.form}>
              fgfgf
            </div>
        </div>          
    </div>
    );
};

export default RegistrationPage;
