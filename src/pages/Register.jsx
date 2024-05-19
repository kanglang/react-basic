import { Button, Form, Input, NavBar, Toast } from 'antd-mobile';
import React, { useCallback, useEffect, useState } from 'react';
import { EyeInvisibleOutline, EyeOutline,LeftOutline } from 'antd-mobile-icons'
import '../../src/css/bottom.less'
import { useNavigate } from 'react-router-dom';
import { fetchGet, fetchPost, } from '../../src/config';
import api from '../../src/config/api'
import axios from 'axios'



const Register = () => {
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate();

  const onFinish = (values) => {
    const { username, password, password_confirmation } = values;
    if (!username) {
      Toast.show('请输入用户名')
    }
    if (username.length != 11) {
      Toast.show('用户名格式不正确')
    }
    if (!password) {
      Toast.show('请输入密码')
    }
    if (!password_confirmation) {
      Toast.show('请确认密码')
    }
    if (password != password_confirmation) {
      Toast.show('两次密码输入不一致，请重新输入')
    }

    let params = {
      username: username,
      password: password,
      password_confirmation: password_confirmation
    };

    api.register(params).then(res=>{
      if (res.status == 20000 && res.data) {
        const access_token = res.data.access_token;
        
        window.localStorage.setItem("access_token", access_token)
        navigate('/', { replace: true })
      }
    })
  };

  return (
    <div className='app'>
      <div style={{ backgroundColor: '#CC0002' , position: 'absolute', top: 0, width: '100%', height: "45px", zIndex: 2 }}><NavBar backArrow={(<LeftOutline color='#FFF' fontSize={20}/>)} onBack={() => { navigate(-1) }}><div style={{ color: 'white' }}>注册</div></NavBar></div>
      <div style={{ marginTop: "60px" }}>

        <Form layout='horizontal'
          onFinish={onFinish}
          footer={
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: "16px", paddingLeft: "36px", paddingRight: "36px" }}>
              <Button block type='submit' color='primary' size='middle' >
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
          <Form.Item
            label='确认密码'
            name='password_confirmation'
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
              placeholder='请再次输入密码'
              clearable
              type={visible ? 'text' : 'password'}
            />
          </Form.Item>
        </Form>
      </div>

    </div >
  );
}

export default Register;