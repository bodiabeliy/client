import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import cls from "./Tabs.module.scss"
import { classNames } from 'shared/lib/helpers/classNames';
import { RegistrationForm } from 'widgets/Forms';
import { LoginForm } from 'widgets/Forms';
const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Вход`,
    children: <LoginForm />,
  },
  {
    key: '2',
    label: `Регистрация`,
    children: <RegistrationForm />,
  }
];
export const LoginTabs = () => {
    return (
             <Tabs 
                defaultActiveKey="2" 
                className={classNames(cls.tabsContent)} 
                items={items} onChange={onChange} />
    )
}
