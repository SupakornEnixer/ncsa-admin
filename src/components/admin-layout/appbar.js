import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React from 'react'
import { theme } from 'antd'

function Appbar({ collapsed, onClick = () => { } }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
        borderRadius: '.5rem',
        boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)'
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={onClick}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
    </Header>
  )
}

export default Appbar