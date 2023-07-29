import React , {useState} from 'react';
import { Button, Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import cls from "./RegistrationForm.module.scss"
import { classNames } from 'shared/lib/helpers/classNames';
export const RegistrationForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return ( 
        <>
    <Space direction="vertical">
        <p className={cls.userProfileFormTitle}>Профиль пользователя</p>
        <div className={classNames(cls.mainRegistrationForm)}>
            <div className={classNames(cls.userNameArea)}>
                <Input
                placeholder="input password" 
                />
                <Input
                    placeholder="input password"
                />
                <Input
                    placeholder="input password"
                />
            </div>
            <div className={classNames(cls.userAdditionalInfoArea)}>
                <Input
                placeholder="input password" 
                />
                <Input
                    placeholder="input password"
                />
                <Input
                    placeholder="input password"
                />
                <Input
                placeholder="input password"
                />
                <Input
                placeholder="input password"
                />
        </div>
        </div>
    </Space>
        </>
     );
}
 
