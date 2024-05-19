import React, { FC } from 'react'
import { NavBar, TabBar } from 'antd-mobile'
import {
  Route,
  useNavigate,
  Routes,
  useLocation,
  MemoryRouter as Router,
} from 'react-router-dom'
import {
  AppOutline,
  MessageOutline,
  BillOutline,
  UserOutline,
} from 'antd-mobile-icons'


const Bottom = () => {
  const navigate  = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value) => {
    navigate(value)
  }

  const tabs = [
    {
      key: '/',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/notebook',
      title: '账本',
      icon: <BillOutline />
    },
    {
      key: '/mine',
      title: '我的',
      icon: <UserOutline />,
    },
  ]

  return (
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title}/>
          
      ))}
    </TabBar>
  )
}

export default Bottom;
