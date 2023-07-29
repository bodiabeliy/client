import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from "./UserProfilePage.module.scss"
import { PageDescription } from 'shared/ui/PageDescription';
import { UserProfileForm } from 'widgets/Forms';
const UserProfilePage = () => {
    return (
        <div className={classNames(cls.mainWrapper)}>  
        <div className={classNames(cls.mainContent, {}, ["userProfile"])}>
            <div className={cls.userProfile}>
                <PageDescription pageName={"userProfile"} />
             </div>
            <div className={cls.form}>
                <UserProfileForm />
            </div>
        </div>          
    </div>
    );
};

export default UserProfilePage;
