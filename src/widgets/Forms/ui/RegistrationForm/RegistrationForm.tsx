import React , {useState} from 'react';
import { Button, Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
export const RegistrationForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return ( 
        <>
    <Space direction="vertical">
      <Input.Password placeholder="input password" />
      <Input.Password
        placeholder="input password"
        iconRender={(visible) => (visible ? <EyeTwoTone rev={undefined} /> : <EyeInvisibleOutlined rev={undefined} />)}
      />
      <Space direction="horizontal">
        <Input.Password
          placeholder="input password"
          visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
        />
        <Button style={{ width: 80 }} onClick={() => setPasswordVisible((prevState) => !prevState)}>
          {passwordVisible ? 'Hide' : 'Show'}
        </Button>
      </Space>
    </Space>
        </>
     );
}
 
