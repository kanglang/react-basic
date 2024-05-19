
import { Button, Dialog, Form, Input, NavBar, Toast } from 'antd-mobile';
import React, { useEffect, useState } from 'react';
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'

import '../../src/css/bottom.less'
import { useNavigate } from 'react-router-dom';
import api from '../../src/config/api';
import axios from 'axios';
const Login = () => {
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate();
  const onFinish = (values) => {
    const { username, password } = values;
    if (!username) {
      Toast.show('请输入用户名')
      return;
    }
    if (username.length != 11) {
      Toast.show('用户名格式不正确')
      return;
    }
    if (!password) {
      Toast.show('请输入密码')
      return;
    }


    let params = {
      username: username,
      password: password,
      password_confirmation: password
    };
    api.login(params).then(res => {
      if (res.status == 20000 && res.data) {
        const access_token = res.data.access_token;
        window.localStorage.setItem("access_token", access_token)
        navigate('/', { replace: true })
      }
    })

    // 登录成功后，跳转 

  }
  return (
    <div className='app'>
      <div style={{ backgroundColor: '#CC0002' , position: 'absolute', top: 0, width: '100%', height: "45px", zIndex: 2 }}><NavBar backArrow={false}><div style={{ color: 'white' }}>登录</div></NavBar></div>
      <div style={{ marginTop: "60px" }}>

        <Form
          layout='horizontal'
          name='form'
          onFinish={onFinish}
          footer={
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: "16px", paddingLeft: "36px", paddingRight: "36px" }}>
              <Button block type='submit' color='primary' size='middle' >
                立即登录
              </Button>
              <Button color='primary' fill='none' style={{ marginTop: 10 }} onClick={() => {
                navigate('/register')
              }}>
                立即注册
              </Button>
            </div>
          }
        >
          <Form.Item label='用户名' name='username'>
            <Input placeholder='请输入用户名' clearable />
          </Form.Item>
          <Form.Item
            label='密码'
            name='password'
            extra={
              <div className="eye">
                {!visible ? (
                  <EyeInvisibleOutline onClick={() => setVisible(true)} />
                ) : (
                  <EyeOutline onClick={() => setVisible(false)} />
                )}
              </div>
            }
          >
            <Input
              placeholder='请输入密码'
              clearable
              type={visible ? 'text' : 'password'}
            />
          </Form.Item>
        </Form>
      </div>

    </div >
  );
}

export default Login;