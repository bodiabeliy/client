import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import cls from "./Tabs.module.scss"
import { classNames } from 'shared/lib/helpers/classNames';
import { RegistrationForm } from 'widgets/Forms';
import { LoginForm } from 'widgets/Forms';
import { Link } from 'react-router-dom';
import { RegistrationPage } from 'pages/RegistrationPage';
const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: "Вход",
    children: <LoginForm />,
  },
  {
    key: '2',
    label: <Link to={"/registration"}>Регистрация</Link>,
    children: <RegistrationPage />,
  }
];
export const LoginTabs = () => {
    return (
             <Tabs 
                defaultActiveKey="1" 
                className={classNames(cls.tabsContent)} 
                items={items} onChange={onChange} />
    )
}
