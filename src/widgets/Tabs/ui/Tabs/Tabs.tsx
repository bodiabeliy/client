import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import cls from "./Tabs.module.scss"
import { classNames } from 'shared/lib/helpers/classNames';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Вход`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: '2',
    label: `Регистрация`,
    children: `Content of Tab Pane 2`,
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
